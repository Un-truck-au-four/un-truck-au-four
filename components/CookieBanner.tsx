import React, { useState, useEffect } from 'react';

interface CookieBannerProps {
  onOpenLegal: (page: 'privacy' | 'terms') => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenLegal }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const refuse = () => {
    localStorage.setItem('cookie-consent', 'refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-black-forest border border-olive-leaf rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-gray-300 leading-relaxed">
            <i className="fas fa-cookie-bite text-sunlit-clay mr-2"></i>
            Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. En continuant, vous acceptez notre{' '}
            <button
              onClick={() => onOpenLegal('privacy')}
              className="text-sunlit-clay underline hover:text-white transition-colors"
            >
              politique de confidentialité
            </button>
            {' '}et nos{' '}
            <button
              onClick={() => onOpenLegal('terms')}
              className="text-sunlit-clay underline hover:text-white transition-colors"
            >
              conditions d'utilisation
            </button>
            .
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={refuse}
            className="px-5 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white text-sm font-semibold transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-lg bg-sunlit-clay text-black-forest font-bold text-sm hover:bg-yellow-400 transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
