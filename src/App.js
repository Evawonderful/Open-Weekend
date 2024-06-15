import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Places from './components/Places';
import Map from './components/Map';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-roboto">
      <Header />
      <Hero />
      <About />
      <Events />
      <Places />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
