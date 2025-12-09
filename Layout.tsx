import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { NAV_LINKS, CONTACT_INFO, OPENING_HOURS, TRANSLATIONS } from '../constants';
import { Menu, X, Globe, Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import { CookieBanner } from './CookieBanner';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className={`text-xl font-semibold tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-slate-900'}`}>
              Dr. Friese
            </span>
            <span className={`text-xs uppercase tracking-widest ${scrolled ? 'text-emerald-600' : 'text-emerald-600'}`}>
              Kieferorthopädie
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  location.pathname === link.path ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="flex items-center space-x-1 text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="Switch Language"
            >
              <Globe size={18} />
              <span className="text-xs font-semibold uppercase">{language}</span>
            </button>

            {/* CTA Button */}
            <Link
              to="/booking"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t('booking')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="flex items-center space-x-1 text-slate-500"
            >
              <Globe size={18} />
              <span className="text-xs font-semibold uppercase">{language}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-slate-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 rounded-lg"
              >
                {t(link.label)}
              </Link>
            ))}
             <Link
              to="/booking"
              className="block w-full text-center mt-4 bg-emerald-600 text-white px-5 py-3 rounded-lg text-base font-medium"
            >
              {t('booking')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Address */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Dr. Friese</h3>
            <p className="text-slate-600 mb-4 leading-relaxed text-sm">
              {CONTACT_INFO.address}<br />
              {CONTACT_INFO.zipCity}<br />
              {CONTACT_INFO.country}
            </p>
            <div className="flex space-x-4 text-slate-400">
               <a href="#" className="hover:text-emerald-600 transition-colors"><Instagram size={20}/></a>
               <a href="#" className="hover:text-emerald-600 transition-colors"><Facebook size={20}/></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors text-sm">
                  <Phone size={16} className="mr-2" /> {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors text-sm">
                  <Mail size={16} className="mr-2" /> {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors text-sm">
                  <MapPin size={16} className="mr-2" /> Karte anzeigen
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">Öffnungszeiten</h3>
            <ul className="space-y-2">
              {OPENING_HOURS.map((slot, index) => (
                <li key={index} className="flex justify-between text-sm text-slate-600 border-b border-slate-100 pb-1 last:border-0">
                  <span className="font-medium">{slot.day}</span>
                  <span>{slot.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="text-sm text-slate-600 hover:text-emerald-600">{t('imprint')}</Link></li>
              <li><Link to="/privacy" className="text-sm text-slate-600 hover:text-emerald-600">{t('privacy')}</Link></li>
              <li>
                 <button 
                    onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
                    className="text-sm text-slate-600 hover:text-emerald-600 text-left"
                  >
                    {t('cookie_settings')}
                 </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Dr. med. dent. Hjalmar Friese. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <CookieBanner />
      <Footer />
    </div>
  );
};