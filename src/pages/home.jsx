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
    let screenPosition = [0, -170, -250]
    {/**screen position variables for position of the main object [x,y,z] */}
    let rotation = [0, 4.7, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.4, 0.4, 0.4];
    } else {
      screenScale = [0.45, 0.45, 0.45];
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
      screenScale = [1.75, 1.75, 1.75];
      screenPosition = [0 , -3, -3]
    } else {
      screenScale = [4, 4, 4];
      screenPosition = [0, -4.75, -11]
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
          <directionalLight position={[1, 1, 1]} intensity={1} color="#FFDFB0"/>
          <ambientLight  color="#666293" intensity={2.5}/>
          <hemisphereLight  intensity={1} />
          

          {/** */}
          <Sky isRotating={isRotating}/>
 
          <Island 
            position = {islandPosition}
            scale = {islandScale}
            rotation = {[0, 9.8, 0]}
            
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          />
     
         {/** 
         <Lighthouse 
            position = {lighthousePosition}
            scale = {lighthouseScale}
            rotation = {[0, 6.1, 0]}
            
            isRotating = {isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          />
          */}
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