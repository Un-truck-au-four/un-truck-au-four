import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MenuSection from './components/MenuSection';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Privatization from './components/Privatization';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <MenuSection />
        <Reviews />
        <Location />
        <Privatization />
      </main>
      <Footer />
    </div>
  );
};

export default App;