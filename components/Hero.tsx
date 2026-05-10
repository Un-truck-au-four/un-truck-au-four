import React from 'react';
import { PHONE_NUMBER_COMMANDE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* 
            IMPORTANT: Pour que votre image s'affiche, renommez votre fichier photo en "hero-bg.jpg" 
            et placez-le dans le dossier public ou à la racine du projet.
        */}
        <img 
          src="hero-bg.jpg" 
          alt="Pizza Un Truck Au Four" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback si l'image n'est pas trouvée
            e.currentTarget.src = "/img/pizza.jpg";
          }}
        />
        <div className="absolute inset-0 bg-black-forest/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto animate-fade-in-up flex flex-col items-center">
        
        {/* Badges Fait Maison / Feu de Bois - Très visibles */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="bg-sunlit-clay text-black-forest px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm shadow-lg border-2 border-white/20">
                <i className="fas fa-fire-alt mr-1.5 text-red-700"></i>
                Cuisson Feu de Bois
            </div>
            <div className="bg-olive-leaf text-white px-4 py-1.5 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm shadow-lg border-2 border-white/20">
                <i className="fas fa-hands-wash mr-1.5"></i>
                Pâte Fait Maison
            </div>
        </div>

        <h1 className="font-handwritten text-4xl sm:text-5xl md:text-7xl text-cornsilk mb-4 md:mb-6 leading-tight drop-shadow-xl">
          Pizza façon Napolitaine <br />
          <span className="text-sunlit-clay">& Tarte Flambée</span>
        </h1>
        <p className="text-base md:text-2xl text-gray-200 mb-8 md:mb-10 font-light max-w-2xl mx-auto px-2">
          L'authenticité italienne sur roues, cuit devant vous au feu de bois.
        </p>
        
        <a 
          href={`tel:${PHONE_NUMBER_COMMANDE.replace(/\s/g, '')}`}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-copperwood rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-copperwood hover:bg-sunlit-clay hover:text-black-forest transform hover:scale-105 shadow-xl"
        >
          <span className="mr-2">Commander maintenant</span>
          <i className="fas fa-pizza-slice group-hover:rotate-12 transition-transform"></i>
          <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-1 rounded-full animate-bounce whitespace-nowrap">
            {PHONE_NUMBER_COMMANDE}
          </div>
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cornsilk animate-bounce">
        <i className="fas fa-chevron-down text-2xl opacity-70"></i>
      </div>
    </section>
  );
};

export default Hero;