import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import MenuSection from "./components/MenuSection";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Privatization from "./components/Privatization";
import PrivatizationTeaser from "./components/PrivatizationTeaser";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import LegalModal from "./components/LegalModal";

const App: React.FC = () => {
  const [legalPage, setLegalPage] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PrivatizationTeaser />
        <Services />
        <MenuSection />
        <Reviews />
        <Location />
        <Privatization />
      </main>
      <Footer onOpenLegal={setLegalPage} />
      <CookieBanner onOpenLegal={setLegalPage} />
      <LegalModal page={legalPage} onClose={() => setLegalPage(null)} />
    </div>
  );
};

export default App;
