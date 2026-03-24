import { AdminLayout } from '@/components/admin/AdminLayout';
import { flavors } from '@/data/products';
import { cn } from '@/lib/utils';
import { Package, Plus, Edit2, Trash2, DollarSign, Archive, AlertTriangle } from 'lucide-react';

const productStats = [
  { label: 'Total Products', value: String(flavors.length), icon: Package, color: 'text-primary' },
  { label: 'Active', value: String(flavors.filter((f) => f.available).length), icon: Archive, color: 'text-green-400' },
  { label: 'Avg Price', value: `$${(flavors.reduce((a, f) => a + f.price, 0) / flavors.length).toFixed(0)}`, icon: DollarSign, color: 'text-secondary' },
  { label: 'Volatile+', value: String(flavors.filter((f) => f.classification !== 'STABLE').length), icon: AlertTriangle, color: 'text-yellow-400' },
];

export default function AdminProducts() {
  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-wider mb-2">Products</h1>
          <p className="font-mono text-xs text-muted-foreground">Specimen Inventory Management</p>
        </div>
        <button className="px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-headline font-bold text-sm tracking-wider rounded-lg hover:opacity-90 transition-all inline-flex items-center gap-2 self-start">
          <Plus className="w-4 h-4" />
          Add Product
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {productStats.map((stat) => (
          <div key={stat.label} className="containment-card p-4">
            <div className="flex items-center gap-3">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <div>
                <div className="font-headline text-lg font-bold">{stat.value}</div>
                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Table */}
      <div className="containment-card overflow-hidden">
        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-900/30">
                <th className="text-left px-6 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Product</th>
                <th className="text-left px-6 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Codename</th>
                <th className="text-left px-6 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Price</th>
                <th className="text-left px-6 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Stability</th>
                <th className="text-right px-6 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {flavors.map((flavor) => (
                <tr key={flavor.id} className="border-b border-purple-900/20 hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                        <span className="font-headline text-xs font-bold text-primary/60">{flavor.codename.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-body text-sm text-foreground font-medium">{flavor.name}</div>
                        <div className="font-mono text-[10px] text-muted-foreground">{flavor.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{flavor.codename}</td>
                  <td className="px-6 py-4 font-headline text-sm font-bold text-secondary">${flavor.price}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      'px-2 py-1 text-xs font-mono rounded',
                      flavor.available ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    )}>
                      {flavor.available ? 'ACTIVE' : 'INACTIVE'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      'px-2 py-1 text-xs font-mono rounded',
                      flavor.classification === 'STABLE' && 'bg-green-500/20 text-green-400',
                      flavor.classification === 'VOLATILE' && 'bg-yellow-500/20 text-yellow-400',
                      flavor.classification === 'CRITICAL' && 'bg-red-500/20 text-red-400',
                      flavor.classification === 'UNSTABLE' && 'bg-purple-500/20 text-purple-400'
                    )}>
                      {flavor.classification}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 rounded hover:bg-muted/20 transition-colors text-muted-foreground hover:text-foreground">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded hover:bg-red-500/10 transition-colors text-muted-foreground hover:text-red-400">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden divide-y divide-purple-900/20">
          {flavors.map((flavor) => (
            <div key={flavor.id} className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-body text-sm font-medium">{flavor.name}</div>
                  <div className="font-mono text-xs text-muted-foreground">{flavor.codename}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded hover:bg-muted/20 transition-colors text-muted-foreground">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded hover:bg-red-500/10 transition-colors text-muted-foreground">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-headline text-sm font-bold text-secondary">${flavor.price}</span>
                <span className={cn(
                  'px-2 py-0.5 text-[10px] font-mono rounded',
                  flavor.available ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                )}>
                  {flavor.available ? 'ACTIVE' : 'INACTIVE'}
                </span>
                <span className={cn(
                  'px-2 py-0.5 text-[10px] font-mono rounded',
                  flavor.classification === 'STABLE' && 'bg-green-500/20 text-green-400',
                  flavor.classification === 'VOLATILE' && 'bg-yellow-500/20 text-yellow-400',
                  flavor.classification === 'CRITICAL' && 'bg-red-500/20 text-red-400',
                  flavor.classification === 'UNSTABLE' && 'bg-purple-500/20 text-purple-400'
                )}>
                  {flavor.classification}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
