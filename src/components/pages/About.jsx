import React from 'react';

const About = () => {
  return (
    <>
    <div id="About" className="hero h-auto">
      <div className="hero-content text-left">
          <div className="max-w-full m-4">
            <h1 className="text-3xl font-bold my-2">About Me</h1>
            <div className="card card-body bg-base-200 border-2 my-4 border-accent shadow-2xl">
                To me, learning is a privilege. It gives us the opportunity to grow, to adapt, 
                and to overcome the challenges that shapes our very being.
            </div>
            <p className="mb-5 font-paragraph">
              My skills are mainly hardware maintenance, PC repairs, and troubleshooting. Diagnosing 
              and restoring malfunctioning hardware not only challenges me, but also gives me a sense 
              of fulfillment especially when I see systems brought back to life.
              <br/>
              <br/>
              Aside from that, my skills are also consisted with Art and Design, Mainly Illustration.
              I also do coding, specifically front-end web development, hence this web portfolio...
            </p>
            <button className="btn btn-primary">
                <i className="bi bi-collection"></i>
              My Gallery
            </button>
          </div>
      </div>
    </div>
    </>
  );
};

export default About;
{/* 

  <div className="flex flex-col lg:flex-row gap-x-8"> 
    <div className="order-1 lg:order-2">
      <ProfileCard/>
    </div>
    <div className="flex flex-col gap-y-2 order-2 lg:order-1">
      <Hero />
      <About />
      <Experience />
    </div>
  </div>
  <Contact />
  
*/}