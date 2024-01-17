import React, {Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls,Preload,useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader"
const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf")
  return (
    <mesh>
     <hemisphereLight intensity={8}
     groundColor="black" />
     
     <pointLight intensity={8} />
     <spotLight 
     position={[4.5,-4.25,1.5]}
     castShadow
     shadow-mapSize={1024}
     />

     <primitive object={computer.scene}
      
      scale={isMobile ? 2.3: 8}
      shadows
      castShadow
      position={isMobile ? [-0.4,-5.6,-2.5]:[18, -15.25, -6.5]}
      rotation={isMobile ?[0,-0.6,0]:[0,0,-0.1]}
     />

    </mesh>
  )
}

const ComputersCanvas = () =>{
  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    
    const mediaQuery= window.matchMedia("(max-width: 700px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange= (e)=>{
      setIsMobile(e.matches)
    }
   
    mediaQuery.addEventListener('change',
    handleMediaQueryChange)

    return ()=>{
      mediaQuery.removeEventListener('change',
      handleMediaQueryChange)
  
    }

  },[])

  return(
    <Canvas
    frameloop='demand'
    shadows
    dpr={[1,2]}
    camera={{position:[10,50,15],fov:55}}
    gl={{preserveDrawingBuffer:true}}
    className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
    <Suspense fallback={<CanvasLoader />}>
    <OrbitControls
    
     enableZoom={false }
    maxPolarAngle={Math.PI/2}
    minPolarAngle={Math.PI/2}
    />
    <Computers isMobile={isMobile} />
    </Suspense>
    <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas