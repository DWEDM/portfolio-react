import { useState, useEffect } from 'react';
import './App.css';
import { initScrollReveal } from "./utils/scrollReveal";


import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Experience from './components/pages/Experience';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';

import { BrowserRouter, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // THEME STATE LIFTED HERE
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "nord");

  // Apply theme globally whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    initScrollReveal();
  }, [theme]);

  // Fade-up observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
          else entry.target.classList.remove('visible');
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-up-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  // Reattatch observer to new fade-up elements
  const location = useLocation();
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-up-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location]); 

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="font-sans bg-noise lg:px-12 px-2 py-2 flex flex-col m-auto">
        <Routes>
          <Route path="/" element={<Home themeName={theme} />} />
          <Route path="/about" element={<About themeName={theme} />} />
          <Route path="/experience" element={<Experience themeName={theme} />} />
          <Route path="/contact" element={<Contact themeName={theme} />} />
          <Route path="/gallery" element={<Gallery themeName={theme} />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;