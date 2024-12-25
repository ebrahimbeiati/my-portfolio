// import Globe from "react-globe.gl"
// import Button from "../components/Button"
// import { useState } from "react"



// const About = () => {
//     const [hasCopied, setHasCopied] = useState(false)
//     const handleCopy = () => {
//     navigator.clipboard.writeText("ebrahimbeiaty@gmail.com")
//     setHasCopied(true);
//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//     }
//   return (
//     <section>
//         <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 gap-5 h-full">
//             <div className="col-span-1 xl:row-span-3">
//                 <div className="grid-container">
//                     <img src="assets/grid1.png" alt="about"  className="w-full sm:h-[276px] h-fit object-contain"/>
//                     <div>
//                         <p className="grid-headtext">Hi, I am Ebrahim <span className="waving-hand">👋</span></p>
//                         <p className="grid-subtext">I am a software developer with a passion for building scalable and maintainable software. I have experience in building web applications using React, Node.js, and Express. I am also familiar with cloud services like AWS and Azure. I am always eager to learn new technologies and improve my skills.</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-span-1 xl:row-span-3">
//                 <div className="grid-container">
//                     <img src="assets/grid2.png" alt="about"  className="w-full sm
//                     :h-[276px] h-fit object-contain"/>
//                     <div>
//                         <p className="grid-headtext">Tech Stack</p>
//                         <p className="grid-subtext">I specialise in JavaScript with focus on React and Next.js.</p>
//                     </div>
//             </div>
//             </div>
//             <div className="col-span-1 xl:row-span-3">
//                 <div className="grid-container">
//                     <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
//                     <Globe
//                     width={326}
//                     height={326}
//                     backgroundImageOpacity={0.5}
//                     showAtmosphere
//                     showGraticules
//                     globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//                     bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//                     />
//                     </div>
//                     <div>
//                         <p className="grid-headtext">Where I am</p>
//                         <p className="grid-subtext">I am currently based in the United Kingdom. I am open to remote opportunities.</p>
//                         <Button name="Contact Me" isBeam containerClass=" w-full mt-5" />
//                     </div>
//                 </div>
//             </div>
//             <div className="xl:col-span-3 xl:row-span-3">
//                 <div className="grid-container">
//                     <img src="assets/grid3.png" alt="about"  className="w-full sm:h-[276px] h-fit object-contain"/>
//                     <div>
//                     <p className="grid-headtext">My passion</p>
//                     <p className="grid-subtext">I am passionate about using technology to solve real-world problems and make a positive impact in the world.</p>
//                 </div>
//                 </div>
//             </div>
//             <div className="xl:col-span-3 xl:row-span-3">
//                 <div className="grid-container">
//                     <img src="assets/grid4.png" alt="about"  className="w-full sm:h-[276px] h-fit object-contain"/>
//                     <div>
//                     <p className="grid-subtext text-center">Contact me</p>
//                     <div className="copy-container" onClick={handleCopy}>
//                         <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
//                         <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ebrahimbeiaty@gmail.com</p>
//                         </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default About

import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("ebrahimbeiaty@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="relative bg-gray-900 text-white py-20" id="about">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-80"></div>

      <div className="relative container mx-auto px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6">Discover My World</h1>
          <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Embark on a journey through my expertise, passion, and vision as a software developer dedicated to crafting impactful solutions.
          </p>
        </div>

        {/* Interactive Sections */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Personal Introduction */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="assets/grid1.png"
              alt="About Me"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">Hi, I am Ebrahim 👋</h2>
              <p className="text-gray-300 leading-relaxed">
                Passionate about developing scalable, maintainable web solutions using modern technologies like React, Node.js, and cloud services.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="assets/grid2.png"
              alt="Tech Stack"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
              <p className="text-gray-300 leading-relaxed">
                Specialized in JavaScript frameworks with a focus on React, Next.js, and modern web development practices.
              </p>
            </div>
          </div>

          {/* Globe Visualization */}
          <div className="bg-gray-800 rounded-lg shadow-lg flex flex-col items-center p-6 transition-transform transform hover:scale-105">
            <Globe
              width={280}
              height={280}
              backgroundImageOpacity={0.9}
              showAtmosphere
              showGraticules
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            />
            <h2 className="text-2xl font-bold mt-6 mb-3">Where I Am</h2>
            <p className="text-gray-300 leading-relaxed text-center">
              Based in the United Kingdom, open to global opportunities that spark creativity and innovation.
            </p>
          </div>

          {/* Passion Section */}
          <div className="lg:col-span-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="assets/grid3.png"
              alt="My Passion"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">My Passion</h2>
              <p className="text-gray-300 leading-relaxed">
                I am driven by the challenge of using technology to solve complex problems and make a tangible difference in people's lives.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3 bg-gray-800 rounded-lg shadow-lg p-8 text-center transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Whether it’s for collaboration, projects, or sharing ideas, feel free to reach out.
            </p>
            <div
              className="inline-flex items-center gap-3 cursor-pointer"
              onClick={handleCopy}
            >
              <img
                src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                alt="copy"
                className="w-6 h-6"
              />
              <p className="text-lg font-medium">ebrahimbeiaty@gmail.com</p>
            </div>
            {hasCopied && (
              <p className="text-green-500 mt-2">Email copied to clipboard!</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
