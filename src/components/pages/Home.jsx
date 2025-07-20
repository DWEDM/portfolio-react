import React from 'react';

import ProjectCards from '../cards/ProjectCards';
import HomeAnimation from '../cards/HomeAnimation';
import GitHubStats from '../GitHubStats';

const Home = ({ themeName }) => {
  return (
    <>
        <section id="Home" className="hero bg-noise min-h-screen flex flex-col gap-y-12">
            <div className="hero-content flex-col min-w-full lg:gap-x-4 lg:flex-row-reverse">
                <div className="bg-base-200 w-auto lg:w-xl h-auto rounded-xl shadow-xl fade-up-scroll">
                    <HomeAnimation/> 
                    <div className="text-xs text-content m-4">
                        Made by: SelfMadeSystem - <a href="https://www.uiverse.io" className="underline">uiverse.io</a> | modified by me :D
                    </div>
                </div>
                <div className="w-auto">
                    <h1 className="text-6xl font-bold fade-up-scroll">Technical, Creative, & Methodical.</h1>
                    <p className="py-6 fade-up-scroll">
                    Hi, I’m <strong>Denver Dela Masa</strong>. I do graphic design, art illustrations, 
                    and front-end development, but I’m mostly into computer hardware support and fixing tech stuff.
                    Always down to learn new things and collaborate with people who love creating cool things too.
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <a href="https://github.com/DWEDM" className="fade-up-scroll badge badge-soft badge-primary hover:cursor-pointer hover:underline hover:scale-105 duration-200">
                        <i className="bi bi-github"></i>
                        Github
                    </a>
                    <a href="https://instagram.com/wanedanvers" className="fade-up-scroll badge badge-soft badge-primary hover:cursor-pointer hover:underline hover:scale-105 duration-200">
                        <i className="bi bi-instagram"></i>
                        Instagram
                    </a>
                    <a href="https://linkedin.com/in/denverdelamasa" className="fade-up-scroll badge badge-soft badge-primary hover:cursor-pointer hover:underline hover:scale-105 duration-200">
                        <i className="bi bi-linkedin"></i>
                        LinkedIn
                    </a>
                    <a href="mailto:denver.delamasa@gmail.com" className="fade-up-scroll badge badge-soft badge-primary hover:cursor-pointer hover:underline hover:scale-105 duration-200">
                        <i className="bi bi-envelope-at-fill"></i>
                        Email
                    </a>
                    </div>
                </div>
            </div>
            <div id="" className="p-2 lg:p-4 h-auto w-full justify-start">
                <GitHubStats themeName={themeName} />
            </div>
            <div className='divide-accent'></div>
            <div id="" className="hero-content h-auto w-full justify-start">
                <div className="flex-col lg:flex-row-reverse">
                    <h1 className="text-4xl font-bold my-4 fade-up-scroll">So far, I've been a part of:</h1>
                    <div className="w-full h-auto flex-wrap flex gap-8">
                        <ProjectCards/>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Home;