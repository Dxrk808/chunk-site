# CHUNK Admin Server

Simple Express.js backend for admin authentication.

## Setup

```bash
cd server
npm install
npm start
```

Server runs on port 3001 by default. Set `PORT` env var to change.

## First Run

1. Start the server
2. Go to `/admin/login` on the frontend
3. Click "First time? Create admin account"
4. Set your username and password
5. That's it — only one admin account can be created

## Environment Variables

- `PORT` — Server port (default: 3001)
- `JWT_SECRET` — JWT signing secret (auto-generated if not set)

## API Routes

- `POST /api/auth/register` — Create admin (first-time only)
- `POST /api/auth/login` — Login
- `GET /api/auth/me` — Get current user (requires Bearer token)
- `GET /api/auth/status` — Check if first run
- `GET /api/health` — Health check
