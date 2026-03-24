import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Shield, Eye, EyeOff, Loader2 } from 'lucide-react';

export default function AdminLogin() {
  const { login, register, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFirstRun, setIsFirstRun] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkingStatus, setCheckingStatus] = useState(true);

  const API_BASE = import.meta.env.DEV ? 'http://localhost:3001' : '';

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/admin');
    }
  }, [isLoading, isAuthenticated, navigate]);

  useEffect(() => {
    fetch(`${API_BASE}/api/auth/status`)
      .then((r) => r.json())
      .then((data: { firstRun: boolean }) => {
        setIsFirstRun(data.firstRun);
      })
      .catch(() => {})
      .finally(() => setCheckingStatus(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (isFirstRun) {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setError('Password must be at least 6 characters');
        setLoading(false);
        return;
      }
      const ok = await register(username, password);
      if (ok) {
        navigate('/admin');
      } else {
        setError('Registration failed — admin may already exist');
      }
    } else {
      const ok = await login(username, password);
      if (ok) {
        navigate('/admin');
      } else {
        setError('Invalid credentials');
      }
    }
    setLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080810] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-portal-pulse">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-headline text-2xl font-bold tracking-widest mb-2">
            CHUNK ADMIN
          </h1>
          <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            {isFirstRun ? 'First-Time Setup' : 'Authentication Required'}
          </p>
        </div>

        {/* Form */}
        <div className="containment-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="admin"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors pr-12"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {isFirstRun && (
              <div>
                <label className="block font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="••••••••"
                />
              </div>
            )}

            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30">
                <p className="font-mono text-xs text-red-400">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-headline font-bold tracking-wider rounded-lg hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                isFirstRun ? 'Create Admin Account' : 'Authenticate'
              )}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => { setIsFirstRun(!isFirstRun); setError(''); }}
              className="font-mono text-xs text-primary/70 hover:text-primary transition-colors"
            >
              {isFirstRun ? '← Back to login' : 'First time? Create admin account →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
