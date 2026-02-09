import React, { useState, useEffect } from 'react';
import { PHONE_NUMBER } from '../constants';

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
        isScrolled ? 'bg-black-forest/95 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-handwritten text-3xl text-cornsilk hover:text-sunlit-clay transition-colors">
          Un Truck Au Four
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
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
            className="bg-copperwood text-white px-5 py-2 rounded-full font-bold hover:bg-sunlit-clay hover:text-black-forest transition-colors shadow-md"
          >
            <i className="fas fa-phone-alt mr-2"></i>
            {PHONE_NUMBER}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-cornsilk text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-black-forest/98 absolute w-full transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 border-b border-olive-leaf' : 'max-h-0'}`}>
        <div className="flex flex-col items-center py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-cornsilk text-lg font-semibold hover:text-sunlit-clay"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
            className="bg-copperwood text-white px-6 py-3 rounded-full font-bold mt-4"
          >
            Appeler
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;