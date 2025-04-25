import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './pages/Firebase/config';
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
import Dashboard from './pages/Dashboard/Dashboard'
import PrivateRoute from './components/PrivateRoute/PrivateRouter';
import Menu from "./pages/Menu/Menu";

// import './App.css'


const App = () => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Prevent unnecessary redirects

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // ✅ Done loading
    });

    return () => unsubscribe(); // ✅ Cleanup listener on unmount
  }, []);

  if (loading) {
    return <p>Loading...</p>; // ✅ Show a loading state until Firebase confirms auth state
  }

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
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
        <Route path="/dashboard" element={<PrivateRoute user={user} element={<Dashboard />} />} />
        </Routes>
      <Footer />
    </Router>
   
   
  )
}

export default App

