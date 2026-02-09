import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "fa-fire-alt",
      title: "Cuisson Feu de Bois",
      description: "Nos pizzas et tartes flambées sont cuites traditionnellement sous vos yeux au feu de bois."
    },
    {
      icon: "fa-glass-cheers",
      title: "Événements Privés",
      description: "Mariages, anniversaires, fêtes d'entreprise... Privatisez le truck !"
    },
    {
      icon: "fa-box-open",
      title: "À Emporter",
      description: "Commandez par téléphone et récupérez vos pizzas toutes chaudes."
    }
  ];

  return (
    <section className="py-20 bg-olive-leaf text-cornsilk">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {services.map((service, index) => (
            <div key={index} className="group p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
              <div className="w-20 h-20 mx-auto bg-cornsilk rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className={`fas ${service.icon} text-3xl text-olive-leaf`}></i>
              </div>
              <h3 className="font-handwritten text-3xl mb-3 text-sunlit-clay">{service.title}</h3>
              <p className="text-gray-100 leading-relaxed font-sans">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;