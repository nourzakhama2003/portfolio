import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CanvasLoader from "../components/Loading.jsx";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import ReactL from "../components/ReactL.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import LaptopHacker from "../components/LaptopHacker.jsx";
import Button from "../components/Button.jsx";
import GamingRoom from "../components/GamingRoom.jsx";
import { useCountUp, useInView } from "../hooks/useAnimations.js";
import { useTranslation } from "../contexts/LanguageContext.jsx";

const Hero = () => {
    const { t } = useTranslation();
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const [statsRef, statsInView] = useInView(0.3);
    const projectsCount = useCountUp(15, 2000, statsInView);
    const experienceYears = useCountUp(3, 2000, statsInView);
    const clientsCount = useCountUp(25, 2000, statsInView);

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    // GSAP animations
    useGSAP(() => {
        gsap.fromTo('.hero-title',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );

        gsap.fromTo('.hero-subtitle',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
        );

        gsap.fromTo('.hero-stats',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, ease: "back.out(1.7)" }
        );
    }, []);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            {/* Enhanced Hero Content */}
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-16 c-space gap-3 z-10 relative">
                <p className="hero-title text-xl sm:text-2xl font-medium text-white text-center font-generalsans">
                    {t('hero.greeting')}
                    <span className="waving-hand"> 👋</span>
                </p>
                <p className="hero-subtitle hero_tag text-center">{t('hero.tagline')}</p>
                <div className="flex justify-center items-center gap-3 mt-2">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-lg border-2 border-blue-400/50 backdrop-blur-sm">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Senior Full Stack Developer
                    </span>
                </div>

                {/* Stats Section with Counter Animation */}
                <div ref={statsRef} className="hero-stats flex justify-center items-center gap-4 sm:gap-8 mt-8 flex-wrap">
                    <div className="stat-card bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl font-bold text-blue-400">{projectsCount}+</div>
                        <div className="text-sm text-white/80 font-medium">{t('hero.projectsCompleted')}</div>
                    </div>
                    <div className="stat-card bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl font-bold text-green-400">{experienceYears}+</div>
                        <div className="text-sm text-white/80 font-medium">{t('hero.yearsExperience')}</div>
                    </div>
                    <div className="stat-card bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                        <div className="text-2xl sm:text-3xl font-bold text-orange-400">{clientsCount}+</div>
                        <div className="text-sm text-white/80 font-medium">{t('hero.happyClients')}</div>
                    </div>
                </div>

                {/* Enhanced CTA Button */}
                <div className="mt-8 flex justify-center">
                    <a href="#about" className="group">
                        <Button
                            name={t('hero.discoverWork')}
                            isBeam
                            containerClass="w-fit px-8 py-3 group-hover:scale-105 transition-transform duration-300"
                        />
                    </a>
                </div>
            </div>

            {/* 3D Scene with improved mobile sizing */}
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 15]} />

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />

                        <HeroCamera isMobile={isMobile}>
                            <GamingRoom
                                scale={isSmall ? 0.1 : isMobile ? 0.12 : 0.15}
                                rotation={[0, 0, 0]}
                                position={sizes.deskPosition}
                            />
                            {/*<LaptopHacker*/}
                            {/*    scale={sizes.deskScale}*/}
                            {/*    rotation={[0, -Math.PI/2, 0]}*/}
                            {/*    position={sizes.deskPosition}*/}
                            {/*/>*/}
                            {/*<HackerRoom*/}
                            {/*    scale={sizes.deskScale}*/}
                            {/*    rotation={[0, -Math.PI, 0]}*/}
                            {/*    position={sizes.deskPosition}*/}
                            {/*/>*/}
                        </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Rings position={sizes.ringPosition} />
                            <Cube position={sizes.cubePosition} />
                            <ReactL position={sizes.reactLPosition} />
                        </group>
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-0 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name={t('hero.workTogether')} isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>

    );
};

export default Hero;
