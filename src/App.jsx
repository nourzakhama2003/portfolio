
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
const App = () => {
    return (
        <main className="w-full mx-auto">
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
    );
};

export default App;
