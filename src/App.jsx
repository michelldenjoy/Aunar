// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import DoubleVillasPage from './pages/DoubleVillasPage';
import Commercial from './pages/Commercial';
import About from './pages/About';
import Map from './pages/Map';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import VillasPage from './pages/VillasPage';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/villas/*" element={<VillasPage />} />
          <Route path="/double-villas/*" element={<DoubleVillasPage />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
