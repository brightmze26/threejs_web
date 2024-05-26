import { useRef, useEffect} from 'react'
import rocketScene from '../assets/3d/rocket.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Rocket = () => {
    const { scene, animations } = useGLTF(rocketScene);
    const rocketRef = useRef();
    const { actions } = useAnimations(animations, rocketRef);

    useEffect(() => {
        actions['Take 001'].play();
    },[])

    useFrame(({ clock, camera }) => {
      rocketRef.current.position.y = Math.sin(clock.elapsedTime) * 0.4 + 2.15;
    
        if (rocketRef.current.position.x > camera.position.x + 10) {
          rocketRef.current.rotation.y = Math.PI;
        } else if (rocketRef.current.position.x < camera.position.x - 10) {
          rocketRef.current.rotation.y = 0;
        }
    
        if (rocketRef.current.rotation.y === 0) {
          rocketRef.current.position.x += 0.01;
          rocketRef.current.position.z -= 0.01;
        } else {
          rocketRef.current.position.x -= 0.01;
          rocketRef.current.position.z += 0.01;
        }
      });
  return (
    <mesh position={[-5,3,3]} scale={[0.004,0.004,0.004]} ref={rocketRef}>
        <primitive object={scene} />

    </mesh>
  )
}

export default Rocket
