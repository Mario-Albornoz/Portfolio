import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'

const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
  const rotationSpeed = useRef(0);
  
  useFrame((_, delta) => {
    if(isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    } else {
      rotationSpeed.current *= 0.95;
    }
  })

  return (
  <mesh ref ={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky