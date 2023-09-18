import React from 'react';
import Navbar from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Clients from './components/Clients';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Demo from './components/Demo';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Pricing />
      <Clients />
      <Benefits />
      <Demo />
      <Contact />
      <Footer />
    </div>
  )
}
export default App;