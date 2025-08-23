import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail, Float, Sphere, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Electron Component
function Electron({ radius = 2.75, speed = 6, ...props }) {
    const ref = useRef();
    useFrame((state) => {
        if (ref.current) {
            const t = state.clock.getElapsedTime() * speed;
            ref.current.position.set(
                Math.sin(t) * radius,
                (Math.cos(t) * radius) / 1.25,
                0
            );
        }
    });

    return (
        <Float>
            <group {...props}>
                <Trail
                    width={2}
                    length={10}
                    color={new THREE.Color(2, 1, 10)}
                    attenuation={(t) => t * t}
                >
                    <mesh ref={ref}>
                        <sphereGeometry args={[0.25]} />
                        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
                    </mesh>
                </Trail>
            </group>
        </Float>
    );
}

// Atom Component
function Atom(props) {
    const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), []);
    return (
        <group {...props}>
            <Electron position={[0, 0, 0.5]} speed={6} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
            <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />
            <Sphere args={[0.35, 64, 64]}>
                <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
            </Sphere>
        </group>
    );
}

// ReactLogo Component (Now Only Contains the Atom)
const ReactLogo = (props) => {
    return (
        <Float floatIntensity={1}>
            <group rotation={[2.6, 0.8, -1.8]} scale={0.74} {...props} dispose={null}>
                {/* Atom Component */}
                <Atom position={[0, 0.5, 0]} scale={[0.5, 0.5, 0.5]} />

                {/* Stars Background */}
                <Stars saturation={0} count={400} speed={0.5} />

                {/* Post-Processing Bloom Effect */}
                <EffectComposer>
                    <Bloom mipmapBlur luminanceThreshold={0.2} radius={0.5} />
                </EffectComposer>
            </group>
        </Float>
    );
};

// Export the ReactLogo Component
export default ReactLogo;