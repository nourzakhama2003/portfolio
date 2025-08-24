import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ThemeLanguageToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();

    useGSAP(() => {
        // Animate toggle buttons on mount
        gsap.fromTo('.toggle-container',
            { opacity: 0, y: -20, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)", delay: 0.5 }
        );
    }, []);

    return (
        <div className="toggle-container fixed top-6 right-6 z-[99999] flex gap-4" style={{ zIndex: 99999 }}>
            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="theme-toggle group relative w-16 h-16 rounded-full backdrop-blur-md border-2 border-white/50 
                         hover:border-white/70 transition-all duration-300 overflow-hidden
                         bg-white/30 dark:bg-black/40 hover:scale-110 shadow-xl shadow-black/30"
                aria-label="Toggle theme"
                style={{ zIndex: 99999 }}
            >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 to-orange-500/40 
                              dark:from-blue-500/40 dark:to-purple-600/40 transition-all duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    {theme === 'dark' ? (
                        <svg className="w-7 h-7 text-yellow-300 drop-shadow-lg group-hover:rotate-12 transition-transform duration-300"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7 text-blue-500 drop-shadow-lg group-hover:-rotate-12 transition-transform duration-300"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            {/* Language Toggle */}
            <button
                onClick={toggleLanguage}
                className="language-toggle group relative w-16 h-16 rounded-full backdrop-blur-md border-2 border-white/50 
                         hover:border-white/70 transition-all duration-300 overflow-hidden
                         bg-white/30 dark:bg-black/40 hover:scale-110 shadow-xl shadow-black/30"
                aria-label="Toggle language"
                style={{ zIndex: 99999 }}
            >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/40 to-blue-500/40 
                              dark:from-purple-500/40 dark:to-pink-600/40 transition-all duration-500"></div>

                {/* Language Text */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <span className="text-base font-bold text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {language.toUpperCase()}
                    </span>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
        </div>
    );
};

export default ThemeLanguageToggle;
