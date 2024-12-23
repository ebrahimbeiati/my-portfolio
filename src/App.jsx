import About from "./section/About"
import Hero from "./section/Hero"
import Navbar from "./section/Navbar"

export const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
   <Navbar/>
   <Hero/>
   <About/>
   </main>
  )
}