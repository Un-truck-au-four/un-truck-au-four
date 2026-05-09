import React, { useEffect } from 'react';

interface LegalModalProps {
  page: 'privacy' | 'terms' | null;
  onClose: () => void;
}

const PrivacyContent: React.FC = () => (
  <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">1. Responsable du traitement</h3>
      <p className="mb-2">S2MH FOOD (UN TRUCK AU FOUR) — Société par Actions Simplifiée (SAS)</p>
      <ul className="space-y-1 text-gray-400">
        <li><span className="text-gray-300 font-semibold">SIREN :</span> 919 645 416</li>
        <li><span className="text-gray-300 font-semibold">SIRET :</span> 919 645 416 00018</li>
        <li><span className="text-gray-300 font-semibold">N° TVA Intracommunautaire :</span> FR83 919 645 416</li>
        <li><span className="text-gray-300 font-semibold">Inscription INSEE :</span> 23/07/2022</li>
        <li><span className="text-gray-300 font-semibold">Immatriculation RNE (INPI) :</span> 10/10/2022</li>
      </ul>
      <p className="mt-2">Contact : via le formulaire WhatsApp disponible sur ce site.</p>
    </section>
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">2. Propriété intellectuelle</h3>
      <p>La charte graphique, le logo et le nom <span className="text-cornsilk font-semibold">Un Truck Au Four</span> sont la propriété exclusive de S2MH FOOD (UN TRUCK AU FOUR), SAS. Toute reproduction, représentation ou utilisation sans autorisation écrite préalable est strictement interdite.</p>
    </section>
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">3. Réalisation du site</h3>
      <p>Ce site a été conçu et développé en <span className="text-cornsilk font-semibold">React JS</span> par <span className="text-cornsilk font-semibold">Erin SUPIOT</span>. Toute demande relative au développement peut être adressée directement via les coordonnées disponibles sur ce site.</p>
    </section>
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">4. Données collectées</h3>
      <p>Lors de l'utilisation du formulaire de privatisation, les données suivantes sont collectées : nom, numéro de téléphone, date souhaitée et message. Ces données sont transmises directement via WhatsApp et ne sont pas stockées sur nos serveurs.</p>
    </section>
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">5. Finalité</h3>
      <p>Les données collectées sont utilisées uniquement pour répondre à vos demandes de privatisation ou de renseignements. Elles ne sont ni vendues, ni cédées à des tiers.</p>
    </section>
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">6. Cookies</h3>
      <p>Ce site utilise uniquement un cookie technique (<code className="bg-white/10 px-1 rounded">cookie-consent</code>) pour mémoriser votre choix concernant les cookies. Aucun cookie publicitaire ou de tracking n'est utilisé.</p>
    </section>
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">7. Vos droits</h3>
      <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous via WhatsApp.</p>
    </section>
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">8. Hébergement</h3>
      <p>Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.</p>
    </section>
  </div>
);

const TermsContent: React.FC = () => (
  <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">1. Objet</h3>
      <p>Les présentes conditions régissent l'utilisation du site vitrine d'Un Truck Au Four, accessible à l'adresse <span className="text-cornsilk">un-truck-au-four.vercel.app</span>. Ce site est fourni à titre purement informatif.</p>
    </section>
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">2. Propriété intellectuelle</h3>
      <p>L'ensemble du contenu de ce site (textes, images, logo) est la propriété d'Un Truck Au Four. Toute reproduction sans autorisation écrite est interdite.</p>
    </section>
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">3. Responsabilité</h3>
      <p>Un Truck Au Four s'efforce de maintenir les informations du site à jour (horaires, menu, tarifs) mais ne peut garantir leur exactitude à tout moment. Les prix et disponibilités peuvent changer sans préavis.</p>
    </section>
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">4. Formulaire de contact</h3>
      <p>Le formulaire de privatisation redirige vers WhatsApp. Un Truck Au Four n'est engagé que par la confirmation explicite d'une demande, après échange via WhatsApp ou téléphone.</p>
    </section>
    <section>
      <h3 className="text-sunlit-clay font-bold text-base mb-2">5. Droit applicable</h3>
      <p>Les présentes conditions sont soumises au droit français. En cas de litige, les tribunaux français sont seuls compétents.</p>
    </section>
  </div>
);

const LegalModal: React.FC<LegalModalProps> = ({ page, onClose }) => {
  useEffect(() => {
    if (page) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [page]);

  if (!page) return null;

  const isPrivacy = page === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-black-forest border border-olive-leaf rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-olive-leaf/40">
          <h2 className="font-handwritten text-2xl text-sunlit-clay">
            {isPrivacy ? 'Politique de confidentialité' : "Conditions d'utilisation"}
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fermer"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6">
          {isPrivacy ? <PrivacyContent /> : <TermsContent />}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-olive-leaf/40 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-olive-leaf hover:bg-olive-leaf/80 text-white font-semibold rounded-lg text-sm transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
