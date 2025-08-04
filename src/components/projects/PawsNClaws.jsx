import React from 'react';
import capscr1 from '../assets/gallery/capscr1.webp'; 
import capscr2 from '../assets/gallery/capscr2.webp'; 

const PawsNClaws = () => {
  return (
    <>
      <div id="PawsNClaws" className="hero h-auto border-t-2 border-accent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-full m-4">
            <h1 className="text-3xl font-bold my-2">My Experiences</h1>
            <p className="mb-5 font-paragraph">
               During my college thesis project, I've worked with a website called "Paws'N Claws" 
               along with my 4 colleagues. My role mostly revolved on front-end design, development and UI functionality, 
               and a little bit of researching here and there...
            </p>
            <div className="card  max-w-full shadow-sm">
              <figure className="px-5 flex- flex-col gap-2">
                <img src={capscr1} alt="Screenshot 1" className="rounded-xl shadow-xl hover:scale-110 transition-all duration-200" />
                <img src={capscr2} alt="Screenshot 2" className="rounded-xl shadow-xl hover:scale-110 transition-all duration-200" />
              </figure>
              <div className="text-sm mb-8 mt-1 items-center text-center">
                <p>Some screenshots of the site I worked with</p>
              </div>
            </div>
            <p className="mb-5 font-paragraph">
               This project helped me apply everything I understand on how websites are made, it also helped me 
               apply real world scenario like: how to work as a team, solve technical issues, and meet deadlines I am required to.
               Although the site is no longer hosted, it was a major learning experience that increased my understanding in 
               web development and team collaboration.   
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PawsNClaws;