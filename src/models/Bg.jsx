import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import bgScene from '../assets/3d/background.glb'
import { useFrame } from '@react-three/fiber';

const Bg = ({ isRotating }) => {
    const bg = useGLTF(bgScene);
    const bgRef = useRef();

    useFrame((_, delta) => {
      if(isRotating) {
        bgRef.current.rotation.y += 0.1 * delta;
      }
    }) 

  return (
    <mesh ref={bgRef}>
        <primitive object={bg.scene} />
    </mesh>
  )
}

export default Bg
