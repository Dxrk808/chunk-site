import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { drops } from '@/data/products';
import { cn } from '@/lib/utils';

type DropFilter = 'all' | 'past' | 'active' | 'incoming' | 'classified';

const filters: { label: string; value: DropFilter }[] = [
  { label: 'All Events', value: 'all' },
  { label: 'Past', value: 'past' },
  { label: 'Active', value: 'active' },
  { label: 'Incoming', value: 'incoming' },
  { label: 'Classified', value: 'classified' },
];

export default function Drops() {
  const [filter, setFilter] = useState<DropFilter>('all');

  const filteredDrops = drops.filter((d) => filter === 'all' || d.status === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-portal opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase mb-4 block">
              Temporal Registry • Rift Events
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-wider mb-6">
              Drop <span className="text-gradient-cosmic">Calendar</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              Track upcoming rift events and flavor anomalies.
              Mark your calendar for the next CHUNK emergence.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  'px-4 py-2 font-mono text-sm rounded-lg transition-all',
                  filter === f.value
                    ? 'bg-primary text-white'
                    : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/30" />

            <div className="space-y-12">
              {filteredDrops.map((drop, i) => (
                <div
                  key={drop.id}
                  className={cn(
                    'relative pl-12 md:pl-0',
                    i % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'
                  )}
                >
                  {/* Dot */}
                  <div
                    className={cn(
                      'absolute left-2 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2',
                      drop.status === 'active'
                        ? 'bg-secondary border-secondary animate-pulse'
                        : drop.status === 'incoming'
                          ? 'bg-primary/50 border-primary'
                          : drop.status === 'classified'
                            ? 'bg-red-500/50 border-red-500'
                            : 'bg-muted border-muted-foreground/30'
                    )}
                  />

                  {/* Card */}
                  <div className="containment-card p-6 animate-warp-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span
                        className={cn(
                          'px-2 py-1 text-xs font-mono rounded',
                          drop.status === 'active' && 'bg-secondary/20 text-secondary',
                          drop.status === 'incoming' && 'bg-primary/20 text-primary',
                          drop.status === 'classified' && 'bg-red-500/20 text-red-400',
                          drop.status === 'past' && 'bg-muted text-muted-foreground'
                        )}
                      >
                        {drop.status === 'active' ? 'ACTIVE' : drop.status.toUpperCase()}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{drop.date}</span>
                    </div>

                    <h3 className="font-headline text-xl tracking-wider text-foreground mb-2">{drop.name}</h3>
                    {drop.loreEntry && (
                      <p className="font-body text-sm text-muted-foreground">{drop.loreEntry}</p>
                    )}

                    {/* Flavors in drop */}
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <span className="font-mono text-xs text-muted-foreground/60 block mb-2">Specimens:</span>
                      <div className="flex flex-wrap gap-2">
                        {drop.flavors.map((f) => (
                          <span key={f.id} className="px-2 py-1 text-xs font-mono bg-muted/30 rounded text-foreground">
                            {f.codename}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Future placeholder */}
            <div className="relative pl-12 md:pl-0 md:pr-[calc(50%+2rem)] mt-12">
              <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-dashed border-muted-foreground/30" />
              <div className="containment-card p-6 text-center">
                <span className="font-mono text-sm text-muted-foreground/50">
                  ??? — More anomalies detected. Awaiting stabilization...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
