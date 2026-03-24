import { AdminLayout } from '@/components/admin/AdminLayout';
import { cn } from '@/lib/utils';
import { ShoppingBag, Truck, Clock, CheckCircle, XCircle } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  items: string;
  total: number;
  status: 'delivered' | 'shipped' | 'processing' | 'pending' | 'cancelled';
  date: string;
}

const orders: Order[] = [
  { id: 'ORD-1042', customer: 'Sarah M.', items: 'OG CHUNK x4, PB Anomaly x2', total: 68.00, status: 'processing', date: 'Mar 24, 2026' },
  { id: 'ORD-1041', customer: 'James K.', items: 'Standard Containment (6-pack)', total: 68.00, status: 'shipped', date: 'Mar 23, 2026' },
  { id: 'ORD-1040', customer: 'Emily R.', items: 'Full Archive (9-pack)', total: 96.00, status: 'shipped', date: 'Mar 23, 2026' },
  { id: 'ORD-1039', customer: 'Michael T.', items: 'Sample Kit (4-pack)', total: 48.00, status: 'delivered', date: 'Mar 22, 2026' },
  { id: 'ORD-1038', customer: 'Lisa W.', items: 'OG CHUNK x2', total: 24.00, status: 'delivered', date: 'Mar 21, 2026' },
  { id: 'ORD-1037', customer: 'David H.', items: 'Brookie Fusion x4', total: 48.00, status: 'delivered', date: 'Mar 20, 2026' },
  { id: 'ORD-1036', customer: 'Anna P.', items: 'Full Archive (9-pack)', total: 96.00, status: 'delivered', date: 'Mar 19, 2026' },
  { id: 'ORD-1035', customer: 'Chris B.', items: 'Sample Kit (4-pack)', total: 48.00, status: 'cancelled', date: 'Mar 19, 2026' },
];

const statusConfig: Record<Order['status'], { label: string; class: string; icon: typeof ShoppingBag }> = {
  delivered: { label: 'DELIVERED', class: 'bg-green-500/20 text-green-400', icon: CheckCircle },
  shipped: { label: 'SHIPPED', class: 'bg-blue-500/20 text-blue-400', icon: Truck },
  processing: { label: 'PROCESSING', class: 'bg-secondary/20 text-secondary', icon: Clock },
  pending: { label: 'PENDING', class: 'bg-primary/20 text-primary', icon: ShoppingBag },
  cancelled: { label: 'CANCELLED', class: 'bg-red-500/20 text-red-400', icon: XCircle },
};

export default function AdminOrders() {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-wider mb-2">Orders</h1>
        <p className="font-mono text-xs text-muted-foreground">Containment Shipment Tracking</p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {(Object.keys(statusConfig) as Order['status'][]).map((status) => {
          const config = statusConfig[status];
          const count = orders.filter((o) => o.status === status).length;
          return (
            <div key={status} className="containment-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <config.icon className={`w-4 h-4 ${config.class.split(' ')[1]}`} />
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{config.label}</span>
              </div>
              <div className="font-headline text-2xl font-bold">{count}</div>
            </div>
          );
        })}
      </div>

      {/* Orders Table */}
      <div className="containment-card overflow-hidden">
        {/* Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-purple-900/30">
                <th className="text-left px-6 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Order ID</th>
                <th className="text-left px-6 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Customer</th>
                <th className="text-left px-6 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Items</th>
                <th className="text-left px-6 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Total</th>
                <th className="text-left px-6 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="text-left px-6 py-4 font-mono text-xs text-muted-foreground uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-purple-900/20 hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm text-primary">{order.id}</td>
                  <td className="px-6 py-4 font-body text-sm">{order.customer}</td>
                  <td className="px-6 py-4 font-body text-sm text-muted-foreground">{order.items}</td>
                  <td className="px-6 py-4 font-mono text-sm font-bold text-secondary">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={cn('px-2 py-1 text-xs font-mono rounded', statusConfig[order.status].class)}>
                      {statusConfig[order.status].label}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="md:hidden divide-y divide-purple-900/20">
          {orders.map((order) => (
            <div key={order.id} className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-primary">{order.id}</span>
                <span className={cn('px-2 py-0.5 text-[10px] font-mono rounded', statusConfig[order.status].class)}>
                  {statusConfig[order.status].label}
                </span>
              </div>
              <div className="font-body text-sm">{order.customer}</div>
              <div className="font-body text-xs text-muted-foreground">{order.items}</div>
              <div className="flex items-center justify-between">
                <span className="font-headline text-sm font-bold text-secondary">${order.total.toFixed(2)}</span>
                <span className="font-mono text-xs text-muted-foreground">{order.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
