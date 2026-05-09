import React from 'react';

const PrivatizationTeaser: React.FC = () => {
  return (
    <section className="py-20 bg-black-forest text-cornsilk relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#dda15e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-6 relative z-10 max-w-3xl text-center">
        <i className="fas fa-glass-cheers text-sunlit-clay text-5xl mb-4"></i>
        <h2 className="font-handwritten text-5xl md:text-6xl mb-6 text-sunlit-clay">Privatisez le Truck !</h2>
        <div className="text-lg md:text-xl text-gray-200 font-light leading-relaxed space-y-4 bg-olive-leaf/10 p-6 rounded-xl border border-olive-leaf/30 backdrop-blur-sm">
          <p>
            Un anniversaire, un évènement professionnel, une fête de famille, un baptême, un mariage, une soirée entre amis ?
          </p>
          <p className="font-semibold text-sunlit-clay">
            Mettez les pieds sous la table, et profitez enfin de vos invités !
          </p>
          <p>
            Un Truck au Four a juste besoin d'une place où se garer. N'hésitez pas à demander plus de renseignements au chef, il se fera un plaisir de vous expliquer les différentes formules !
          </p>
          <div className="inline-block mt-4">
            <span className="font-bold text-black-forest bg-sunlit-clay px-3 py-1 rounded text-sm uppercase tracking-wider shadow-lg">
              Week-ends uniquement
            </span>
          </div>
        </div>

        <a
          href="#privatisation"
          className="inline-flex items-center gap-3 mt-8 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg text-lg"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
          Faire une demande de privatisation
        </a>
      </div>
    </section>
  );
};

export default PrivatizationTeaser;
