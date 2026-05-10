import React from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem } from '../types';

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={item.image} 
        alt={`Pizza ${item.name}`} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {item.tag && (
        <span className="absolute top-3 right-3 bg-sunlit-clay text-black-forest text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
          {item.tag}
        </span>
      )}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
        <span className="text-white font-bold text-xl drop-shadow-md">
            {typeof item.price === 'number' ? item.price.toFixed(2).replace('.', ',') + ' €' : item.price}
        </span>
      </div>
    </div>
    
    <div className="p-4 md:p-6 relative">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-handwritten text-2xl text-copperwood">{item.name}</h3>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[40px]">
        {item.ingredients}
      </p>
    </div>
  </div>
);

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-cornsilk relative scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-olive-leaf to-transparent opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-copperwood font-bold tracking-widest uppercase text-sm">Nos Créations</span>
          <h2 className="font-handwritten text-5xl md:text-6xl text-black-forest mt-2">La Carte</h2>
          
          {/* Sub-header highlighting quality */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-olive-leaf font-bold uppercase tracking-wider text-xs md:text-sm">
            <span className="flex items-center gap-1.5"><i className="fas fa-fire-alt text-red-600"></i> Feu de Bois</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-sunlit-clay"></span>
            <span className="flex items-center gap-1.5"><i className="fas fa-seedling text-green-600"></i> Produits Frais</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-sunlit-clay"></span>
            <span className="flex items-center gap-1.5"><i className="fas fa-mug-hot text-green-600"></i> Fait Maison</span>
            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-sunlit-clay"></span>
            <span className="flex items-center gap-1.5"><i className="fas fa-heart text-red-600"></i> Halal</span>
          </div>
          
          <div className="w-24 h-1 bg-sunlit-clay mx-auto mt-6 rounded-full"></div>
        </div>

        {MENU_DATA.map((category, idx) => (
          <div key={idx} className="mb-20 last:mb-0">
            <h3 className="font-handwritten text-4xl text-olive-leaf mb-10 text-center border-b-2 border-dashed border-olive-leaf/30 pb-4 inline-block w-full">
              {category.title}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {category.items.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;