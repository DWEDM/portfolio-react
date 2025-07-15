import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomeAnimation from './components/cards/HomeAnimation';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="font-sans lg:px-12 px-2 py-2 flex flex-col m-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col min-w-full lg:gap-x-4 lg:flex-row-reverse">
            <div className="bg-base-200 lg:w-auto h-auto rounded-xl shadow-xl">
              <HomeAnimation/> 
              <div className="text-xs text-accent m-4">
                made by: SelfMadeSystem - <a href="https://www.uiverse.io" className="underline">uiverse.io</a> 
              </div>
            </div>
            <div className="w-auto">
              <h1 className="text-6xl font-bold">Technical, Creative, & Methodical.</h1>
              <p className="py-6">
                Hi, I’m <strong>Denver Dela Masa</strong>. I do graphic design, art illustrations, 
                and front-end development, but I’m mostly into computer hardware support and fixing tech stuff.
                Always down to learn new things and collaborate with people who love creating cool things too.
              </p>
              <div href="https://github.com/DWEDM" className="flex flex-wrap gap-x-4">
                <a className="badge badge-soft badge-primary hover:cursor-pointer hover:underline hover:scale-105 duration-200">
                  <i className="bi bi-github"></i>
                  Github
                </a>
                <a href="https://instagram.com/wanedanvers" className="badge badge-soft badge-primary hover:cursor-pointer hover:underline hover:scale-105 duration-200">
                  <i className="bi bi-instagram"></i>
                  Instagram
                </a>
                <a href="https://linkedin.com/in/denverdelamasa" className="badge badge-soft badge-primary hover:cursor-pointer hover:underline hover:scale-105 duration-200">
                  <i className="bi bi-linkedin"></i>
                  LinkedIn
                </a>
                <a href="mailto:denver.delamasa@gmail.com" className="badge badge-soft badge-primary hover:cursor-pointer hover:underline hover:scale-105 duration-200">
                  <i className="bi bi-envelope-at-fill"></i>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App

