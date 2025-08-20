import React from 'react';
import { Link } from 'react-router-dom';

import ProfileCard from '../cards/ProfileCard';
import AboutHero from '../cards/AboutHero';

import sampleart from '../../assets/gallery/art/9.webp';

import AboutProgramList from '../cards/AboutProgramList';

const About = ({ setActivePage }) => {
  return (
    <>
    <section id="About" className="hero h-auto  pt-12">
      <div className="hero-content text-left flex flex-col items-start">
        <div className="flex flex-col lg:flex-row gap-x-2"> 
          <div className="flex flex-col pr-0 lg:pr-16 gap-y-2 order-2 lg:order-1">
            <AboutHero />
            <div className="my-2">
              <h1 className="text-3xl font-bold fade-up-scroll">About Me</h1>
              <p className="mb-5 font-paragraph fade-up-scroll">
                My skills are mainly hardware maintenance, PC repairs, and troubleshooting. Diagnosing 
                and restoring malfunctioning hardware not only challenges me, but also gives me a sense 
                of fulfillment especially when I see systems brought back to life.
              </p>
              <div className="card card-body  border-2 my-4 border-accent shadow-2xl fade-up-scroll">
                To me, learning is a privilege. It gives us the opportunity to grow, to adapt, 
                and to overcome the challenges that shapes our very being.
              </div>
              <p className="mb-5 font-paragraph fade-up-scroll">
                Aside from that, my skills are also consisted with Art and Design, Mainly Illustration.
                I also do coding, specifically front-end web development, hence this web portfolio...
              </p>
              <Link to="/gallery">
                <button className="btn btn-primary fade-up-scroll">
                  <i className="bi bi-collection"></i>
                  My Gallery
                </button>
              </Link>
            </div>
            <div className="divider-default"></div>
            <div className="flex flex-col max-w-full">
                <div className="my-4">
                  <h1 className="text-3xl font-bold mt-12 mb-4 fade-up-scroll">What keeps me busy beyond coding?</h1>
                  <p className="mb-5 font-paragraph fade-up-scroll">
                      When I'm not coding, I do a mix of creative and community activities. 
                      I spend some of my free time doing digital art, mainly character illustrations mainly 
                      for fun and to study a little bit of Art theory. I can also say that music plays a big part of my life,
                      I play a little bit of guitar, and bass. But my main instrument is Drums. I am a member of our church's PAW team,
                      and yes, I am a drummer.  
                  </p>
                  <div className="my-12 flex-wrap flex text-content">
                    <img src={sampleart} alt="sample art from my insta" className='w-full h-auto max-h-[400px] object-cover' />
                    <p className="text-xs text-accent"></p>
                  </div>
                  <p className="mb-5 font-paragraph fade-up-scroll">
                    I also enjoy playing video games, mainly League of Legends, but I found myself enjoying a 
                    little bit of indie games like stardew valley, and blasphemous, games that have a really challenging mechanics, 
                    and also a good story/lore.
                  </p>
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
                      <strong>People & Communication:</strong> I’m good at building genuine connections and working well with people, sharing ideas in a way that clicks, and teaming up with all kinds of groups. I always try to keep a positive, professional vibe no matter what.
                    </li>
                    <li>
                      <strong>Calm, Patient & Quick Learner:</strong> I’m a fast learner who stays patient and calm, even when things get tricky. I like taking my time to think things through and adapt, rather than rushing. When challenges pop up, I stay steady, figure out what needs to be done, and keep moving forward.
                    </li>
                    <li>
                      <strong>Committed & Practical:</strong> I’m committed to what I do and take my responsibilities seriously, but I keep things grounded and practical. I focus on what needs to get done and treat it as my role, making sure I deliver without overcomplicating things.
                    </li>
                  </ul>
                </div>
                <div className="my-4 fade-up-scroll">
                  <AboutProgramList />
                </div>

            </div>
          </div>
          <div className="order-1 lg:order-2">
            <ProfileCard/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;