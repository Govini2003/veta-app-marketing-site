import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Features from "./pages/Features";
import ContactUs from './pages/ContactUs';
import './App.css';
import './pages/About.css';
import './pages/Home.css'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<ContactUs />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;