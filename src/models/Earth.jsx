/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: GregoryDev (https://sketchfab.com/GregoryDevelopment)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-planet-model-cb680d38bee541a5ab4ef331e323fa2d
Title: Earth Planet Model
*/

import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three';
import { useFrame, useThree } from '@react-three/fiber';

import earthScene from '../assets/3d/earth.glb'

const Earth = ({ isRotating, setIsRotating, setCurrentStage, ...props}) => {

  const earthRef = useRef(); 

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(earthScene)

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating) {
        
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = (clientX - lastX.current) / viewport.width;
    earthRef.current.rotation.y += delta * 0.03 * Math.PI;
    earthRef.current.rotation.z += delta * 0.01 * Math.PI;
    earthRef.current.rotation.x += delta * 0.02 * Math.PI;
    lastX.current = clientX;
    rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft'){
        if(!isRotating) setIsRotating(true);
        earthRef.current.rotation.y += 0.01 * Math.PI;
        rotationSpeed.current = 0.0125;
    }   else if(e.key === 'ArrowRight') {
        if(!isRotating) setIsRotating(true);
        earthRef.current.rotation.y -= 0.01 * Math.PI;
        rotationSpeed.current = -0.0125;   
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
        setIsRotating(false);
    }
  }

  useFrame(() => {
    if(!isRotating) {
        rotationSpeed.current *= dampingFactor;

        if(Math.abs(rotationSpeed.current) < 0.001) {
            rotationSpeed.current = 0;
        }
        
        earthRef.current.rotation.y += rotationSpeed.current;

    } else {
        const rotation = earthRef.current.rotation.y;

        const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  useEffect(() =>{
    const canvas = gl.domElement;
      canvas.addEventListener('pointerdown', handlePointerDown);
      canvas.addEventListener('pointerup', handlePointerUp);
      canvas.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);

      return () => {
        canvas.removeEventListener('pointerdown', handlePointerDown);
        canvas.removeEventListener('pointerup', handlePointerUp);
        canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      }
}, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={earthRef} {...props} >
        <group rotation={[-Math.PI / 2, 0, 0]} scale={2.422}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials['Material.001']}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials['Material.001']}
        />
        </group>
    </a.group>
  )
}

export default Earth;
