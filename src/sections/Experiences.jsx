import { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';
import { useTranslation } from '../contexts/LanguageContext.jsx';

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
    const { t } = useTranslation();
    const [animationName, setAnimationName] = useState('idle');
    const experienceRef = useRef();

    // Function to get translated work experience data
    const getTranslatedWorkExperiences = () => {
        const workExperienceKeys = ['groupFoodOrdering', 'ecommerceMern', 'eventManagement'];

        return workExperiences.map((experience, index) => ({
            ...experience,
            name: t(`workExperiences.${workExperienceKeys[index]}.name`),
            pos: t(`workExperiences.${workExperienceKeys[index]}.pos`),
            duration: t(`workExperiences.${workExperienceKeys[index]}.duration`),
            title: t(`workExperiences.${workExperienceKeys[index]}.title`)
        }));
    };

    const translatedWorkExperiences = getTranslatedWorkExperiences();

    useGSAP(() => {
        // Animate each progress line fill on scroll
        translatedWorkExperiences.forEach((_, index) => {
            gsap.fromTo(`.progress-fill-${index}`,
                {
                    scaleY: 0,
                    transformOrigin: "top center"
                },
                {
                    scaleY: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: `.work-item-${index}`,
                        start: "top 80%",
                        end: "bottom 60%",
                        scrub: 1,
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Animate logos on scroll
        gsap.fromTo('.work-content_logo',
            {
                scale: 0,
                rotation: -180,
                opacity: 0
            },
            {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: '.work-content',
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <section className="c-space my-20" id="work" ref={experienceRef}>
            <div className="w-full text-white-600">
                <p className="head-text">{t('experience.title')}</p>

                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                            <Suspense fallback={<CanvasLoader />}>
                                <Developer position-y={-3} scale={3} animationName={animationName} />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {translatedWorkExperiences.map((item, index) => (
                                <div
                                    key={index}
                                    className={`work-content_container group work-item-${index}`}
                                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}>
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo relative z-10">
                                            <img className="w-full h-full" src={item.icon} alt={item.name} />
                                        </div>

                                        {/* Enhanced Progress Bar with Animation */}
                                        <div className="work-content_bar relative">
                                            {/* Background line */}
                                            <div className="absolute inset-0 bg-black-300 group-hover:bg-black-500 transition-colors duration-300"></div>
                                            {/* Animated fill line */}
                                            <div className={`progress-fill-${index} absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 shadow-lg shadow-blue-500/30`}></div>
                                            {/* Glow effect */}
                                            <div className={`progress-fill-${index} absolute inset-0 bg-blue-400 blur-sm opacity-60`}></div>
                                        </div>
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{item.name}</p>
                                        <p className="text-sm mb-5">
                                            {item.pos} -- <span>{item.duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
