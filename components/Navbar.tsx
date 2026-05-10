import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER_COMMANDE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'La Carte', href: '#menu' },
    { name: 'Où nous trouver', href: '#locations' },
    { name: 'Privatisation', href: '#privatisation' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-black-forest/95 shadow-lg py-2' : 'bg-black-forest/60 md:bg-transparent py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center min-w-0">
        {/* Logo */}
        <a href="#" className="font-handwritten text-xl md:text-3xl text-cornsilk hover:text-sunlit-clay transition-colors">
          <span className="hidden sm:inline">Un Truck Au Four</span>
          <span className="sm:hidden">Au Four</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-cornsilk font-semibold hover:text-sunlit-clay transition-colors uppercase text-sm tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${PHONE_NUMBER_COMMANDE.replace(/\s/g, '')}`} 
            className="bg-copperwood text-white px-5 py-2 rounded-full font-bold hover:bg-sunlit-clay hover:text-black-forest transition-colors shadow-md"
          >
            <i className="fas fa-phone-alt mr-2"></i>
            {PHONE_NUMBER_COMMANDE}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 text-white text-2xl rounded-lg border border-white/50 bg-black/40 flex-shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-black-forest border-t border-olive-leaf/40 flex flex-col items-center py-8 space-y-1">
          <span className="font-handwritten text-2xl text-cornsilk mb-6">Un Truck Au Four</span>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="w-full text-center text-cornsilk text-lg font-semibold py-3 hover:bg-olive-leaf/20 hover:text-sunlit-clay transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <a
              href={`tel:${PHONE_NUMBER_COMMANDE.replace(/\s/g, '')}`}
              className="bg-copperwood text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-sunlit-clay hover:text-black-forest transition-colors"
            >
              <i className="fas fa-phone-alt mr-2"></i>
              {PHONE_NUMBER_COMMANDE}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;