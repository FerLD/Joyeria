import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Inicio from './pages/Inicio';
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;