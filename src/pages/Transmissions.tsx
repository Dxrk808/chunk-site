import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Loader2 } from 'lucide-react';

export default function Transmissions() {
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
      {/* Hero */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-portal opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase mb-4 block">
              Signal Frequency • Open Channel
            </span>
            <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-wider mb-6">
              <span className="text-gradient-cosmic">Transmissions</span>
            </h1>
            <p className="font-body text-muted-foreground text-lg">
              Join the containment protocol. Receive drop alerts, lore updates,
              and classified communications directly from Chunk's lab on Theobrova.
            </p>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section className="py-16">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <div className="containment-card p-8">
            <h2 className="font-headline text-xl tracking-wider mb-6 text-center">
              Establish Transmission Link
            </h2>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider block mb-2">
                  Communication Frequency (Email)
                </label>
                <input
                  type="email"
                  placeholder="agent@theobrova.lab"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubscribing}
                className="w-full px-6 py-3 bg-gradient-to-r from-secondary to-rift-glow text-black font-headline font-bold tracking-wider rounded-lg hover:opacity-90 transition-all disabled:opacity-50"
              >
                {isSubscribing ? (
                  <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                ) : subscribed ? (
                  '✓ Transmission Link Established'
                ) : (
                  'Link Transmission'
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border/30 space-y-3">
              <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                What you'll receive:
              </h3>
              {[
                'Drop announcements — 48-hour window alerts',
                'Lore updates — new chapters from Theobrova',
                'Classified intel — early access & exclusive content',
                'Lab reports — behind-the-scenes of new experiments',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs font-mono text-muted-foreground/50 mt-6 text-center">
              No spam. Transmissions only. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Past Transmissions placeholder */}
      <section className="py-16 border-t border-border/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-2xl tracking-wider">
              Recent Transmissions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="containment-card p-6 text-center">
              <div className="font-mono text-sm text-muted-foreground/50">
                No transmissions yet. The rift is still calibrating...
              </div>
              <div className="font-mono text-xs text-muted-foreground/30 mt-2">
                First transmission incoming soon.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
