import React from 'react';
import capscr1 from '../../assets/gallery/capscr1.webp'; 
import capscr2 from '../../assets/gallery/capscr2.webp'; 

const Experience = () => {
  return (
    <>
      <section id="Experience" className="flex flex-col h-auto bg-noise">
        <div className='w-auto md:w-xl h-auto py-4 my-6 '>
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
        </div>
      </section>
    </>
  );
};

export default Experience;