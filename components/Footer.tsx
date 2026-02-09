import React from 'react';
import { PHONE_NUMBER, SOCIAL_FACEBOOK, SOCIAL_INSTAGRAM } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black-forest text-white pt-16 pb-8 border-t border-olive-leaf scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Socials */}
          <div className="text-center md:text-left">
            <h3 className="font-handwritten text-4xl text-cornsilk mb-4">Un Truck Au Four</h3>
            <p className="text-gray-400 mb-6 max-w-xs mx-auto md:mx-0">
              Pizzas artisanales et tartes flambées au feu de bois. Authenticité et convivialité.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href={SOCIAL_FACEBOOK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-olive-leaf flex items-center justify-center hover:bg-sunlit-clay hover:text-black-forest transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-olive-leaf flex items-center justify-center hover:bg-sunlit-clay hover:text-black-forest transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="text-center">
            <h4 className="font-handwritten text-3xl text-sunlit-clay mb-6">Infos Pratiques</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center justify-center space-x-3 group">
                <i className="fas fa-phone-alt text-copperwood group-hover:rotate-12 transition-transform"></i>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-white transition-colors text-lg font-bold">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex flex-col items-center">
                <span className="text-olive-leaf font-bold uppercase text-xs tracking-wider mb-1">Horaires Midi</span>
                <span>11h45 - 13h30</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="text-olive-leaf font-bold uppercase text-xs tracking-wider mb-1">Horaires Soir</span>
                <span>18h30 - 21h00</span>
              </li>
            </ul>
          </div>

          {/* Payments */}
          <div className="text-center md:text-right">
            <h4 className="font-handwritten text-3xl text-sunlit-clay mb-6">Paiements</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-3xl text-gray-400">
              <i className="fas fa-money-bill-wave hover:text-green-500 transition-colors" title="Espèces"></i>
              <i className="fas fa-credit-card hover:text-blue-400 transition-colors" title="Carte Bancaire"></i>
              <i className="fab fa-cc-visa hover:text-blue-600 transition-colors" title="Visa"></i>
              <i className="fab fa-cc-mastercard hover:text-red-500 transition-colors" title="Mastercard"></i>
              <i className="fas fa-wifi hover:text-sunlit-clay transition-colors" title="Sans Contact"></i>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Minimum CB : 1€
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Un Truck Au Four. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;