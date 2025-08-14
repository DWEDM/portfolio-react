import React from 'react';
import XTerminal from '../console/XTerminal';

const ConsoleApps = () => {
  return (
    <>
      <section id="Console" className="hero flex flex-col h-auto w-[90vw] md:w-[70vw]">
        <div className='hero-content w-full flex flex-col h-auto py-4 my-6 mx-auto'>
            <div className="w-full justify-center text-center">
              <h1 className="text-5xl font-bold my-2 fade-up-scroll mx-auto">
                  <i className="bi bi-terminal-fill mr-2"></i>
                  Simulated Console
              </h1>
              <p className="fade-up-scroll max-w-prose mx-auto">
                  This dedicated page showcases my previous school projects originally developed in C and C#, 
                  which I have since recreated in Python.
              </p>
            </div>
            <div className="w-full m-auto py-4 fade-up-scroll">
                <XTerminal />
            </div>
        </div>
      </section>
    </>
  );
};

export default ConsoleApps;