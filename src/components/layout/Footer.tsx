import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="font-headline font-bold text-white text-xs">C</span>
              </div>
              <span className="font-headline font-bold text-lg tracking-widest">CHUNK</span>
            </Link>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              Born from the rift.<br />
              Forged on Theobrova.<br />
              A promise kept.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-secondary uppercase mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                { href: '/shop', label: 'Containment Vault' },
                { href: '/drops', label: 'Drop Calendar' },
                { href: '/facility', label: 'The Facility' },
                { href: '/lore', label: 'Lore Archive' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Intel */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-secondary uppercase mb-4">Intel</h4>
            <ul className="space-y-2">
              {[
                { href: '/faq', label: 'FAQ' },
                { href: '/transmissions', label: 'Transmissions' },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.2em] text-secondary uppercase mb-4">Transmit</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground/50">
            © 2024 CHUNK Labs — Theobrova Research Division
          </p>
          <p className="font-mono text-xs text-muted-foreground/50">
            All specimens are made with love. And science.
          </p>
        </div>
      </div>
    </footer>
  );
}
