import React, { createContext, useContext, useState, PropsWithChildren } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: PropsWithChildren<{}>) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    // If exact key exists in TRANSLATIONS constant
    if (TRANSLATIONS[key as keyof typeof TRANSLATIONS]) {
      return TRANSLATIONS[key as keyof typeof TRANSLATIONS][language];
    }
    // Fallback if missing
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};