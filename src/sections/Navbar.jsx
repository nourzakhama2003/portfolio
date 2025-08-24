import { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext.jsx';

const NavItems = ({ onClick = () => { } }) => {
    const { t } = useTranslation();

    const navLinks = [
        { id: 1, href: '#home', name: t('nav.home') },
        { id: 2, href: '#about', name: t('nav.about') },
        { id: 3, href: '#work', name: t('nav.work') },
        { id: 4, href: '#contact', name: t('nav.contact') }
    ];

    return (
        <ul className="nav-ul">
            {navLinks.map((item) => (
                <li key={item.id} className="nav-li">
                    <a href={item.href} className="nav-li_a" onClick={onClick}>
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (prevIsOpen) => setIsOpen(!prevIsOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed w-full top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/80 border-b border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-4 mx-auto c-space">
                    <a href="/" className="text-white font-bold text-2xl hover:text-blue-400 transition-all duration-300 
                                           flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg 
                                      flex items-center justify-center text-white font-bold text-sm
                                      group-hover:scale-110 transition-transform duration-300">
                            N
                        </div>
                        <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            Nour Salem
                        </span>
                    </a>

                    <button
                        onClick={() => toggleMenu(isOpen)}
                        className="text-white hover:text-blue-400 focus:outline-none sm:hidden flex
                                 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20
                                 items-center justify-center hover:bg-white/20 transition-all duration-300"
                        aria-label="Toggle menu">
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-5 h-5" />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems onClick={closeMenu} />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
