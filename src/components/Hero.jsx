import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="hero h-[80vh] border-2 border-accent rounded-2xl">
        <div className="hero-content text-left">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold font-heading">Hi! My name is Denver Dela Masa.</h1>
            <p className="mb-5 font-paragraph">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary font-ui">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;