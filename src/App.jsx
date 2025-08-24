
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Clients from "./components/Clients.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Experiences from "./sections/Experiences.jsx";
import StatsSection from "./components/StatsSection.jsx";
import FloatingScrollTop from "./components/FloatingScrollTop.jsx";
import ThemeLanguageToggle from "./components/ThemeLanguageToggle.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";

const App = () => {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <main className="w-full mx-auto transition-colors duration-500 
                               bg-black-100 dark:bg-black-100 
                               light:bg-gray-50 light:text-gray-900">
                    <ThemeLanguageToggle />
                    <Navbar />
                    <Hero />
                    <About />
                    <StatsSection />
                    <Projects />
                    <Experiences />
                    <Clients />
                    <Contact />
                    <Footer />
                    <FloatingScrollTop />
                </main>
            </LanguageProvider>
        </ThemeProvider>
    );
};

export default App;
