import  { useState } from 'react'
import { navLinks } from '../constant'

const NavItems =()=>{
  return(
    <ul className='nav-ul'>
      {navLinks.map(({id, href, name})=>(
        <li key={id} className='nav-li'>
          <a href={href} className='nav-li_a'>{name}</a>
        </li>
      ))}
    </ul>
  )
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='fixed top-0 left-0 right-0 z-40 bg-black/90 shadow-md '>
      <div className='max-w-7xl mx-auto '>
        <div className="flex items-center justify-between py-4 max-auto c-space" >
          <a href="/" className="text-neutral-400 hover:text-white font-bold text-xl transition-colors">
Ebrahim
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex' >
            <img src={isOpen ? "assets/close.svg" :"assets/menu.svg"} alt="toggle" className='w-8 h-8' />
          </button>
          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>

        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen': 'max-h-0'} overflow-hidden transition-all duration-300`}>
    <nav className='p-5'>
      <NavItems />
    </nav>
      </div>

    </header>
  )
}

export default Navbar