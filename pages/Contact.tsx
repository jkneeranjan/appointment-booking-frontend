import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { CONTACT_INFO, OPENING_HOURS } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact = () => {
  const { t, language } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="animate-fade-in pb-20">
      <div className="bg-slate-900 text-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">{t('contact_title')}</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            {language === 'de' ? 'Wir freuen uns auf Ihren Besuch in Bruchsal.' : 'We look forward to your visit in Bruchsal.'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Info Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 lg:col-span-1">
            <h2 className="text-xl font-bold text-slate-900 mb-6">{t('contact')}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-slate-900">Adresse</h3>
                  <p className="text-slate-600 text-sm mt-1">
                    {CONTACT_INFO.address}<br/>
                    {CONTACT_INFO.zipCity}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-slate-900">Telefon</h3>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-slate-600 text-sm mt-1 hover:text-emerald-600 block">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-medium text-slate-900">E-Mail</h3>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 text-sm mt-1 hover:text-emerald-600 block">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <h3 className="font-medium text-slate-900 mb-3 flex items-center">
                   <Clock className="w-5 h-5 mr-2" /> Öffnungszeiten
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {OPENING_HOURS.map((slot, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{slot.day}</span>
                      <span>{slot.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100 lg:col-span-2 h-[500px] lg:h-auto overflow-hidden">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.571477123456!2d8.5954602!3d49.1246797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797a7a670356785%3A0x63d08596633b4999!2sWerner-von-Siemens-Stra%C3%9Fe%202%2C%2076646%20Bruchsal!5e0!3m2!1sen!2sde!4v1715428400000!5m2!1sen!2sde"
               width="100%" 
               height="100%" 
               style={{ border: 0, borderRadius: '1rem' }} 
               loading="lazy"
               title="Map"
             ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">{t('send_message')}</h2>
          
          {sent ? (
             <div className="text-center py-12 text-emerald-600 bg-emerald-50 rounded-xl">
               <h3 className="text-xl font-bold mb-2">{t('success_message')}</h3>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('form_name')} *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t('form_email')} *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
                </div>
              </div>
              <div>
                 <label className="block text-sm font-medium text-slate-700 mb-2">{t('form_message')} *</label>
                 <textarea required rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
              </div>
              <div className="flex items-center">
                 <input type="checkbox" required className="w-5 h-5 text-emerald-600 rounded" />
                 <span className="ml-3 text-sm text-slate-600">{t('form_privacy')}</span>
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors">
                {t('send_message')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};