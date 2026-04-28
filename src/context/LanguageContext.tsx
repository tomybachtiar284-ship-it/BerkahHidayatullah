import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { id } from '../locales/id';
import { en } from '../locales/en';

type Language = 'id' | 'en';
type Dictionary = typeof id;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang');
    return (saved === 'id' || saved === 'en') ? saved : 'id';
  });

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
  }, [lang]);

  const dict = lang === 'id' ? id : en;

  // Simple key dot-notation resolver (e.g. "home.hero.title")
  const t = (key: string): any => {
    return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : null), dict as any) || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
