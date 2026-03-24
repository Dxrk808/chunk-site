import { Layout } from '@/components/layout/Layout';

const sections = [
  {
    title: 'What is CHUNK?',
    content: `CHUNK is not merely a brownie. It is a cosmic anomaly — a convergence of density, texture, and flavor that defies conventional culinary physics.

Standing nearly 2 inches tall and cut to a precise 3×3 inch square, each CHUNK specimen exhibits characteristics impossible to replicate through standard baking methods: a surface tension that yields to pressure while maintaining structural integrity, a chocolate density that approaches theoretical limits, and a gooey core that exists in a state of perpetual freshness.

Every piece is handcrafted in small batches. Every flavor is an experiment. Every drop is a moment that won't come again.`,
    status: 'VERIFIED',
  },
  {
    title: 'The Promise',
    content: `Before the fall of Terra Dulce, a young scientist named Chunk made a promise to the only person who ever believed in him.

"Even if nobody else believes in you, I do. Promise me you'll never stop creating."

Now, alone on a distant world called Theobrova, Chunk works in silence. Not to save the universe. Not to become a hero. Just to keep a promise to someone he lost — and to create a world she would have loved.

Every experiment, every flavor, every anomaly that emerges from the lab... is a piece of that promise.`,
    status: 'DECLASSIFIED',
  },
  {
    title: 'How Drops Work',
    content: `CHUNK operates on a limited-drop model. Every 6-8 weeks, new flavors emerge from the lab — each one an experiment that took weeks to stabilize.

When a drop is announced, you have exactly 48 hours to secure your specimens. After that, the rift closes and those specific batches are gone.

Why? Because CHUNK is handcrafted in extremely small quantities. Every brownie is baked fresh, sealed in premium containment packaging, and shipped within 3 days to ensure maximum density and flavor integrity.

This isn't mass production. This is science.`,
    status: 'MANDATORY',
  },
  {
    title: 'Crystal Shards',
    content: `Every purchase generates Crystal Shards — the cosmic energy currency that powers the alien lab equipment on Theobrova.

The more shards collected, the more experiments Chunk can run. New flavors, new discoveries, new chapters of the story.

Your support doesn't just get you brownies. It fuels the research. It keeps the lights on in the lab. It keeps the promise alive.`,
    status: 'ACTIVE',
  },
  {
    title: 'Containment & Shipping',
    content: `CHUNK specimens are perishable anomalies. To maintain optimal density and gooey integrity, all orders are:

• Baked fresh after your order is placed
• Sealed in insulated containment packaging
• Shipped to arrive within 3 days maximum
• Currently available to West Coast regions (expanding soon)

We don't cut corners on freshness. If it can't arrive perfect, we won't ship it.`,
    status: 'PROTOCOL',
  },
];

export default function Facility() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-portal opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              Research Division • Level 5 Clearance
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-wider mb-6">
              The <span className="text-gradient-cosmic">Facility</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              Welcome to the CHUNK Research Archives. Everything you need to know
              about the anomaly, its origins, and containment procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div
                key={section.title}
                className="containment-card p-6 md:p-8 animate-warp-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <h2 className="font-headline text-xl md:text-2xl tracking-wider">{section.title}</h2>
                  </div>
                  <span className="px-3 py-1 text-xs font-mono bg-muted text-secondary rounded shrink-0">
                    {section.status}
                  </span>
                </div>

                {/* Body */}
                <div className="font-body text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>

                {/* HUD decoration */}
                <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground/40">
                    DOC-{String(i + 1).padStart(3, '0')}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/40">CLEARANCE: PUBLIC</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
