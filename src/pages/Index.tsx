import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { PortalRing } from '@/components/effects/PortalRing';
import { ChevronDown, Loader2, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { flavors, ogChunk } from '@/data/products';
import { cn } from '@/lib/utils';
import { getBrownieImage } from '@/components/brownie-images';

export default function Index() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const limitedFlavors = flavors.filter((f) => !f.alwaysAvailable);

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
      {/* ── ANNOUNCEMENT BAR ──────────────────── */}
      <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 bg-gradient-to-r from-purple-900/80 via-purple-800/80 to-purple-900/80 backdrop-blur-sm border-b border-purple-700/40">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="font-mono text-xs tracking-[0.2em] text-amber-300/90 uppercase">
            First Drop Coming Soon
          </span>
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        </div>
      </div>

      {/* ── HERO ──────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
        {/* Background portal — more visible */}
        <div className="absolute inset-0 flex items-center justify-center">
          <PortalRing size="xl" className="opacity-60 scale-125" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 animate-warp-in max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-secondary/80 uppercase">
              Theobrova Labs • Experiment Active
            </span>
          </div>

          <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-8 animate-chromatic leading-tight">
            One drop.{' '}
            <span className="text-gradient-cosmic">One chance.</span>
          </h1>

          <p className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed">
            A cosmic anomaly of gooey density. Born from a promise,
            forged on an alien world. CHUNK transcends ordinary desserts.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/shop">
              <button className="px-10 py-5 bg-gradient-to-r from-secondary to-rift-glow text-black font-headline font-bold tracking-wider rounded-lg hover:opacity-90 transition-all glow-rift text-lg">
                Enter the Vault
              </button>
            </Link>
            <Link to="/lore">
              <button className="px-10 py-5 border border-primary/50 text-foreground font-headline font-bold tracking-wider rounded-lg hover:bg-primary/10 hover:border-primary transition-all text-lg">
                Read the Lore
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </section>

      {/* ── THE STORY ─────────────────────────── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              Classified Archives
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-wider mb-4">
              The <span className="text-gradient-cosmic">Story</span>
            </h2>
          </div>

          <div className="space-y-12 max-w-3xl mx-auto">
            {/* Chapter 1: Terra Dulce */}
            <div className="containment-card p-8 md:p-10 animate-warp-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="font-mono text-xs text-red-400">01</span>
                </div>
                <span className="font-mono text-xs text-red-400 uppercase tracking-wider">The Fall of Terra Dulce</span>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
                Terra Dulce was home — a world of brownie civilization, inventors, and dreamers. But the wars came,
                and with them, the end. Launch alarms. Evacuation signals. The sky burning. In the final moments,
                only a handful of escape pods remained. <span className="text-foreground font-medium">Chunk made it out. Most didn't.</span>
              </p>
            </div>

            {/* Chapter 2: Chunk & Sweets */}
            <div className="containment-card p-8 md:p-10 animate-warp-in" style={{ animationDelay: '0.15s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="font-mono text-xs text-secondary">02</span>
                </div>
                <span className="font-mono text-xs text-secondary uppercase tracking-wider">A Promise Made</span>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
                There was one person who always believed — <span className="text-foreground font-medium">Sweets</span>.
                Soft-spoken, unshakeably supportive. The only one who saw Chunk's genius when no one else would look.
                Her final words before the world ended:{' '}
                <span className="text-primary italic">"I'm sorry… I love you. Now go keep your promise."</span>
              </p>
            </div>

            {/* Chapter 3: Theobrova */}
            <div className="containment-card p-8 md:p-10 animate-warp-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-mono text-xs text-primary">03</span>
                </div>
                <span className="font-mono text-xs text-primary uppercase tracking-wider">Theobrova — A Second Chance</span>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed text-base md:text-lg">
                Chunk crash-landed on an alien world and found an abandoned research facility — advanced equipment,
                strange sugar-based biotechnology. As if the planet was waiting for someone like him.
                Now he works alone, driven by grief and an unbreakable promise.{' '}
                <span className="text-foreground font-medium">Each brownie is an experiment. Each flavor, a piece of that promise kept.</span>
              </p>
            </div>
          </div>

          <div className="text-center mt-14">
            <Link to="/lore">
              <button className="px-8 py-4 border border-primary/50 text-foreground font-headline font-medium tracking-wider rounded-lg hover:bg-primary/10 transition-all inline-flex items-center gap-3 group">
                <BookOpen className="w-5 h-5 text-primary group-hover:text-primary/80" />
                Read the Full Lore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ORIGIN PULSE (Story-Driven Stats) ── */}
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
            <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Every specimen that emerges from Chunk's lab carries the weight of an entire world.
              These aren't recipes — they're experiments pushed to the molecular limit.
            </p>
          </div>

          {/* Stats — story-driven */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { label: 'Thickness', value: '2"', subtitle: 'Pure density' },
              { label: 'Dimensions', value: '3" × 3"', subtitle: 'Perfect square' },
              { label: 'Drop Window', value: '48 HRS', subtitle: 'Then it\'s gone' },
              { label: 'Density Rating', value: 'EXTREME', subtitle: 'Off the charts' },
            ].map((stat) => (
              <div key={stat.label} className="containment-card p-5 text-center">
                <div className="font-headline text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                <div className="font-body text-xs text-muted-foreground/60 mt-1">{stat.subtitle}</div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="relative h-px bg-gradient-to-r from-transparent via-primary to-transparent my-16">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full animate-rift-glow" />
          </div>
        </div>
      </section>

      {/* ── OG CHUNK — ALWAYS AVAILABLE ───────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/5 to-black" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-14">
            <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase mb-4 block animate-rift-glow inline-block px-4 py-1 rounded-full border border-secondary/30">
              Always Available
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-wider mt-4">
              The <span className="text-gradient-cosmic">Original</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            {/* Image */}
            <div className="animate-warp-in">
              {(() => {
                const BrownieImg = getBrownieImage(ogChunk.id);
                return BrownieImg ? <BrownieImg className="w-full max-w-sm mx-auto" /> : (
                  <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center max-w-sm mx-auto">
                    <span className="font-headline text-5xl font-bold text-primary/30">{ogChunk.codename}</span>
                  </div>
                );
              })()}
            </div>

            {/* Info */}
            <div className="animate-warp-in" style={{ animationDelay: '0.15s' }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1.5 text-xs font-mono rounded bg-green-500/20 text-green-400">
                  {ogChunk.classification}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{ogChunk.codename}</span>
              </div>

              <h3 className="font-headline text-3xl md:text-4xl font-bold tracking-wider mb-4 text-foreground">
                {ogChunk.name}
              </h3>

              <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
                {ogChunk.description}
              </p>

              <div className="space-y-2 mb-6 p-4 rounded-lg bg-muted/10 border border-border/30">
                <div className="flex justify-between font-mono text-sm">
                  <span className="text-muted-foreground">Dimensions</span>
                  <span className="text-foreground">{ogChunk.specs.dimensions}</span>
                </div>
                <div className="flex justify-between font-mono text-sm">
                  <span className="text-muted-foreground">Weight</span>
                  <span className="text-foreground">{ogChunk.specs.weight}</span>
                </div>
                <div className="flex justify-between font-mono text-sm">
                  <span className="text-muted-foreground">Density</span>
                  <span className="text-foreground">{ogChunk.specs.density}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-headline text-3xl font-bold text-secondary">${ogChunk.price}</span>
                <Link to="/shop">
                  <button className="px-6 py-3 bg-gradient-to-r from-secondary to-rift-glow text-black font-headline font-bold tracking-wider rounded-lg hover:opacity-90 transition-all glow-rift">
                    Get Yours
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIMITED DROP FLAVORS ───────────────── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase mb-4 block">
              Limited Experiments
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-wider">
              Drop <span className="text-gradient-cosmic">Anomalies</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Available only during limited 48-hour drop windows. Once they're gone, they're gone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {limitedFlavors.map((flavor, i) => {
              const BrownieImg = getBrownieImage(flavor.id);
              return (
                <div
                  key={flavor.id}
                  className="containment-card p-6 animate-warp-in hover:border-primary/50 transition-all group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="aspect-square rounded-lg mb-6 overflow-hidden">
                    {BrownieImg ? (
                      <BrownieImg />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <span className="font-headline text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                          {flavor.codename}
                        </span>
                      </div>
                    )}
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
              );
            })}
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
