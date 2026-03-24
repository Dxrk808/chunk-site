import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Index from './pages/Index';
import Shop from './pages/Shop';
import Drops from './pages/Drops';
import Facility from './pages/Facility';
import Lore from './pages/Lore';
import Transmissions from './pages/Transmissions';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import AdminLogin from './pages/admin/Login';
import AdminAnalytics from './pages/admin/Analytics';
import AdminProducts from './pages/admin/Products';
import AdminOrders from './pages/admin/Orders';
import AdminProjections from './pages/admin/Projections';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename="/chunk-site">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/drops" element={<Drops />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/lore" element={<Lore />} />
          <Route path="/transmissions" element={<Transmissions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminAnalytics />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/projections" element={<AdminProjections />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
