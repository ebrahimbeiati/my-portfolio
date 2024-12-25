import { Canvas } from "@react-three/fiber";
import { myProjects } from "../constant"
import { useState } from "react"
import { Center } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import  DemoComputer  from "../components/DemoComputer";
import  CanvasLoader  from "../components/CanvasLoader";



const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const handleNavigation = (direction) => {
            setSelectedProjectIndex((prevIndex) => {
                if (direction === 'prev') {
                    return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
                } else 
                {
                    return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
                }
            })

        };
   const currentProject = myProjects[selectedProjectIndex];
  return (
    <section className="c-space my-20" id="projects">
        <p className="head-text">Projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12 w-full gap-4">
            <div className="flex flex-col gap-5 relative sm:p-9 shadow-2xl shadow-black-200">
                <div className="absolute top-0 right-0">
                <img src={currentProject.spotlight} alt="project" className="w-full h-96 object-cover rounded-xl "/>
                </div>
                <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                    <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm"/>
                </div>
                <div className="flex flex-col gap-4 text-white-600 my-5">
                    <h2 className="text-wite text-2xl font-semibold animatedText">{currentProject.title}</h2>
                    <p className="animatedText">{currentProject.desc}</p>
                    <p className="animatedText">{currentProject.subdesc}</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        {currentProject.tags.map((tag, index) => (
                            <div key={index} className="tech-logo"><img src={tag.path} alt="tag" />
                            </div>
                        ))}
                    </div>
                    <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
<p>Check live site</p>
<img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
                    </a>
                </div>
                <div className="flex justify-between items-center gap-4 mt-5">
                    <button className="arrow-btn" onClick={()=>handleNavigation('prev')}>
                        <img src="/assets/left-arrow.png" alt="arrow" className="w-3 h-3" />
                    </button>
                    <button className="arrow-btn" onClick={()=>handleNavigation('next')}>
                        <img src="/assets/right-arrow.png" alt="arrow" className="w-3 h-3" />
                    </button>

                </div>

            </div>
            <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
            <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
            </div>
            </div>

    </section>
  )
}

export default Projects