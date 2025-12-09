import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { CONTACT_INFO } from '../constants';
import { CheckCircle } from 'lucide-react';

export const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="animate-fade-in pb-20">
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{t('about')}</h1>
           <p className="text-slate-300 max-w-2xl mx-auto text-lg">
             {language === 'de' 
               ? 'Lernen Sie unser Team und unsere Praxisphilosophie kennen.' 
               : 'Get to know our team and our practice philosophy.'}
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-96 lg:h-auto relative">
               <img 
                 src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000" 
                 alt="Doctor Portrait Placeholder" 
                 className="w-full h-full object-cover"
               />
               {/* Note: In a real scenario, use actual photo of Dr. Friese */}
            </div>
            <div className="p-12 lg:p-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Dr. med. dent. Hjalmar Friese</h2>
              <p className="text-emerald-600 font-medium text-lg mb-8">Kieferorthopäde / Orthodontist</p>
              
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  {language === 'de'
                    ? 'Herzlich willkommen in meiner kieferorthopädischen Praxis in Bruchsal. Seit vielen Jahren widme ich mich der Korrektur von Zahn- und Kieferfehlstellungen bei Kindern, Jugendlichen und Erwachsenen.'
                    : 'Welcome to my orthodontic practice in Bruchsal. For many years, I have dedicated myself to correcting tooth and jaw misalignments in children, adolescents, and adults.'}
                </p>
                <p>
                  {language === 'de'
                    ? 'Unser Ziel ist es, Ihnen nicht nur zu einem schönen Lächeln zu verhelfen, sondern auch die funktionelle Gesundheit Ihres Kauorgans sicherzustellen. Wir setzen auf moderne Diagnostik und schonende Behandlungsmethoden.'
                    : 'Our goal is not only to help you achieve a beautiful smile but also to ensure the functional health of your chewing organ. We rely on modern diagnostics and gentle treatment methods.'}
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">{language === 'de' ? 'Qualifikationen & Mitgliedschaften' : 'Qualifications & Memberships'}</h3>
                <ul className="space-y-3">
                  {['Studium der Zahnmedizin', 'Fachzahnarzt für Kieferorthopädie', 'Mitglied der DGKFO', 'Mitglied der Landeszahnärztekammer BW'].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-600 text-sm">
                      <CheckCircle className="text-emerald-500 w-5 h-5 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-24 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">{t('our_philosophy')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
             <div className="text-emerald-600 font-bold text-xl mb-4">01.</div>
             <h3 className="font-bold mb-2">Individuell</h3>
             <p className="text-sm text-slate-500">Jeder Patient ist einzigartig. Wir erstellen maßgeschneiderte Behandlungspläne.</p>
           </div>
           <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
             <div className="text-emerald-600 font-bold text-xl mb-4">02.</div>
             <h3 className="font-bold mb-2">Modern</h3>
             <p className="text-sm text-slate-500">Einsatz neuester Technologien wie digitale Scanner und unsichtbare Schienen.</p>
           </div>
           <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
             <div className="text-emerald-600 font-bold text-xl mb-4">03.</div>
             <h3 className="font-bold mb-2">Transparent</h3>
             <p className="text-sm text-slate-500">Klare Kommunikation über Kosten, Dauer und Ablauf der Behandlung.</p>
           </div>
        </div>
      </div>
    </div>
  );
};