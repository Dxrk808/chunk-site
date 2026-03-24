import { Layout } from '@/components/layout/Layout';
import { flavors, boxes } from '@/data/products';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';

export default function Shop() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-portal opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase mb-4 block">
              Sector 7 • Restricted Access
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-wider mb-6">
              Containment <span className="text-gradient-cosmic">Vault</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              Each anomaly has been carefully stabilized for safe transport.
              Handle with care — these are not ordinary desserts.
            </p>
          </div>
        </div>
      </section>

      {/* Box Sizes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              Containment Units
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-wider">
              Choose Your Configuration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {boxes.map((box) => (
              <div
                key={box.id}
                className={cn(
                  'containment-card p-6 text-center transition-all hover:border-primary/50',
                  box.popular && 'border-secondary/50 ring-1 ring-secondary/30'
                )}
              >
                {box.popular && (
                  <div className="font-mono text-xs text-secondary uppercase tracking-wider mb-3">
                    ★ Most Popular
                  </div>
                )}
                <h3 className="font-headline text-xl tracking-wider mb-2">{box.name}</h3>
                <div className="font-headline text-3xl font-bold text-secondary mb-1">
                  {box.priceDisplay}
                </div>
                <div className="font-mono text-xs text-muted-foreground mb-4">
                  {box.count} specimens • ${(box.price / box.count).toFixed(2)} each
                </div>
                <p className="font-body text-sm text-muted-foreground mb-6">{box.description}</p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-secondary to-rift-glow text-black font-headline font-bold tracking-wider rounded-lg hover:opacity-90 transition-all text-sm">
                  Select Configuration
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavors Grid */}
      <section className="py-16 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase mb-4 block">
              Available Specimens
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-wider">
              Active Anomalies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {flavors.map((flavor, i) => (
              <div
                key={flavor.id}
                className="containment-card p-6 animate-warp-in hover:border-primary/50 transition-all group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Image placeholder */}
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 flex items-center justify-center">
                  <span className="font-headline text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                    {flavor.codename}
                  </span>
                </div>

                {/* Badge */}
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
                  <span className="font-mono text-xs text-muted-foreground">{flavor.origin}</span>
                </div>

                <h3 className="font-headline text-lg tracking-wider mb-2">{flavor.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-3">{flavor.description}</p>

                {/* Specs */}
                <div className="space-y-2 mb-4 p-3 rounded bg-muted/20 border border-border/30">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span className="text-foreground">{flavor.specs.dimensions}</span>
                  </div>
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-muted-foreground">Weight</span>
                    <span className="text-foreground">{flavor.specs.weight}</span>
                  </div>
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-muted-foreground">Density</span>
                    <span className="text-foreground">{flavor.specs.density}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <span className="font-headline text-xl font-bold text-secondary">${flavor.price}</span>
                  <span className="font-mono text-xs text-muted-foreground/60">per specimen</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="py-16 border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Fresh Containment', value: 'Shipped within 3 days of baking' },
              { label: 'Premium Packaging', value: 'Insulated for maximum freshness' },
              { label: 'Limited Quantities', value: '48-hour drop windows' },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-lg bg-muted/10 border border-border/30">
                <h3 className="font-headline text-sm tracking-wider text-foreground mb-2">{item.label}</h3>
                <p className="font-mono text-xs text-muted-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
