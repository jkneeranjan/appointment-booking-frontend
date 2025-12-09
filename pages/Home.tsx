import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';
import { IconMap, SERVICES_DATA, REVIEWS, CONTACT_INFO } from '../constants';
import { ChevronRight, Star, Clock, CheckCircle } from 'lucide-react';

export const Home = () => {
  const { t, language } = useLanguage();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Orthodontic Clinic" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
              {language === 'de' ? 'Kieferorthopädie Bruchsal' : 'Orthodontics Bruchsal'}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
              {t('hero_title')}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="inline-flex justify-center items-center px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                {t('book_now')}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all shadow-sm">
                {t('read_more')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('services')}</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service) => {
               const Icon = IconMap[service.icon as keyof typeof IconMap];
               return (
                <div key={service.id} className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-emerald-100 hover:shadow-2xl transition-all duration-300">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to="/services" className="text-sm font-semibold text-emerald-600 flex items-center group-hover:translate-x-1 transition-transform">
                    Mehr erfahren <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
               );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
               <div className="text-5xl font-bold text-emerald-400 mb-2">4.6</div>
               <div className="flex justify-center text-emerald-400 mb-2">
                 {[...Array(5)].map((_,i) => <Star key={i} fill="currentColor" size={20}/>)}
               </div>
               <p className="text-slate-400">Google Rating (15 Reviews)</p>
            </div>
            <div className="p-6">
               <div className="text-5xl font-bold text-emerald-400 mb-2">15+</div>
               <p className="text-slate-400">Jahre Erfahrung</p>
               <p className="text-xs text-slate-500 mt-1">Years Experience</p>
            </div>
            <div className="p-6">
               <div className="flex justify-center mb-4 text-emerald-400">
                 <CheckCircle size={48} />
               </div>
               <p className="text-xl font-medium">Moderne Ausstattung</p>
               <p className="text-sm text-slate-400">Modern Equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">{t('testimonials_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                <p className="font-semibold text-slate-900 text-sm">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Emergency */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl font-bold text-slate-900 mb-6">{CONTACT_INFO.address}</h2>
               <p className="text-slate-600 mb-8">
                 Besuchen Sie uns in unserer modernen Praxis im Herzen von Bruchsal.
                 Parkplätze finden Sie direkt vor dem Haus oder im nahegelegenen Parkhaus.
               </p>
               
               <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                 <h3 className="flex items-center text-xl font-bold text-emerald-800 mb-2">
                   <Clock className="mr-2" /> {t('emergency')}
                 </h3>
                 <p className="text-emerald-700">
                   {t('emergency_text')}<br />
                   <a href={`tel:${CONTACT_INFO.phone}`} className="font-bold underline mt-2 inline-block">{CONTACT_INFO.phone}</a>
                 </p>
               </div>
             </div>
             
             <div className="h-96 bg-slate-200 rounded-3xl overflow-hidden shadow-lg transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.571477123456!2d8.5954602!3d49.1246797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797a7a670356785%3A0x63d08596633b4999!2sWerner-von-Siemens-Stra%C3%9Fe%202%2C%2076646%20Bruchsal!5e0!3m2!1sen!2sde!4v1715428400000!5m2!1sen!2sde"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 loading="lazy"
                 title="Clinic Location"
               ></iframe>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};