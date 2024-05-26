import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber'; 
import Loader from '../components/Loader';
import Earth from '../models/Earth';
import Bg from '../models/Bg';
import Rocket from '../models/Rocket';
import Popup from '../components/Popup';


const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28  text-white left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <Popup currentStage={currentStage} />}
      </div>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }} 
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 3]} intensity={4} />
          <ambientLight intensity={1} />
          <hemisphereLight groundColor='#000000' intensity={1} />

          <Rocket />
          <Bg isRotating={isRotating}/>
          <Earth 
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}  
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
