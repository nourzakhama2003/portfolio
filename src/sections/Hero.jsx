import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import CanvasLoader from "../components/Loading.jsx";
// import HackerRoom from "../components/HackerRoom.jsx";
// import { Leva, useControls } from "leva";
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
const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });


    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative border-2 border-blue-500">
            <div className="w-full mx-auto flex flex-col sm:mt36 mt-20 c-space gap-3">
                <p className=" text-xl font-medium text-white text-center font-generalsans">
                    Hi, I'm Nour! Welcome to my portfolio!
                    <span className="waving-hand"> 👋</span>
                </p>
                <p className="hero_tag ">Building Products & Brands</p>
            </div>

            <div className="w-full h-full absolute inset-0">
            {/*<Leva />*/}
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 15]} />


                    {/* ✅ Correct light usage */}
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />
                <HeroCamera isMobile={isMobile}>
                    <GamingRoom
                        scale={0.15}
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
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>

    );
};

export default Hero;
