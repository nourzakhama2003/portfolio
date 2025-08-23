import { useGLTF, useVideoTexture } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const DemoComputerCustom = (props) => {
    const { nodes, materials } = useGLTF('/models/laptop_3d_model.glb');
    const txt = useVideoTexture(props.texture || '/textures/project/project1.mp4');
    const group = useRef();

    // Ensure the texture is not flipped
    useEffect(() => {
        if (txt) {
            txt.flipY = false;
        }
    }, [txt]);

    // GSAP animation
    useGSAP(() => {
        gsap.from(group.current.rotation, {
            y: Math.PI / 2,
            duration: 1,
            ease: 'power3.out',
        });
    }, [txt]);

    // Create video material
    const videoMaterial = useMemo(() => new THREE.MeshBasicMaterial({ map: txt, toneMapped: false }), [txt]);

    // Handle missing nodes or materials
    if (!nodes || !materials) {
        return null; // Or return a loading spinner/fallback UI
    }

    return (
        <group {...props} ref={group} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group
                    position={[-0.005, 0.044, 0.15]}
                    rotation={[0, 0, -Math.PI]}
                    scale={[0.288, 0.412, 0.295]}>
                    <mesh
                        castShadow={true}
                        receiveShadow={true}
                        geometry={nodes['Material19-material-material'].geometry}
                        material={materials['Material19-material']}
                    />
                    <mesh
                        castShadow={true}
                        receiveShadow={true}
                        geometry={nodes['Material20-material-material'].geometry}
                        material={videoMaterial}
                    />
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/laptop_3d_model.glb');
export default DemoComputerCustom;