import { type ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  BarChart3,
  Package,
  ShoppingBag,
  TrendingUp,
  LogOut,
  Shield,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/admin', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/admin/orders', label: 'Orders', icon: ShoppingBag },
  { href: '/admin/projections', label: 'Projections', icon: TrendingUp },
];

export function AdminLayout({ children }: { children: ReactNode }) {
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="font-mono text-primary animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-[#080810] text-foreground flex">
      {/* Sidebar — desktop */}
      <aside className="hidden md:flex flex-col w-64 border-r border-purple-900/30 bg-black/60">
        {/* Header */}
        <div className="p-6 border-b border-purple-900/30">
          <Link to="/admin" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="font-headline font-bold text-white text-sm">C</span>
            </div>
            <div>
              <div className="font-headline text-sm font-bold tracking-widest">CHUNK ADMIN</div>
              <div className="font-mono text-[10px] text-primary/70 tracking-wider">CLEARANCE: ADMINISTRATOR</div>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-body transition-all',
                  isActive
                    ? 'bg-primary/15 text-primary border border-primary/30'
                    : 'text-muted-foreground hover:bg-muted/10 hover:text-foreground'
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-purple-900/30">
          <div className="flex items-center gap-3 px-4 py-2 mb-2">
            <Shield className="w-4 h-4 text-primary/50" />
            <span className="font-mono text-xs text-muted-foreground">{user?.username}</span>
          </div>
          <button
            onClick={() => { logout(); navigate('/admin/login'); }}
            className="flex items-center gap-3 px-4 py-2 w-full rounded-lg text-sm text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar — mobile */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-purple-900/30 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
          <Link to="/admin" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="font-headline font-bold text-white text-xs">C</span>
            </div>
            <span className="font-headline text-sm font-bold tracking-widest">CHUNK ADMIN</span>
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile nav overlay */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/95 pt-20 px-4">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-4 py-4 rounded-lg text-base font-body transition-all',
                      isActive
                        ? 'bg-primary/15 text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                );
              })}
              <button
                onClick={() => { logout(); navigate('/admin/login'); }}
                className="flex items-center gap-3 px-4 py-4 w-full rounded-lg text-base text-red-400 hover:bg-red-500/10"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </nav>
          </div>
        )}

        {/* Content */}
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          {children}
        </main>

        {/* Mobile bottom nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-purple-900/30 z-50">
          <div className="flex items-center justify-around py-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-[10px] font-mono">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
