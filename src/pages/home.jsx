import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island';
import Sky from '../models/Sky';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import Lighthouse from '../models/Lighthouse';



     
const Home = () => {
  /** This constatnt is the use state for the rotation and dragging feature */
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1)

  const adjustIslandForScreenSize = () => {
    let screenScale = null 
    let screenPosition = [0, -10, -45]
    {/**screen position variables for position of the main object [x,y,z] */}
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustLighthouseForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -35, -120];
    

    if (window.innerWidth < 768) {
      screenScale = [0.8, 0.8, 0.8]
    } else {
      screenScale = [0.9, 0.9, 0.9]
    }

    return [screenScale, screenPosition]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;


    if(window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0 , -1.5, 0]
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -5.5]
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [lighthouseScale, lighthousePosition] = adjustLighthouseForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
 
  return (
    <section className='w-full h-screen relative'>
    <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center">
      {currentStage && <HomeInfo currentStage={currentStage} /> }
    </div>
      {/**Inside canvas you will find all 3D objects */}
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000,}}
      >
        {/**Suspense shows the loader during loading time */}
        <Suspense fallback={<Loader />}>
          <directionalLight position={[7, 7, 7]} intensity={3} />
          <ambientLight intensity={2} />
          <hemisphereLight skyColor="b1e1ff" groundColor="#000000" intensity={1} />
          

          
          <Sky isRotating={isRotating}/>
          {/** 
          <Island 
            position = {islandPosition}
            scale = {islandScale}
            rotation = {[0.1, 4.7077, 0]}
            
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          />
          */}
          <Lighthouse 
            position = {lighthousePosition}
            scale = {lighthouseScale}
            rotation = {[0, 6.1, 0]}
            
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          />
          <Plane 
            isRotating = {isRotating}
            scale = {planeScale}
            position = {planePosition}
            /**adjust plane rotation */
            rotation = {[0, 20.5, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home