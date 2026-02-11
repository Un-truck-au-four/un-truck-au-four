import React from 'react';
import { SOCIAL_FACEBOOK } from '../constants';

type Slot = {
  type: 'Midi' | 'Soir';
  time: string;
  address: string;
  weeklyAddresses?: {
    weekType: 'paire' | 'impaire';
    address: string;
  }[];
};

type DaySchedule = {
  day: string;
  slots: Slot[];
  closed?: boolean;
};

const getIsoWeekNumber = (date: Date): number => {
  const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = utcDate.getUTCDay() || 7;
  utcDate.setUTCDate(utcDate.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1));
  return Math.ceil((((utcDate.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
};

const getMondayAddress = (): string => {
  const isEvenWeek = getIsoWeekNumber(new Date()) % 2 === 0;
  return isEvenWeek
    ? "Leroy Merlin Hautepierre"
    : "Centre Commercial La Vigie";
};

const isCurrentWeekEven = getIsoWeekNumber(new Date()) % 2 === 0;

const SCHEDULE: DaySchedule[] = [
  { 
    day: "Lundi", 
    slots: [
      {
        type: "Midi",
        time: "11:30 - 13:30",
        address: getMondayAddress(),
        weeklyAddresses: [
          { weekType: 'paire', address: "Leroy Merlin Hautepierre" },
          { weekType: 'impaire', address: "Centre Commercial La Vigie" }
        ]
      }
    ] 
  },
  { 
    day: "Mardi", 
    slots: [
      { type: "Midi", time: "11:30 - 13:30", address: "11 rue Jacobi-Netter, 67000 Strasbourg" },
      { type: "Soir", time: "18:30 - 21:00", address: "1 Rue du Musaubach, 67370 Dingsheim" }
    ]
  },
  { 
    day: "Mercredi", 
    slots: [
      { type: "Soir", time: "18:30 - 21:00", address: "30 Rue de la Paix, 67205 Oberhausbergen" }
    ] 
  },
  { 
    day: "Jeudi", 
    slots: [
      { type: "Midi", time: "11:30 - 13:30", address: "9 Rue du Parc, 67205 Oberhausbergen" },
      { type: "Soir", time: "18:30 - 21:00", address: "88 Rte de Saverne, 67205 Oberhausbergen" }
    ] 
  },
  { 
    day: "Vendredi", 
    slots: [
      { type: "Soir", time: "18:30 - 21:00", address: "17 route de Saverne, 67370 Wiwersheim" }
    ] 
  },
  { day: "Samedi", slots: [], closed: true },
  { day: "Dimanche", slots: [], closed: true },
];

const Location: React.FC = () => {
  const getMapLink = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="locations" className="py-20 bg-white relative scroll-mt-24">
       {/* Decorative pattern */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-olive-leaf/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <span className="text-copperwood font-bold tracking-widest uppercase text-sm">Le Planning</span>
            <h2 className="font-handwritten text-5xl md:text-6xl text-black-forest mt-2">Où nous trouver ?</h2>
            <div className="w-24 h-1 bg-sunlit-clay mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Warning Box */}
        <div className="max-w-3xl mx-auto bg-cornsilk p-6 rounded-xl border-l-4 border-copperwood shadow-sm mb-12 flex items-start gap-4 animate-fade-in">
           <i className="fas fa-info-circle text-copperwood text-2xl flex-shrink-0 mt-1"></i>
           <div>
               <h3 className="font-bold text-black-forest text-lg">Emplacements variables</h3>
               <p className="text-black-forest/80 text-sm mt-1">
                   Les emplacements sont susceptibles de changer le Midi et le Soir. Suivez toutes les informations en temps réel sur Facebook.
               </p>
               <a href={SOCIAL_FACEBOOK} target="_blank" rel="noreferrer" className="inline-block mt-2 text-copperwood font-bold text-sm hover:underline">
                   <i className="fab fa-facebook mr-1"></i> Voir sur Facebook
               </a>
           </div>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SCHEDULE.map((dayData, idx) => (
                <div key={idx} className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1 ${dayData.closed ? 'bg-gray-100 opacity-70' : 'bg-white border border-gray-100'}`}>
                    <div className={`p-4 ${dayData.closed ? 'bg-gray-200' : 'bg-olive-leaf'} text-center`}>
                        <h3 className={`font-handwritten text-2xl ${dayData.closed ? 'text-gray-500' : 'text-cornsilk'}`}>{dayData.day}</h3>
                    </div>
                    
                    <div className="p-5">
                        {dayData.closed ? (
                            <div className="text-center py-4">
                                <span className="inline-block px-4 py-2 bg-gray-200 text-gray-500 rounded-full font-bold text-sm">FERMÉ</span>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {dayData.slots.map((slot, sIdx) => (
                                    <div key={sIdx} className="relative pl-4 border-l-2 border-sunlit-clay">
                                        <div className="flex items-center gap-2 mb-1">
                                            <i className={`fas ${slot.type === 'Midi' ? 'fa-sun text-yellow-500' : 'fa-moon text-indigo-500'}`}></i>
                                            <span className="font-bold text-black-forest uppercase text-xs tracking-wider">{slot.type}</span>
                                            <span className="text-gray-500 text-xs ml-auto bg-gray-100 px-2 py-1 rounded-full">{slot.time}</span>
                                        </div>
                                        {slot.weeklyAddresses?.length ? (
                                            <div className="mt-2 space-y-2">
                                                {slot.weeklyAddresses.map((weeklyAddress) => {
                                                    const isActive = (weeklyAddress.weekType === 'paire' && isCurrentWeekEven)
                                                      || (weeklyAddress.weekType === 'impaire' && !isCurrentWeekEven);

                                                    return (
                                                      <a
                                                          key={weeklyAddress.weekType}
                                                          href={getMapLink(weeklyAddress.address)}
                                                          target="_blank"
                                                          rel="noreferrer"
                                                          title="Ouvrir dans Google Maps"
                                                          className={`group block rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                                                            isActive
                                                              ? 'text-gray-700 hover:text-copperwood bg-cornsilk/40 border border-olive-leaf/20'
                                                              : 'text-gray-400 hover:text-gray-500 bg-gray-100 border border-gray-300 opacity-70'
                                                          }`}
                                                      >
                                                          <span className={`inline-block mr-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                                                            isActive
                                                              ? 'bg-olive-leaf/15 text-olive-leaf'
                                                              : 'bg-gray-300 text-gray-600'
                                                          }`}>
                                                            Semaine {weeklyAddress.weekType}
                                                          </span>
                                                          <span className={isActive ? '' : 'line-through'}>
                                                            {weeklyAddress.address}
                                                          </span>
                                                          {!isActive && (
                                                            <span className="ml-2 text-[10px] font-bold uppercase tracking-wide text-red-500">
                                                              (pas cette semaine)
                                                            </span>
                                                          )}
                                                          <i className="fas fa-external-link-alt ml-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity text-olive-leaf"></i>
                                                      </a>
                                                    );
                                                })}
                                            </div>
                                        ) : (
                                            <a 
                                                href={getMapLink(slot.address)} 
                                                target="_blank" 
                                                rel="noreferrer"
                                                className="block text-sm text-gray-700 hover:text-copperwood transition-colors font-medium mt-2 group"
                                                title="Ouvrir dans Google Maps"
                                            >
                                                {slot.address}
                                                <i className="fas fa-external-link-alt ml-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity text-olive-leaf"></i>
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
        
        {/* Map Button for interaction */}
         <div className="mt-12 text-center">
            <a 
              href="https://www.google.com/maps/search/Un+Truck+Au+Four" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-olive-leaf rounded-full hover:bg-black-forest shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-map-marked-alt mr-2"></i>
              Ouvrir la carte générale
            </a>
         </div>

      </div>
    </section>
  );
};

export default Location;