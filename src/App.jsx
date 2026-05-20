import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Inicio from './pages/Inicio';
import nosotros from './pages/nosotros';
import contacto from './pages/contacto';
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
         <Route path="/nosotros" element={<nosotros />} />
            <Route path="/contacto" element={<contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;