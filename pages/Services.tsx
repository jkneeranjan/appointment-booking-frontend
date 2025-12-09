import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { SERVICES_DATA, IconMap } from '../constants';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  const { t, language } = useLanguage();

  return (
    <div className="animate-fade-in pb-20">
      <div className="bg-slate-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">{t('services')}</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {language === 'de' 
              ? 'Umfassende kieferorthopädische Leistungen für Ihr perfektes Lächeln.' 
              : 'Comprehensive orthodontic services for your perfect smile.'}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-24">
        {SERVICES_DATA.map((service, index) => {
          const Icon = IconMap[service.icon as keyof typeof IconMap];
          const isEven = index % 2 === 0;

          return (
            <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                   <img 
                     src={`https://picsum.photos/800/600?random=${index}&blur=2`} 
                     alt={service.title} 
                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                   <div className="absolute bottom-6 left-6 text-white">
                      <Icon size={40} className="mb-2" />
                   </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description} 
                  {/* Additional dummy text for layout */}
                  <br /><br />
                  {language === 'de' 
                    ? 'Unsere Behandlungsmethoden basieren auf jahrelanger Erfahrung und modernster Technik. Wir beraten Sie gerne individuell zu den Möglichkeiten.' 
                    : 'Our treatment methods are based on years of experience and state-of-the-art technology. We would be happy to advise you individually on the possibilities.'}
                </p>
                
                <h3 className="font-semibold text-slate-900 mb-4 uppercase tracking-wide text-sm">{language === 'de' ? 'Vorteile & Details' : 'Benefits & Details'}</h3>
                <ul className="grid grid-cols-1 gap-3 mb-10">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mr-3 text-emerald-600 flex-shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      {detail}
                    </li>
                  ))}
                </ul>

                <Link to="/booking" className="inline-block px-8 py-3 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-all">
                  {t('booking')}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};