import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoreEntry {
  id: string;
  title: string;
  category: string;
  classification: string;
  content: string;
}

const loreEntries: LoreEntry[] = [
  {
    id: 'L001',
    title: 'The Fall of Terra Dulce',
    category: 'Origins',
    classification: 'DECLASSIFIED',
    content:
      'Terra Dulce was home. A world of brownie civilization — inventors, dreamers, creators. But the wars came, and with them, the end. Launch alarms. Evacuation signals. The sky burning. In the final moments, only a handful of escape pods remained. Chunk made it out. Most didn\'t. The planet detonated in nuclear fire, visible from orbit. A world of sweetness, reduced to ash.',
  },
  {
    id: 'L002',
    title: 'Subject Profile: CHUNK',
    category: 'Personnel',
    classification: 'PUBLIC',
    content:
      'Classification: Brownie — Male. Specialization: Experimental confectionery science, molecular restructuring, flavor synthesis. Background: Misunderstood genius since childhood. Filled notebooks with sketches of teleportation devices, pocket universes, and time-bending sugar energy. Ridiculed by peers, ignored by teachers. One known ally: Subject SWEETS (see file L003). Current status: Solo researcher on Theobrova. Emotional state: Functional, driven by unresolved grief and an unbreakable promise.',
  },
  {
    id: 'L003',
    title: 'Subject Profile: SWEETS',
    category: 'Personnel',
    classification: 'RESTRICTED',
    content:
      'Classification: Brownie — Female. Role: Emotional anchor, primary motivator for Subject CHUNK. Described as short, soft-spoken, and unshakeably supportive. The only individual on record who recognized CHUNK\'s potential before the fall. Final recorded words: "I\'m sorry… I love you. Now go keep your promise." Status: [DATA EXPUNGED] — presumed lost during the destruction of Terra Dulce. Her sacrifice is the foundational event that drives all current research on Theobrova.',
  },
  {
    id: 'L004',
    title: 'The Science Fair Incident',
    category: 'Events',
    classification: 'PUBLIC',
    content:
      'Senior year. CHUNK\'s teleportation device worked perfectly the night before — SWEETS witnessed him teleport an apple. At the fair, the machine failed. Public humiliation. Recordings circulated. CHUNK nearly abandoned science entirely. SWEETS intervened with the words that would define his life: "Even if nobody else believes in you, I do. Promise me you\'ll never stop creating." He promised. He meant it.',
  },
  {
    id: 'L005',
    title: 'Theobrova Discovery Log',
    category: 'Exploration',
    classification: 'DECLASSIFIED',
    content:
      'Upon crash-landing, CHUNK expected death. Instead: a colorful, deserted alien world. Within the first 72 hours, he discovered an abandoned research facility — advanced equipment, unfinished experiments, strange sugar-based biotechnology. As if this world was waiting for someone like him. The facility became his lab. The experiments became his purpose. The planet became his second chance.',
  },
  {
    id: 'L006',
    title: 'Experiment Protocol: Flavor Synthesis',
    category: 'Science',
    classification: 'MANDATORY',
    content:
      'Each new flavor is not a recipe — it\'s an experiment. Using the alien lab equipment on Theobrova, CHUNK manipulates the chocolate matrix at a molecular level, introducing new compounds, textures, and densities. Some experiments stabilize immediately. Others require weeks of calibration. A few have destabilized the lab entirely (see: Brookie Fusion incident). The goal: create something worthy of the world SWEETS believed in.',
  },
  {
    id: 'L007',
    title: 'Crystal Shard Energy Theory',
    category: 'Science',
    classification: 'RESTRICTED',
    content:
      'The alien lab equipment on Theobrova runs on Crystal Shards — a naturally occurring cosmic energy source found in the planet\'s geological formations. Without shards, the equipment goes dark. Without equipment, no experiments. Without experiments... the promise dies. Current shard acquisition relies on external support channels (see: CONTAINMENT VAULT commercial operations).',
  },
  {
    id: 'L008',
    title: 'Signal Echo — Unconfirmed',
    category: 'Anomalies',
    classification: 'REDACTED',
    content:
      'On day 847 of Theobrova operations, the long-range sensor array detected a faint signal originating from [COORDINATES REDACTED]. Frequency analysis suggests it matches communication protocols used on Terra Dulce. Signal was too weak to decode. It has not repeated. CHUNK has not been informed. Recommendation: Continue monitoring. Do not raise expectations.',
  },
];

export default function Lore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = loreEntries.filter(
    (e) =>
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.classification.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-portal opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4 block">
              Research Archives • Anomaly Database
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-wider mb-6">
              Lore <span className="text-gradient-cosmic">Archive</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              Searchable database of CHUNK history, research findings, and classified information from Theobrova.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search archives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-muted/30 border border-border/50 rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid gap-4">
            {filtered.map((entry, i) => (
              <div
                key={entry.id}
                className="containment-card overflow-hidden animate-warp-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-muted-foreground">{entry.id}</span>
                    <div>
                      <h3 className="font-headline text-lg tracking-wider">{entry.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono text-xs text-primary">{entry.category}</span>
                        <span className="font-mono text-xs text-muted-foreground">•</span>
                        <span
                          className={cn(
                            'font-mono text-xs',
                            entry.classification === 'PUBLIC' && 'text-green-400',
                            entry.classification === 'DECLASSIFIED' && 'text-secondary',
                            entry.classification === 'RESTRICTED' && 'text-yellow-400',
                            entry.classification === 'MANDATORY' && 'text-blue-400',
                            entry.classification === 'REDACTED' && 'text-red-400'
                          )}
                        >
                          {entry.classification}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-muted-foreground transition-transform shrink-0',
                      expandedId === entry.id && 'rotate-180'
                    )}
                  />
                </button>

                {expandedId === entry.id && (
                  <div className="px-6 pb-6 border-t border-border/30 pt-4 animate-warp-in">
                    <p className="font-body text-muted-foreground leading-relaxed">{entry.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="font-mono text-muted-foreground">No matching entries found in the archive.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
