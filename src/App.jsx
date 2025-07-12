import { useState } from 'react'
import './App.css'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Collage from './components/Collage';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="font-sans lg:px-16 px-2 flex flex-col gap-y-4 m-4">
        <div className="flex flex-col lg:flex-row "> 
          <div className="order-1 lg:order-2">
            <ProfileCard/>
          </div>
          <div className="flex flex-col gap-y-2 order-2 lg:order-1">
            <Hero />
            <About />
            <Experience />
          </div>
        </div>
        <Contact />
        <Collage />
      </div>
      <Footer />
    </>
  )
}

export default App

