import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PortalRing } from '@/components/effects/PortalRing';
import { ChevronDown, Loader2, ArrowRight } from 'lucide-react';
import { flavors, boxes } from '@/data/products';
import { cn } from '@/lib/utils';

export default function Index() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribing(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubscribing(false);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background portal */}
        <div className="absolute inset-0 flex items-center justify-center">
          <PortalRing size="xl" className="opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 animate-warp-in">
          <div className="mb-8">
            <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase">
              Theobrova Labs • Experiment Active
            </span>
          </div>

          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 animate-chromatic">
            One drop.{' '}
            <span className="text-gradient-cosmic">One chance.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            A cosmic anomaly of gooey density. Born from a promise,
            forged on an alien world. CHUNK transcends ordinary desserts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <button className="px-8 py-4 bg-gradient-to-r from-secondary to-rift-glow text-black font-headline font-bold tracking-wider rounded-lg hover:opacity-90 transition-all glow-rift">
                Enter the Vault
              </button>
            </Link>
            <Link to="/facility">
              <button className="px-8 py-4 border border-primary/50 text-foreground font-headline font-bold tracking-wider rounded-lg hover:bg-primary/10 hover:border-primary transition-all">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </section>

      {/* ── ORIGIN PULSE ──────────────────────── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              Origin Pulse
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-wider mb-6">
              From the Void,{' '}
              <span className="text-gradient-cosmic">Emerges Perfection</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              On a distant world called Theobrova, a lone scientist works in silence.
              Each experiment, each flavor — a piece of a promise he made to someone he lost.
              CHUNK isn't just a brownie. It's the densest, gooiest, most impossibly rich
              anomaly ever to emerge from the rift.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'Thickness', value: '2"' },
              { label: 'Dimensions', value: '3" × 3"' },
              { label: 'Drop Window', value: '48 HRS' },
              { label: 'Density', value: 'EXTREME' },
            ].map((stat) => (
              <div key={stat.label} className="containment-card p-4 text-center">
                <div className="font-headline text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-primary to-transparent my-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full animate-rift-glow" />
          </div>
        </div>
      </section>

      {/* ── FEATURED FLAVORS ──────────────────── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase mb-4 block">
              Active Specimens
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-wider">
              Current <span className="text-gradient-cosmic">Anomalies</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {flavors.map((flavor, i) => (
              <div
                key={flavor.id}
                className="containment-card p-6 animate-warp-in hover:border-primary/50 transition-all group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Placeholder image area */}
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 flex items-center justify-center overflow-hidden">
                  <span className="font-headline text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                    {flavor.codename}
                  </span>
                </div>

                {/* Classification badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={cn(
                      'px-2 py-1 text-xs font-mono rounded',
                      flavor.classification === 'STABLE' && 'bg-green-500/20 text-green-400',
                      flavor.classification === 'VOLATILE' && 'bg-yellow-500/20 text-yellow-400',
                      flavor.classification === 'CRITICAL' && 'bg-red-500/20 text-red-400',
                      flavor.classification === 'UNSTABLE' && 'bg-purple-500/20 text-purple-400'
                    )}
                  >
                    {flavor.classification}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{flavor.codename}</span>
                </div>

                <h3 className="font-headline text-lg tracking-wider text-foreground mb-2">{flavor.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">{flavor.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <span className="font-headline text-xl font-bold text-secondary">${flavor.price}</span>
                  <span className="font-mono text-xs text-muted-foreground">{flavor.specs.dimensions}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <button className="px-8 py-3 border border-primary/50 text-foreground font-headline font-medium tracking-wider rounded-lg hover:bg-primary/10 transition-all inline-flex items-center gap-2">
                View All Specimens <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              Containment Protocol
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-wider">
              How <span className="text-gradient-cosmic">Drops</span> Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Signal Received',
                desc: 'Follow our transmissions. When a new experiment stabilizes, we announce the drop date and flavor lineup.',
              },
              {
                step: '02',
                title: 'Rift Opens',
                desc: 'The 48-hour drop window activates. Choose your box size, select your flavors, secure your specimens before stock depletes.',
              },
              {
                step: '03',
                title: 'Containment Ships',
                desc: 'Your brownies are baked fresh, sealed in premium containment packaging, and shipped within 3 days for maximum density integrity.',
              },
            ].map((item, i) => (
              <div key={item.step} className="text-center animate-warp-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-primary/50 flex items-center justify-center">
                  <span className="font-headline text-xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-headline text-lg tracking-wider mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / EMAIL CAPTURE ───────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-portal opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-wider mb-6">
              Ready to Enter{' '}
              <span className="text-gradient-cosmic">The Rift</span>?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8">
              Join the containment protocol. Be the first to know when new anomalies emerge from Chunk's lab.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="agent@theobrova.lab"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 bg-muted/50 border border-border/50 rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-6 py-3 bg-gradient-to-r from-secondary to-rift-glow text-black font-headline font-bold tracking-wider rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
              >
                {isSubscribing ? (
                  <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                ) : subscribed ? (
                  '✓ Linked'
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>

            <p className="text-xs font-mono text-muted-foreground/60">
              Drop notifications only. No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
