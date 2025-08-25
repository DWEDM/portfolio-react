import React from 'react';
import { useEffect } from 'react';

import PawsNClaws from '../projects/PawsNClaws';
import DENRInternship from '../projects/DENRInternship';

import ExperiencesParallax from '../cards/ExperiencesParallax';
import SEO from "../SEO";

const Experience = () => {
  useEffect(() => {
    const lines = document.querySelectorAll('.type-line');
    const totalDuration = 23000; // total time in ms

    const loopAnimation = () => {
      lines.forEach((line) => {
        line.style.animation = 'none';
        void line.offsetWidth; // trigger reflow
        line.style.animation = '';
      });
    };

    const interval = setInterval(loopAnimation, totalDuration);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <SEO 
      title="Experience | Denver Dela Masa" 
      description="Explore my professional experience in IT support, preventive maintenance, web development, and creative design. Learn how my skills and background can contribute to future projects." 
    />
      <section id="Experience" className="hero flex flex-col m-0 transition-all duration-300">
        <ExperiencesParallax/>
        <div className="px-0 sm:px-4 md:px-18 lg:px-34">
          <PawsNClaws />
            <div className="divider"></div>
          <DENRInternship />
            <div className="divider"></div>
        </div>
      </section>
    </>
  ); 
};

export default Experience;

{/* 

  <h1 className="text-5xl font-bold my-2">My Experiences</h1>
  <p className="mb-5 font-paragraph">
      During my college thesis project, I've worked with a website called "<strong>Paws'N Claws</strong>" 
      along with my 4 colleagues. My role mostly revolved on front-end design, development and UI functionality, 
      and a little bit of researching here and there...
  </p>
  <div className="card-actions">
      <button className="btn btn-primary">
        <i className="bi bi-box-arrow-in-up-right"></i>
        Learn more
      </button>
  </div>
  <div className="terminal-loader h-[60vh] w-full">
  <div className="terminal-header">
    <div className="terminal-title">Status</div>
    <div className="terminal-controls flex items-center">
      <div className="control close"></div>
      <div className="control minimize"></div>
      <div className="control maximize"></div>
    </div>
  </div>

  <div className="terminal-text">
    <p className="type-line delay-0">{`<div className="text">`}</p>
    <p className="type-line delay-1">{`  <h1>My Experiences</h1>`}</p>
    <p className="type-line delay-2">{`  <p>`}</p>
    <p className="type-line delay-3">{`    During my college thesis project, I worked on a site called ...`}</p>
    <p className="type-line delay-4">{`    I focused on front-end design, UI functionality, and research...`}</p>
    <p className="type-line delay-5">{`  </p>`}</p>
    <p className="type-line delay-6">{`  <button>Learn More</button>`}</p>
    <p className="type-line delay-7">{`</div>`}</p>
  </div>
</div>
*/}