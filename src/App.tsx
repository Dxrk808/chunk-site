import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Shop from './pages/Shop';
import Drops from './pages/Drops';
import Facility from './pages/Facility';
import Lore from './pages/Lore';
import Transmissions from './pages/Transmissions';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/drops" element={<Drops />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/transmissions" element={<Transmissions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
