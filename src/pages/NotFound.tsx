import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center px-4">
          <span className="font-mono text-xs tracking-[0.3em] text-secondary uppercase block mb-4">
            Error 404 • Signal Lost
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-wider mb-6 text-gradient-cosmic">
            VOID
          </h1>
          <p className="font-body text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            This sector of the rift is empty. The anomaly you're looking for
            doesn't exist — or hasn't been discovered yet.
          </p>
          <Link to="/">
            <button className="px-8 py-3 border border-primary/50 text-foreground font-headline font-medium tracking-wider rounded-lg hover:bg-primary/10 transition-all">
              Return to Base
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
