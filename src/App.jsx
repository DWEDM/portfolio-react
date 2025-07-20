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

function App() {
  // THEME STATE LIFTED HERE
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "nord");

  // Apply theme globally whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    initScrollReveal();
  }, [theme]);

  // Page state
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home themeName={theme} />;  // pass theme down
      case "About":
        return <About setActivePage={setActivePage} />;
      case "Experience":
        return <Experience />;
      case "Contact":
        return <Contact />;
      case "Gallery":
        return <Gallery />;
      default:
        return <Home themeName={theme} />;
    }
  };

  // Fade-up observer (unchanged)
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
  }, [activePage]);

  return (
    <>
      <Navbar setActivePage={setActivePage} theme={theme} setTheme={setTheme} />
      <div className="font-sans bg-noise lg:px-12 px-2 py-2 flex flex-col m-auto">
        {renderPage()}
      </div>
      <Footer />
    </>
  );
}

export default App;