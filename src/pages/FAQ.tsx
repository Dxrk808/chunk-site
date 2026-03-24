import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What exactly is CHUNK?',
    answer:
      'CHUNK is a premium, handcrafted brownie brand. Each brownie is nearly 2 inches thick, cut to a precise 3×3 inch square, and made in extremely limited quantities. We operate on a drop model — new flavors emerge every 6-8 weeks with a 48-hour purchase window.',
  },
  {
    question: 'How do drops work?',
    answer:
      'Every 6-8 weeks, we release 3 new flavors. When a drop goes live, you have exactly 48 hours to place your order. After that, the drop closes and those batches are gone. Follow our socials and sign up for transmissions to get notified.',
  },
  {
    question: 'How much do brownies cost?',
    answer:
      'Individual specimens are $12 each. We sell them in box configurations: 4-pack ($48), 6-pack ($68), or 9-pack ($96). Shipping is included in the price — no surprise costs at checkout.',
  },
  {
    question: 'Where do you ship?',
    answer:
      'Currently we ship to the West Coast (California, Oregon, Washington, Nevada, Arizona) to ensure brownies arrive within 3 days for maximum freshness. We\'re expanding to more regions soon.',
  },
  {
    question: 'How are brownies shipped?',
    answer:
      'All orders are baked fresh after purchase, sealed in insulated containment packaging with gel packs, and shipped via priority service. Your brownies will arrive within 3 days of being baked.',
  },
  {
    question: 'What if my order arrives damaged?',
    answer:
      'If your specimens arrive in less-than-perfect condition, contact us immediately with photos. We\'ll make it right — full replacement or refund, no questions asked.',
  },
  {
    question: 'What are Crystal Shards?',
    answer:
      'Crystal Shards are part of the CHUNK universe. In the lore, they\'re the cosmic energy currency that powers Chunk\'s lab on Theobrova. Every purchase supports the research (and helps us keep making brownies). Check the Lore Archive for the full story.',
  },
  {
    question: 'Can I choose which flavors go in my box?',
    answer:
      'Yes! When placing an order during a drop, you select your box size and then choose which flavors you want. Mix and match however you like.',
  },
  {
    question: 'Why are quantities so limited?',
    answer:
      'Every brownie is handcrafted in small batches. We don\'t mass produce — each batch is made with precision and care. Limited quantities ensure every specimen meets our density and flavor standards.',
  },
  {
    question: 'Do you have allergen info?',
    answer:
      'All CHUNK products contain wheat, eggs, dairy, and soy. Specific flavors may contain peanuts, tree nuts, or other allergens — check each flavor\'s product page for details. All brownies are made in a facility that processes nuts.',
  },
];

export default function FAQ() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-portal opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase mb-4 block">
              Information Bureau • Clearance: Public
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-wider mb-6">
              Frequently Asked <span className="text-gradient-cosmic">Questions</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              Everything you need to know about CHUNK, drops, shipping, and the containment protocol.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ list */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="containment-card overflow-hidden animate-warp-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <button
                  onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-body text-sm font-medium text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 text-muted-foreground transition-transform shrink-0',
                      expandedIdx === i && 'rotate-180'
                    )}
                  />
                </button>
                {expandedIdx === i && (
                  <div className="px-5 pb-5 border-t border-border/30 pt-4 animate-warp-in">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
