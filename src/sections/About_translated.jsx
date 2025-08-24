import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';
import { useInView } from '../hooks/useAnimations.js';
import { useTranslation } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const { t } = useTranslation();
    const [hasCopied, setHasCopied] = useState(false);
    const [aboutRef, aboutInView] = useInView(0.2);

    const handleCopy = () => {
        navigator.clipboard.writeText(' nourzakhama2003@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    // GSAP scroll animations
    useGSAP(() => {
        const gridItems = gsap.utils.toArray('.grid-item');

        gridItems.forEach((item, index) => {
            gsap.fromTo(item,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Globe animation
        gsap.fromTo('.globe-container',
            {
                opacity: 0,
                rotationY: -45,
                scale: 0.8
            },
            {
                opacity: 1,
                rotationY: 0,
                scale: 1,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.globe-container',
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <section className="c-space my-20" id="about" ref={aboutRef}>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="xl:row-span-3 grid-item">
                    <div className="grid-container group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                        <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain group-hover:scale-105 transition-transform duration-500" />

                        <div>
                            <p className="grid-headtext">{t('about.hiIm')}</p>
                            <p className="grid-subtext">
                                {t('about.introDescription')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3 grid-item">
                    <div className="grid-container group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain group-hover:scale-105 transition-transform duration-500" />

                        <div>
                            <p className="grid-headtext">{t('about.techStack')}</p>
                            <p className="grid-subtext">
                                {t('about.techStackDescription')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4 grid-item">
                    <div className="grid-container globe-container group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center group-hover:scale-105 transition-transform duration-500">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" //replace night by day
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 34, lng: 10, text: 'nour zakhama', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">{t('about.flexibleTitle')}</p>
                            <p className="grid-subtext">{t('about.locationDescription')}</p>
                            <a href="#contact"><Button name={t('about.contactMe')} isBeam containerClass="w-full mt-10" /></a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3 grid-item">
                    <div className="grid-container group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain group-hover:scale-105 transition-transform duration-500" />

                        <div>
                            <p className="grid-headtext">{t('about.passionTitle')}</p>
                            <p className="grid-subtext">
                                {t('about.passionDescription')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2 grid-item">
                    <div className="grid-container group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                        <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top group-hover:scale-105 transition-transform duration-500"
                        />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">{t('about.contactMeLabel')}</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">nourzakhama2003@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
