// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ApartmentsPage from './pages/ApartmentsPage';
import DoubleVillasPage from './pages/DoubleVillasPage';
import CommercialPage from './pages/CommercialPage';
import About from './pages/About';
import Map from './pages/Map';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import VillasPage from './pages/VillasPage';
import Footer from './components/Footer';
import WhatsAppBubble from './components/WhatsappBubble';
import MainScrollTop from './components/MainScrollTop';
import Navbar from './components/NavBar';



const App = () => {
  return (
    <BrowserRouter>
      <MainScrollTop />
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/villas/*" element={<VillasPage />} />
          <Route path="/double-villas/*" element={<DoubleVillasPage />} />
          <Route path="/apartments/*" element={<ApartmentsPage />} />
          <Route path="/commercial/*" element={<CommercialPage />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppBubble />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
