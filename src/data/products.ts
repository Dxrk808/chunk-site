export interface FlavorData {
  id: string;
  name: string;
  codename: string;
  description: string;
  lore: string;
  price: number;
  classification: 'STABLE' | 'VOLATILE' | 'CRITICAL' | 'UNSTABLE';
  origin: string;
  specs: {
    dimensions: string;
    weight: string;
    density: string;
  };
  available: boolean;
  alwaysAvailable: boolean;
}

export interface DropData {
  id: string;
  name: string;
  date: string;
  endDate?: string;
  flavors: FlavorData[];
  status: 'past' | 'active' | 'incoming' | 'classified';
  loreEntry?: string;
}

// ── The OG ───────────────────────────────────────
export const ogChunk: FlavorData = {
  id: 'og-chunk',
  name: 'The OG CHUNK',
  codename: 'OG-000',
  description:
    'The original. The one that started it all. Pure chocolate density — no gimmicks, no experiments. Just the densest, gooiest, most perfectly rich brownie ever created. Always available. Always perfect.',
  lore:
    'Before the experiments, before the anomalies, there was the source. The first thing Chunk ever baked on Theobrova — a perfect, dense square of chocolate matter. No additives. No mutations. Just pure, unwavering chocolate density. It was the proof of concept that everything else would be built on. The OG never changes. It never needs to.',
  price: 12,
  classification: 'STABLE',
  origin: 'Sector 0 — Origin Point',
  specs: {
    dimensions: '3" × 3" × 2"',
    weight: '~6 oz',
    density: 'EXTREME',
  },
  available: true,
  alwaysAvailable: true,
};

// ── Current Flavors ──────────────────────────────
export const flavors: FlavorData[] = [
  ogChunk,
  {
    id: 'pb-anomaly',
    name: 'Peanut Butter Anomaly',
    codename: 'PB-001',
    description:
      'A dense chocolate matrix infused with ribbons of creamy peanut butter. The collision of cocoa and legume creates gravitational flavor distortions.',
    lore:
      'Experiment Log #001 — Chunk hypothesized that introducing a high-density protein compound into the base chocolate matrix would stabilize its molecular structure. Instead, it created something far more volatile... and far more delicious. The peanut butter veins pulse with an amber glow under UV light.',
    price: 12,
    classification: 'STABLE',
    origin: 'Sector A — Primary Lab',
    specs: {
      dimensions: '3" × 3" × 2"',
      weight: '~6 oz',
      density: 'EXTREME',
    },
    available: true,
    alwaysAvailable: false,
  },
  {
    id: 'brookie-fusion',
    name: 'Brookie Fusion',
    codename: 'BF-002',
    description:
      'A cross-dimensional hybrid — cookie dough fused with brownie matter at the subatomic level. Two worlds collide in every bite.',
    lore:
      'Experiment Log #002 — When Chunk attempted to merge two distinct dessert matrices, the lab destabilized for 47 seconds. When the dust cleared, the Brookie Fusion sat on the containment tray, perfectly intact. A specimen that shouldn\'t exist according to known confectionery physics.',
    price: 12,
    classification: 'VOLATILE',
    origin: 'Sector B — Fusion Chamber',
    specs: {
      dimensions: '3" × 3" × 2"',
      weight: '~6.5 oz',
      density: 'CRITICAL',
    },
    available: true,
    alwaysAvailable: false,
  },
  {
    id: 'fruity-rift',
    name: 'Fruity Rift',
    codename: 'FR-003',
    description:
      'Fruity cereal fragments embedded in rich brownie matter. A chromatic anomaly that defies visual and flavor expectations.',
    lore:
      'Experiment Log #003 — The most controversial experiment to date. Introducing chromatic cereal particulates into the chocolate matrix was deemed "reckless" by the automated lab systems. But Chunk saw something in the color spectrum that the machines couldn\'t. The result is a sensory overload — crunchy, sweet, rich, and impossibly vibrant.',
    price: 12,
    classification: 'UNSTABLE',
    origin: 'Sector C — Chromatic Array',
    specs: {
      dimensions: '3" × 3" × 1.8"',
      weight: '~5.5 oz',
      density: 'HIGH',
    },
    available: true,
    alwaysAvailable: false,
  },
];

// ── Box Configurations ───────────────────────────
export interface BoxConfig {
  id: string;
  name: string;
  count: number;
  price: number;
  priceDisplay: string;
  description: string;
  popular?: boolean;
}

export const boxes: BoxConfig[] = [
  {
    id: 'box-4',
    name: 'Sample Kit',
    count: 4,
    price: 48,
    priceDisplay: '$48',
    description: 'Entry-level containment unit. Choose any 4 specimens.',
  },
  {
    id: 'box-6',
    name: 'Standard Containment',
    count: 6,
    price: 68,
    priceDisplay: '$68',
    description: 'The recommended configuration. Choose any 6 specimens.',
    popular: true,
  },
  {
    id: 'box-9',
    name: 'Full Archive',
    count: 9,
    price: 96,
    priceDisplay: '$96',
    description: 'Complete extraction set. Choose any 9 specimens. For serious collectors.',
  },
];

// ── Drop Timeline ────────────────────────────────
export const drops: DropData[] = [
  {
    id: 'drop-001',
    name: 'First Contact',
    date: 'TBD',
    flavors: flavors.filter((f) => !f.alwaysAvailable),
    status: 'incoming',
    loreEntry:
      'The first specimens to emerge from Chunk\'s lab on Theobrova. After months of calibrating the alien equipment, three stable anomalies materialized. The rift is open.',
  },
];

export function getFlavorById(id: string): FlavorData | undefined {
  return flavors.find((f) => f.id === id);
}
