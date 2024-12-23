import Globe from "react-globe.gl"

const About = () => {
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
                </div>
            </div>
        </div>
    </section>
  )
}

export default About