"use client";

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";

export type Language = "de" | "en" | "ru";

// Only written when the visitor actively switches the language (listed in the cookie policy).
export const LANGUAGE_STORAGE_KEY = "lbn-language";
const LANGUAGES: Language[] = ["de", "en", "ru"];

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "de",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // German is the default; the server always renders German.
  const [language, setLanguageState] = useState<Language>("de");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (stored && (LANGUAGES as string[]).includes(stored)) setLanguageState(stored as Language);
    } catch {
      // Storage unavailable: stay on German.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    } catch {
      // Storage unavailable: the choice applies to this page view only.
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
