import React from 'react';
import { GOOGLE_REVIEWS_URL } from '../constants';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Aurélie S.",
      rating: 5,
      text: "Les pizzas sont excellentes, la pâte est fine et croustillante. Cuisson au feu de bois parfaite !",
      date: "Il y a 2 semaines"
    },
    {
      name: "Marc D.",
      rating: 5,
      text: "Meilleure tarte flambée du secteur ! Service rapide et équipe super sympa. Je recommande.",
      date: "Il y a 1 mois"
    },
    {
      name: "Sophie L.",
      rating: 5,
      text: "Un vrai régal. On sent bien les produits frais et le fait maison. À très vite !",
      date: "Il y a 3 semaines"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-sunlit-clay rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-cornsilk rounded-full blur-3xl"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-handwritten text-5xl text-black-forest mb-4">Nos clients parlent de nous</h2>
          <div className="flex justify-center items-center gap-2 mb-4">
              <span className="text-3xl font-bold text-black-forest">4.8</span>
              <div className="flex text-yellow-400 text-2xl">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="text-gray-500 text-sm ml-2">(sur Google)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, idx) => (
                <div key={idx} className="bg-cornsilk/50 p-8 rounded-2xl shadow-sm border border-olive-leaf/10 hover:shadow-md transition-shadow">
                    <div className="flex text-yellow-400 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                            <i key={i} className="fas fa-star"></i>
                        ))}
                    </div>
                    <p className="text-black-forest/80 italic mb-6">"{review.text}"</p>
                    <div className="flex justify-between items-center text-sm text-gray-500 font-semibold">
                        <span>{review.name}</span>
                        <span>{review.date}</span>
                    </div>
                </div>
            ))}
        </div>

        <div className="text-center">
            <a 
                href={GOOGLE_REVIEWS_URL} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white border-2 border-black-forest text-black-forest font-bold rounded-full hover:bg-black-forest hover:text-white transition-colors duration-300"
            >
                
                Voir tous les avis sur Google
            </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;