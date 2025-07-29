import React from 'react';
import capscr1 from '../../assets/gallery/capscr1.webp'; 
import capscr2 from '../../assets/gallery/capscr2.webp'; 
import { useEffect } from 'react';

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
      <section id="Experience" className="flex flex-col h-auto bg-noise">
        <div className='w-auto max-w-5xl md:w-full h-auto py-4 my-6 mx-auto '>
            <h1 className="text-5xl font-bold my-2">This page is currently under construction</h1>
              <div className="bg-base-200 m-auto p-4 h-auto rounded-xl shadow-xl flex flex-col space-y-full">
<div className="terminal-loader h-[60vh]">
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
                  <div className="text-xs text-content m-4">
                      Made by jeremyssocial - <a href="https://www.uiverse.io" target="_blank" className="underline">uiverse.io</a> | Modified by me
                  </div>
              </div>
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

*/}