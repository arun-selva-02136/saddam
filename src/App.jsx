import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Journey from './pages/About/Journey';
import Branches from './pages/About/Branches';
import Business from './pages/About/Business';
import Vips from './pages/About/Vips';
import Ambiance from './pages/About/Ambiance';
import Awards from './pages/About/Awards';
import Selection from './components/navSecection/Selection'
import Footer from './components/Footer/Footer';
import Gallery from './pages/Gallery/Gallery';

// import './App.css'


const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/*" element={
            <>
              <Selection />
              <Routes>
                <Route path="" element={<Journey />} />
                <Route path="Branches" element={<Branches />} />
                <Route path="Business" element={<Business />} />
                <Route path="Vips-Vists" element={<Vips />} />
                <Route path="Ambiance" element={<Ambiance />} />
                <Route path="Awards" element={<Awards />} />
              </Routes>
            </>
          } />
        <Route path ='/gallery' element={<Gallery/>}/>
        </Routes>
      <Footer />
    </Router>
   
   
  )
}

export default App

