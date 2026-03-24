import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import crypto from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

// Generate a random JWT secret on first run, or use env var
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');
const JWT_EXPIRY = '7d';

// ── Database Setup ───────────────────────────────
const db = new Database(join(__dirname, 'chunk.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

// ── Middleware ────────────────────────────────────
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Auth middleware
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// ── Auth Routes ──────────────────────────────────

// Register (first-time only — only works if no admins exist)
app.post('/api/auth/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  // Check if any admin already exists
  const existing = db.prepare('SELECT COUNT(*) as count FROM admins').get();
  if (existing.count > 0) {
    return res.status(403).json({ error: 'Admin account already exists. Use login.' });
  }

  const hash = bcrypt.hashSync(password, 12);
  try {
    const result = db.prepare('INSERT INTO admins (username, password) VALUES (?, ?)').run(username, hash);
    const token = jwt.sign({ id: result.lastInsertRowid, username }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
    res.json({ token, username });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create admin' });
  }
});

// Login
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  const admin = db.prepare('SELECT * FROM admins WHERE username = ?').get(username);
  if (!admin || !bcrypt.compareSync(password, admin.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: admin.id, username: admin.username }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
  res.json({ token, username: admin.username });
});

// Get current user
app.get('/api/auth/me', authenticate, (req, res) => {
  res.json({ username: req.user.username });
});

// Check if first run (no admins yet)
app.get('/api/auth/status', (req, res) => {
  const existing = db.prepare('SELECT COUNT(*) as count FROM admins').get();
  res.json({ firstRun: existing.count === 0 });
});

// ── Health ───────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ── Start ────────────────────────────────────────
app.listen(PORT, () => {
  const adminCount = db.prepare('SELECT COUNT(*) as count FROM admins').get();
  console.log(`\n🍫 CHUNK Admin Server running on port ${PORT}`);
  console.log(`   Admin accounts: ${adminCount.count}`);
  if (adminCount.count === 0) {
    console.log('   ⚠️  No admin account yet — visit /admin/login to create one');
  }
  console.log('');
});
