import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="hero h-auto border-2 border-accent rounded-2xl fade-up-scroll">
        <div className="hero-content text-left">
          <div className="max-w-full m-4">
            <h1 className="mb-5 text-5xl font-bold font-heading">Hellow! My name is Denver Dela Masa.</h1>
            <p className="mb-5 font-paragraph">
              I consider myself Technical, methodical, and adaptable. Especially when working with technical problems 
              or unfamiliar tools. I am also the type of person who learns best by doing, and I take the time 
              to understand how things work instead of rushing through tasks. I may not know everything right away, 
              but I’m committed to learning and improving through hands-on experience and steady effort.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;