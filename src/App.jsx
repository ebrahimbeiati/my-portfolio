import About from "./section/About"
import Hero from "./section/Hero"
import Navbar from "./section/Navbar"
import Projects from "./section/Projects"

export const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
   <Navbar/>
   <Hero/>
   <About/>
   <Projects/>
   </main>
  )
}