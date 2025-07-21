import React from 'react';

import ProfileCard from '../cards/ProfileCard';
import AboutHero from '../cards/AboutHero';

import ImageVCS from '../../assets/gallery/vcs.jpg';
import ImageDrumming from '../../assets/gallery/drumming.jpg';

const About = ({ setActivePage }) => {
  return (
    <>
    <section id="About" className="hero h-auto bg-noise pt-12">
      <div className="hero-content text-left flex flex-col items-start">
        <div className="flex flex-col lg:flex-row gap-x-8"> 
          <div className="flex flex-col gap-y-2 order-2 lg:order-2">
            <AboutHero />
            <div className="my-2">
              <h1 className="text-3xl font-bold fade-up-scroll">About Me</h1>
              <p className="mb-5 font-paragraph fade-up-scroll">
                My skills are mainly hardware maintenance, PC repairs, and troubleshooting. Diagnosing 
                and restoring malfunctioning hardware not only challenges me, but also gives me a sense 
                of fulfillment especially when I see systems brought back to life.
              </p>
              <div className="card card-body bg-base-100 border-2 my-4 border-accent shadow-2xl fade-up-scroll">
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
          <div className="order-1 lg:order-1">
            <ProfileCard/>
          </div>
        </div>
        <div className="divider-default"></div>
        <div className="flex flex-col w-2xl">
            <div className="my-4">
              <h1 className="text-3xl font-bold mt-12 mb-2 fade-up-scroll">What keeps me busy beyond coding?</h1>
              <p className="mb-5 font-paragraph fade-up-scroll">
                On weekends, I’m actively involved in my local church, Bethany United Methodist Church. 
                I play the drums for the Praise and Worship team and also help out as part of the technical staff. 
              </p>
              <div className="my-12 flex-wrap flex text-accent">
                <img src={ImageDrumming} alt="picture of me playing Drums" />
                <p className="m-auto p-2 text-xs">Photo taken at April 16, 2025</p>
              </div>
              <p className="mb-5 font-paragraph fade-up-scroll">
                I’ve also taken part in church activities like teaching at Vacation Church School and supporting 
                yearly city district events, such as the East Bulacan District Christmas Institute, where I serve 
                as technical staff.
              </p>
              <div className="my-12 flex-wrap flex text-accent">
                <img src={ImageVCS} alt="picture of me operating the mixer console" />
                <p className="m-auto p-2 text-xs">Photo taken at July 20, 2023</p>
              </div>
            </div>
            <div className="my-4">
              <h2 className="text-4xl font-bold mt-12 mb-4 fade-up-scroll">
                My Soft Skills
              </h2>
              <p className="mb-6 text-base font-paragraph text-content fade-up-scroll">
                A few skills I believe are worth highlighting:
              </p>
              <ul className="list-disc list-inside space-y-2 fade-up-scroll">
                <li>
                  <strong>Interpersonal Skills:</strong> ability to build strong connections
                  and work well with others.
                </li>
                <li>
                  <strong>Communication Skills:</strong> effective in conveying ideas and
                  collaborating with teams.
                </li>
                <li>
                  <strong>Team Collaboration:</strong> easily connects and works with
                  diverse groups.
                </li>
                <li>
                  <strong>Adaptability:</strong> quick to learn from challenges and adjust
                  to new situations.
                </li>
                <li>
                  <strong>Positive Attitude:</strong> maintains an optimistic and
                  professional approach.
                </li>
                <li>
                  <strong>Resilience & Stress Management:</strong> thrives and performs well
                  under pressure.
                </li>
              </ul>
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