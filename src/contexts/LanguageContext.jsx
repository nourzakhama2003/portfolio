import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../constants/translations.js';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const useTranslation = () => {
    const { language } = useLanguage();

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    return { t };
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Check localStorage first, then browser language
        const savedLanguage = localStorage.getItem('portfolio-language');
        if (savedLanguage) return savedLanguage;

        const browserLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';
        return browserLanguage;
    });

    useEffect(() => {
        localStorage.setItem('portfolio-language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prevLang => prevLang === 'en' ? 'fr' : 'en');
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
