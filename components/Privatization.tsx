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

  const buildMessage = () =>
    `Demande de Privatisation - Site Web\n\nNom : ${formData.name}\nTél : ${formData.phone}\nDate souhaitée : ${formData.date}\nMessage : ${formData.message}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanOwnerPhone = PHONE_NUMBER.replace(/\s/g, '').replace('+', '');
    const encoded = encodeURIComponent(`*Demande de Privatisation - Site Web*\n\n👤 *Nom :* ${formData.name}\n📞 *Tél :* ${formData.phone}\n📅 *Date souhaitée :* ${formData.date}\n📝 *Message :* ${formData.message}`);
    window.open(`https://wa.me/${cleanOwnerPhone}?text=${encoded}`, '_blank');
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
    setFormData({ name: '', phone: '', date: '', message: '' });
  };

  const handleSms = (e: React.FormEvent) => {
    e.preventDefault();
    const smsPhone = PHONE_NUMBER.replace(/\s/g, '');
    const encoded = encodeURIComponent(buildMessage());
    window.open(`sms:${smsPhone}?body=${encoded}`, '_blank');
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
    setFormData({ name: '', phone: '', date: '', message: '' });
  };

  return (
    <section id="privatisation" className="py-24 bg-olive-leaf/10 text-cornsilk relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#dda15e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-6 relative z-10 max-w-2xl">
        <div className="text-center mb-10">
          <i className="fab fa-whatsapp text-green-500 text-5xl mb-4"></i>
          <h2 className="font-handwritten text-5xl md:text-6xl mb-3 text-sunlit-clay">Contactez-nous</h2>
          <p className="text-gray-300 text-lg">Remplissez le formulaire, votre demande sera envoyée directement par WhatsApp.</p>
        </div>

        <div className="bg-black-forest/60 backdrop-blur-md p-8 rounded-2xl border border-olive-leaf/40 shadow-2xl">
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

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                  WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleSms}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                >
                  <i className="fas fa-sms text-2xl"></i>
                  Envoyer un SMS
                </button>
              </div>
              <p className="text-center text-xs text-gray-400 mt-2">
                Le message sera pré-rempli dans votre application.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Privatization;
