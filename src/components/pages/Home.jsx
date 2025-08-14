import React from 'react';

import WorkedWithCards from '../cards/WorkedWithCards';
import CurrentlyWorkingCards from '../cards/CurrentlyWorkingCards';
import HomeAnimation from '../animations/HomeAnimation';
import BaybayinAnimation from '../animations/BaybayinAnimation';
import GitHubStats from '../GitHubStats';

const Home = ({ themeName }) => {
  return (
    <>
        <section id="Home" className="hero mx-auto  min-h-screen flex flex-col gap-y-12">
            <div className="hero-content flex-col-reverse lg:gap-x-2 lg:flex-row">
                <div className="w-auto">
                    <h1 className="text-6xl font-bold fade-up-scroll">Technical, Creative, & Methodical.</h1>
                    <p className="py-6 fade-up-scroll">
                        Hi, I’m <strong>Denver Dela Masa</strong>. I do graphic design, art illustrations, 
                        and front-end development, but I’m mostly into computer hardware support and fixing tech stuff.
                        Always down to learn new things and collaborate with people who love creating cool things too.
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <a href="https://github.com/denverdelamasa" target="_blank" className="fade-up-scroll badge badge-soft badge-primary hover:cursor-pointer hover:underline hover:scale-105 duration-200">
                        <i className="bi bi-github"></i>
                        Github
                    </a>
                    <a href="https://instagram.com/wanedanvers" target="_blank" className="fade-up-scroll badge badge-soft badge-primary hover:cursor-pointer hover:underline hover:scale-105 duration-200">
                        <i className="bi bi-instagram"></i>
                        Instagram
                    </a>
                    <a href="https://linkedin.com/in/denverdelamasa" target="_blank" className="fade-up-scroll badge badge-soft badge-primary hover:cursor-pointer hover:underline hover:scale-105 duration-200">
                        <i className="bi bi-linkedin"></i>
                        LinkedIn
                    </a>
                    <a href="mailto:denver.delamasa@gmail.com" target="_blank" className="fade-up-scroll badge badge-soft badge-primary hover:cursor-pointer hover:underline hover:scale-105 duration-200">
                        <i className="bi bi-envelope-at-fill"></i>
                        Email
                    </a>
                    </div>
                </div>
                <div className="w-auto lg:w-xl h-auto p-0 m-auto fade-up-scroll">
                    <BaybayinAnimation />
                </div>
            </div>
            <div className="w-[85vw] xl:w-auto">
                <GitHubStats themeName={themeName} />   
            </div>
            <div id="" className="hero-content h-auto w-full justify-start">
                <div className="flex flex-col gap-y-12">
                    <div className='fade-up-scroll'>
                        <h1 className="text-4xl font-bold mb-2">What I’ve Worked On:</h1>
                        <p className="text-base-content mb-7 text-md">
                            A showcase of the projects and experiences that shaped me...
                        </p>
                        <div className="w-full h-auto flex-wrap flex gap-8">
                            <WorkedWithCards/>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className='fade-up-scroll'>
                        <h1 className="text-4xl font-bold mb-2">What I'm currently up to:</h1>
                        <p className="text-base-content mb-7 text-md">
                            Things I am currently working on to improve my current knowledge...
                        </p>
                        <div className="w-full h-auto flex-col flex gap-2 px-12">
                            <CurrentlyWorkingCards/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Home;