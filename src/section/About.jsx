import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"



const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
    navigator.clipboard.writeText("ebrahimbeiaty@gmail.com")
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
    }
  return (
    <section>
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid1.png" alt="about"  className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">Hi, I am Ebrahim <span className="waving-hand">👋</span></p>
                        <p className="grid-subtext">I am a software developer with a passion for building scalable and maintainable software. I have experience in building web applications using React, Node.js, and Express. I am also familiar with cloud services like AWS and Azure. I am always eager to learn new technologies and improve my skills.</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid2.png" alt="about"  className="w-full sm
                    :h-[276px] h-fit object-contain"/>
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I specialise in JavaScript with focus on React and Next.js.</p>
                    </div>
            </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                    <Globe
                    width={326}
                    height={326}
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    />
                    </div>
                    <div>
                        <p className="grid-headtext">Where I am</p>
                        <p className="grid-subtext">I am currently based in the United Kingdom. I am open to remote opportunities.</p>
                        <Button name="Contact Me" isBeam containerClass=" w-full mt-5" />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-3 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid3.png" alt="about"  className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                    <p className="grid-headtext">My passion</p>
                    <p className="grid-subtext">I am passionate about using technology to solve real-world problems and make a positive impact in the world.</p>
                </div>
                </div>
            </div>
            <div className="xl:col-span-3 xl:row-span-3">
                <div className="grid-container">
                    <img src="assets/grid4.png" alt="about"  className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                    <p className="grid-subtext text-center">Contact me</p>
                    <div className="copy-container" onClick={handleCopy}>
                        <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ebrahimbeiaty@gmail.com</p>
                        </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About