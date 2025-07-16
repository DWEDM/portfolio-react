import React from 'react';

import ProfileCard from '../cards/ProfileCard';
import AboutHero from '../cards/AboutHero';

const About = ({ setActivePage }) => {
  return (
    <>
    <section id="About" className="hero h-auto">
      <div className="hero-content text-left flex flex-col">
        <div className="flex flex-col lg:flex-row gap-x-8"> 
          <div className="order-1 lg:order-2">
            <ProfileCard/>
          </div>
          <div className="flex flex-col gap-y-2 order-2 lg:order-1">
            <AboutHero />
            <div className="my-4">
              <h1 className="text-3xl font-bold mt-12 fade-up-scroll">About Me</h1>
              <p className="mb-5 font-paragraph fade-up-scroll">
                My skills are mainly hardware maintenance, PC repairs, and troubleshooting. Diagnosing 
                and restoring malfunctioning hardware not only challenges me, but also gives me a sense 
                of fulfillment especially when I see systems brought back to life.
              </p>
              <div className="card card-body bg-base-200 border-2 my-4 border-accent shadow-2xl fade-up-scroll">
                To me, learning is a privilege. It gives us the opportunity to grow, to adapt, 
                and to overcome the challenges that shapes our very being.
              </div>
              <p className="mb-5 font-paragraph fade-up-scroll">
                Aside from that, my skills are also consisted with Art and Design, Mainly Illustration.
                I also do coding, specifically front-end web development, hence this web portfolio...
              </p>
              <a onClick={() => setActivePage("Gallery")}>
                <button className="btn btn-primary fade-up-scroll">
                  <i className="bi bi-collection"></i>
                  My Gallery
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    </div>
  </div>
  <Contact />
  
*/}