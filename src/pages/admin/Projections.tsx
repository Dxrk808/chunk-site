import { AdminLayout } from '@/components/admin/AdminLayout';
import { Sparkles, TrendingUp, BarChart3, Zap } from 'lucide-react';

export default function AdminProjections() {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-wider mb-2">Projections</h1>
        <p className="font-mono text-xs text-muted-foreground">Predictive Analytics & Demand Forecasting</p>
      </div>

      {/* Coming Soon Hero */}
      <div className="containment-card p-12 text-center mb-8">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-portal-pulse">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>

          <h2 className="font-headline text-2xl tracking-wider mb-4">
            AI Projection Module
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            Advanced analytics calibrating to analyze rift patterns,
            predict demand surges, and optimize inventory across all containment
            facilities.
          </p>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-muted/30 border border-border/50">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-sm text-primary">CALIBRATING — COMING SOON</span>
          </div>
        </div>
      </div>

      {/* Feature Preview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { title: 'Demand Forecasting', desc: 'Predict order volume for upcoming drops based on historical data and social signals', icon: TrendingUp },
          { title: 'Stock Optimization', desc: 'Automated reorder suggestions based on sell-through rates and baking capacity', icon: BarChart3 },
          { title: 'Trend Analysis', desc: 'Track which flavors and box sizes perform best across different customer segments', icon: Zap },
        ].map((feature) => (
          <div key={feature.title} className="containment-card p-6">
            <feature.icon className="w-6 h-6 text-primary mb-4" />
            <h3 className="font-headline text-sm tracking-wider mb-2">{feature.title}</h3>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Placeholder Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-30">
        <div className="containment-card p-6 h-64 flex items-center justify-center">
          <span className="font-mono text-sm text-muted-foreground">[Demand Curve Projection]</span>
        </div>
        <div className="containment-card p-6 h-64 flex items-center justify-center">
          <span className="font-mono text-sm text-muted-foreground">[Inventory Forecast]</span>
        </div>
      </div>
    </AdminLayout>
  );
}
