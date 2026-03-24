import { AdminLayout } from '@/components/admin/AdminLayout';
import {
  DollarSign,
  ShoppingBag,
  TrendingUp,
  Users,
  Activity,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 0 },
  { month: 'Feb', revenue: 0 },
  { month: 'Mar', revenue: 0 },
  { month: 'Apr', revenue: 1200 },
  { month: 'May', revenue: 3400 },
  { month: 'Jun', revenue: 5600 },
  { month: 'Jul', revenue: 4200 },
];

const productData = [
  { name: 'OG CHUNK', sales: 145 },
  { name: 'PB Anomaly', sales: 120 },
  { name: 'Brookie', sales: 98 },
  { name: 'Fruity Rift', sales: 87 },
];

const orderStatusData = [
  { name: 'Shipped', value: 45, color: '#22c55e' },
  { name: 'Processing', value: 25, color: '#d4a017' },
  { name: 'Pending', value: 20, color: '#7c3aed' },
  { name: 'Cancelled', value: 10, color: '#ef4444' },
];

const recentActivity = [
  { id: 1, action: 'New order #1042 placed', time: '2 min ago', type: 'order' },
  { id: 2, action: 'Order #1039 shipped', time: '15 min ago', type: 'ship' },
  { id: 3, action: 'New subscriber: alex@example.com', time: '1 hr ago', type: 'sub' },
  { id: 4, action: 'Low stock alert: Fruity Rift', time: '2 hrs ago', type: 'alert' },
  { id: 5, action: 'Order #1036 delivered', time: '3 hrs ago', type: 'ship' },
];

const stats = [
  { label: 'Total Revenue', value: '$14,400', change: '+12.5%', icon: DollarSign, color: 'text-green-400' },
  { label: 'Total Orders', value: '342', change: '+8.2%', icon: ShoppingBag, color: 'text-secondary' },
  { label: 'Avg Order Value', value: '$42.11', change: '+3.1%', icon: TrendingUp, color: 'text-primary' },
  { label: 'Subscribers', value: '1,247', change: '+24.6%', icon: Users, color: 'text-blue-400' },
];

export default function AdminAnalytics() {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-wider mb-2">Analytics</h1>
        <p className="font-mono text-xs text-muted-foreground">Theobrova Lab Performance Metrics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="containment-card p-5">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className="font-mono text-xs text-green-400">{stat.change}</span>
            </div>
            <div className="font-headline text-2xl font-bold mb-1">{stat.value}</div>
            <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="containment-card p-6">
          <h3 className="font-headline text-sm tracking-wider mb-4">Revenue Overview</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(107,33,168,0.15)" />
                <XAxis dataKey="month" tick={{ fill: '#888', fontSize: 11 }} />
                <YAxis tick={{ fill: '#888', fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ background: '#1a0a2e', border: '1px solid rgba(107,33,168,0.3)', borderRadius: 8, fontSize: 12 }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#7c3aed" fill="url(#revenueGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Bar Chart */}
        <div className="containment-card p-6">
          <h3 className="font-headline text-sm tracking-wider mb-4">Sales by Product</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(107,33,168,0.15)" />
                <XAxis dataKey="name" tick={{ fill: '#888', fontSize: 10 }} />
                <YAxis tick={{ fill: '#888', fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ background: '#1a0a2e', border: '1px solid rgba(107,33,168,0.3)', borderRadius: 8, fontSize: 12 }}
                />
                <Bar dataKey="sales" fill="#d4a017" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Status Pie */}
        <div className="containment-card p-6">
          <h3 className="font-headline text-sm tracking-wider mb-4">Order Status</h3>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={orderStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ background: '#1a0a2e', border: '1px solid rgba(107,33,168,0.3)', borderRadius: 8, fontSize: 12 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {orderStatusData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                <span className="font-mono text-xs text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="containment-card p-6">
          <h3 className="font-headline text-sm tracking-wider mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/5 hover:bg-muted/10 transition-colors">
                <Activity className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm text-foreground truncate">{item.action}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
