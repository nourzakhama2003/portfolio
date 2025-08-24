import { useInView, useCountUp } from '../hooks/useAnimations.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const StatsSection = () => {
    const [statsRef, statsInView] = useInView(0.3);

    const projectsCompleted = useCountUp(15, 2500, statsInView);
    const yearsExperience = useCountUp(3, 2000, statsInView);
    const happyClients = useCountUp(25, 2800, statsInView);
    const coffeeConsumed = useCountUp(500, 3000, statsInView);

    useGSAP(() => {
        gsap.fromTo('.stat-card',
            {
                opacity: 0,
                y: 50,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: '.stats-container',
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    const stats = [
        {
            number: projectsCompleted,
            label: "Projects Completed",
            suffix: "+",
            icon: "🚀",
            color: "from-blue-500 to-purple-600"
        },
        {
            number: yearsExperience,
            label: "Years Experience",
            suffix: "+",
            icon: "⭐",
            color: "from-green-500 to-teal-600"
        },
        {
            number: happyClients,
            label: "Happy Clients",
            suffix: "+",
            icon: "😊",
            color: "from-orange-500 to-red-600"
        },
        {
            number: coffeeConsumed,
            label: "Cups of Coffee",
            suffix: "+",
            icon: "☕",
            color: "from-yellow-500 to-orange-600"
        }
    ];

    return (
        <section className="c-space my-20" ref={statsRef}>
            <div className="stats-container grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="stat-card bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 group relative overflow-hidden"
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                        <div className="text-3xl mb-3">{stat.icon}</div>
                        <div className={`text-2xl lg:text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                            {stat.number}{stat.suffix}
                        </div>
                        <div className="text-sm lg:text-base text-white/80 font-medium">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSection;
