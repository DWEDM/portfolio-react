import React from 'react';
import capscr1 from '../assets/gallery/capscr1.png'; 
import capscr2 from '../assets/gallery/capscr2.png'; 

const Experience = () => {
  return (
    <>
      <div id="Experience" className="hero h-auto border-t-2 border-accent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-full m-4">
            <h1 className="text-3xl font-bold my-2">My Experiences</h1>
            <p className="mb-5 font-paragraph">
               During my college thesis project, I've worked with a website called "<strong>Paws'N Claws</strong>" 
               along with my 4 colleagues. My role mostly revolved on front-end design, development and UI functionality, 
               and a little bit of researching here and there...
            </p>
            <div className="card-actions">
                <button className="btn btn-primary">
                  <i class="bi bi-box-arrow-in-up-right"></i>
                  Learn more
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;