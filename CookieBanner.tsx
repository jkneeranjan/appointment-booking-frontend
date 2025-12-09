import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';
import { Shield, ChevronDown, ChevronUp, Check, X } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const defaultPreferences: CookiePreferences = {
  essential: true, // Always true
  functional: false,
  analytics: false,
  marketing: false
};

export const CookieBanner = () => {
  const { t, language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check local storage on mount
    const savedConsent = localStorage.getItem('cookie-consent-settings');
    if (!savedConsent) {
      setIsVisible(true);
    } else {
      setPreferences(JSON.parse(savedConsent));
    }

    // Listen for custom event to re-open settings
    const handleOpenSettings = () => {
      const saved = localStorage.getItem('cookie-consent-settings');
      if (saved) {
        setPreferences(JSON.parse(saved));
      }
      setIsVisible(true);
      setShowSettings(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent-settings', JSON.stringify(prefs));
    // Usually triggers for GTM or Analytics would go here
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    const allEnabled = { essential: true, functional: true, analytics: true, marketing: true };
    setPreferences(allEnabled);
    saveConsent(allEnabled);
  };

  const handleRejectAll = () => {
    const onlyEssential = { ...defaultPreferences };
    setPreferences(onlyEssential);
    saveConsent(onlyEssential);
  };

  const handleSaveSelection = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Cannot toggle essential
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center pointer-events-none">
      
      {/* Settings Modal Overlay */}
      {showSettings && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={() => setShowSettings(false)}></div>
      )}

      {/* Main Banner / Modal Container */}
      <div className={`
        bg-white w-full max-w-4xl shadow-2xl pointer-events-auto 
        ${showSettings ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl h-auto max-h-[90vh] overflow-hidden flex flex-col' : 'mb-0 rounded-t-2xl md:mb-6 md:rounded-2xl border border-slate-200'}
      `}>
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center space-x-3">
            <Shield className="text-emerald-600 w-6 h-6" />
            <h3 className="font-bold text-slate-900 text-lg">{t('cookie_banner_title')}</h3>
          </div>
          {showSettings && (
             <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-slate-900">
               <X size={24} />
             </button>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 ${showSettings ? 'overflow-y-auto' : ''}`}>
          
          {!showSettings ? (
            // Simple View
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <p className="text-slate-600 text-sm flex-grow">
                {t('cookie_text')} <Link to="/privacy" className="underline text-slate-900 hover:text-emerald-600" onClick={() => setIsVisible(false)}>{t('privacy')}</Link>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                 <button onClick={() => setShowSettings(true)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors border border-slate-200">
                  {t('cookie_customize')}
                </button>
                <button onClick={handleRejectAll} className="px-4 py-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium transition-colors">
                  {t('cookie_essential')}
                </button>
                <button onClick={handleAcceptAll} className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-colors shadow-lg">
                  {t('cookie_accept')}
                </button>
              </div>
            </div>
          ) : (
            // Detailed Settings View
            <div className="space-y-6">
              <p className="text-slate-600 text-sm">
                 {t('cookie_text')}
              </p>

              <div className="space-y-4">
                 {/* Essential */}
                 <div className="flex items-start justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div>
                       <div className="flex items-center mb-1">
                          <span className="font-bold text-slate-900 text-sm">{t('cat_essential')}</span>
                          <span className="ml-2 text-[10px] uppercase bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">Required</span>
                       </div>
                       <p className="text-xs text-slate-500">{t('cat_essential_desc')}</p>
                    </div>
                    <div className="text-emerald-600 opacity-50 cursor-not-allowed">
                       <Check size={20} />
                    </div>
                 </div>

                 {/* Functional */}
                 <div className="flex items-start justify-between p-4 rounded-xl border border-slate-200 hover:border-emerald-200 transition-colors cursor-pointer" onClick={() => togglePreference('functional')}>
                    <div>
                       <div className="flex items-center mb-1">
                          <span className="font-bold text-slate-900 text-sm">{t('cat_functional')}</span>
                       </div>
                       <p className="text-xs text-slate-500">{t('cat_functional_desc')}</p>
                    </div>
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${preferences.functional ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'}`}>
                       {preferences.functional && <Check size={14} />}
                    </div>
                 </div>

                 {/* Analytics */}
                 <div className="flex items-start justify-between p-4 rounded-xl border border-slate-200 hover:border-emerald-200 transition-colors cursor-pointer" onClick={() => togglePreference('analytics')}>
                    <div>
                       <div className="flex items-center mb-1">
                          <span className="font-bold text-slate-900 text-sm">{t('cat_analytics')}</span>
                       </div>
                       <p className="text-xs text-slate-500">{t('cat_analytics_desc')}</p>
                    </div>
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${preferences.analytics ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'}`}>
                       {preferences.analytics && <Check size={14} />}
                    </div>
                 </div>

                 {/* Marketing */}
                 <div className="flex items-start justify-between p-4 rounded-xl border border-slate-200 hover:border-emerald-200 transition-colors cursor-pointer" onClick={() => togglePreference('marketing')}>
                    <div>
                       <div className="flex items-center mb-1">
                          <span className="font-bold text-slate-900 text-sm">{t('cat_marketing')}</span>
                       </div>
                       <p className="text-xs text-slate-500">{t('cat_marketing_desc')}</p>
                    </div>
                    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${preferences.marketing ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'}`}>
                       {preferences.marketing && <Check size={14} />}
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions for Settings Modal */}
        {showSettings && (
          <div className="p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-end gap-3">
             <button onClick={handleRejectAll} className="px-4 py-2 text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
                {t('cookie_essential')}
             </button>
             <button onClick={handleAcceptAll} className="px-4 py-2 text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
                {t('cookie_accept')}
             </button>
             <button onClick={handleSaveSelection} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-md">
                {t('cookie_save')}
             </button>
          </div>
        )}

      </div>
    </div>
  );
};