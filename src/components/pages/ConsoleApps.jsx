import React from 'react';
import XTerminal from '../../components/XTerminal';

const ConsoleApps = () => {
  return (
    <>
      <section id="Console" className="hero flex flex-col h-auto">
        <div className='hero-content w-full flex flex-col h-auto py-4 my-6 mx-auto'>
            <div className="w-full justify-center text-center">
              <h1 className="text-5xl font-bold my-2 fade-up-scroll">
                  <i class="bi bi-terminal-fill mr-2"></i>
                  Simulated Console
              </h1>
              <p className="fade-up-scroll max-w-prose">
                  here's a dedicated page I decided to make to show old school projects I made 
                  using C and C#... 
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