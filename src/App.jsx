import { useState } from 'react'
import './index.css'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu';
import Home from './components/sections/Home';
import About from './components/sections/About';


function App() {

  const [isLoading, setIsLoading] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoading && <LoadingScreen onComplete = {() => setIsLoading(true)}/>}

      <div className={`min-h-screen transition-opacity duration-700 ${isLoading ? "opacity-100" : "opacity-0"} bg-black`}>

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      </div>
    </>
  )
}

export default App
