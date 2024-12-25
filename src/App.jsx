import About from "./section/About"
import Clients from "./section/Clients"
import Hero from "./section/Hero"
import Navbar from "./section/Navbar"
import Projects from "./section/Projects"
import Contact from "./section/Contact"
import Footer from "./section/Footer"

export const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
   <Navbar/>
   <Hero/>
   <About/>
   <Projects/>
   <Clients/>
   <Contact/>
   <Footer/>
   </main>
  )
}