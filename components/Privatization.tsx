import React, { useState } from 'react';
import { PHONE_NUMBER } from '../constants';

const Privatization: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formatage du numéro de téléphone du propriétaire pour l'API WhatsApp (33...)
    // On enlève les espaces et le premier 0, on ajoute 33
    const cleanOwnerPhone = "33" + PHONE_NUMBER.replace(/\s/g, '').substring(1);

    // Création du message
    const messageText = `*Demande de Privatisation - Site Web*%0A%0A👤 *Nom :* ${formData.name}%0A📞 *Tél :* ${formData.phone}%0A📅 *Date souhaitée :* ${formData.date}%0A📝 *Message :* ${formData.message}`;
    
    // Ouverture de WhatsApp
    const whatsappUrl = `https://wa.me/${cleanOwnerPhone}?text=${messageText}`;
    window.open(whatsappUrl, '_blank');

    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
    setFormData({ name: '', phone: '', date: '', message: '' });
  };

  return (
    <section id="privatisation" className="py-24 bg-black-forest text-cornsilk relative overflow-hidden scroll-mt-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#dda15e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <i className="fas fa-glass-cheers text-sunlit-clay text-5xl mb-4"></i>
                <h2 className="font-handwritten text-5xl md:text-6xl mb-6 text-sunlit-clay">Privatisez NOUS !</h2>
                <div className="text-lg md:text-xl text-gray-200 font-light leading-relaxed space-y-4 bg-olive-leaf/10 p-6 rounded-xl border border-olive-leaf/30 backdrop-blur-sm">
                    <p>
                    Un anniversaire, un évènement professionnel, une fête de famille, un baptême, un mariage, une soirée entre amis ?
                    </p>
                    <p className="font-semibold text-sunlit-clay">
                    Mettez les pieds sous la table, et profitez enfin de vos invités !!
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

                {/* Chalkboard Image if available */}
                <div className="mt-8 hidden lg:block transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="images/tableau-privatisation.jpg" 
                        alt="Tableau Privatisation" 
                        className="rounded-xl shadow-2xl border-4 border-wood-800 max-w-sm mx-auto opacity-90 hover:opacity-100"
                        onError={(e) => e.currentTarget.style.display = 'none'}
                    />
                </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-1/2 w-full">
                <div className="bg-olive-leaf/20 backdrop-blur-md p-8 rounded-2xl border border-olive-leaf/40 shadow-2xl">
                {status === 'success' ? (
                    <div className="text-center py-12 animate-fade-in">
                    <i className="fab fa-whatsapp text-6xl text-green-500 mb-4"></i>
                    <h3 className="text-2xl font-bold mb-2">Redirection vers WhatsApp...</h3>
                    <p>Votre demande a été pré-remplie. Veuillez valider l'envoi du message sur WhatsApp pour que nous la recevions.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <label htmlFor="name" className="block text-sm font-bold mb-2 text-sunlit-clay">Votre Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-black-forest/50 border border-olive-leaf rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sunlit-clay transition-colors"
                            placeholder="Jean Dupont"
                        />
                        </div>
                        <div>
                        <label htmlFor="phone" className="block text-sm font-bold mb-2 text-sunlit-clay">Votre Téléphone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-black-forest/50 border border-olive-leaf rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sunlit-clay transition-colors"
                            placeholder="06 12 34 56 78"
                        />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="date" className="block text-sm font-bold mb-2 text-sunlit-clay">Date de l'événement</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full bg-black-forest/50 border border-olive-leaf rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sunlit-clay transition-colors"
                        />
                        </div>
                    
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold mb-2 text-sunlit-clay">Votre Message</label>
                        <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black-forest/50 border border-olive-leaf rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sunlit-clay transition-colors"
                        placeholder="Type d'événement, nombre de convives, lieu exact..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                    >
                        <i className="fab fa-whatsapp text-2xl"></i>
                        Envoyer ma demande sur WhatsApp
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-2">
                        Cela ouvrira votre application WhatsApp avec le message pré-rempli.
                    </p>
                    </form>
                )}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Privatization;