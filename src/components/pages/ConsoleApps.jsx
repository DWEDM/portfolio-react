import React from 'react';
import XTerminal from '../../components/XTerminal';

const ConsoleApps = () => {
  return (
    <>
      <section id="Experience" className="hero flex flex-col h-auto ">
        <div className='hero-content flex flex-col w-auto max-w-5xl md:w-full h-auto py-4 my-6 mx-auto '>
            <h1 className="text-5xl font-bold my-2">
              This page is currently under construction
            </h1>
            <div className="bg-base-200 max-w-[89vw] sm:max-w-full sm:w-full m-auto py-4 px-2 h-auto rounded-xl shadow-xl flex flex-col space-y-full transition-all duration-200 ease-in-out">
<div className="terminal-loader h-[60vh] w-full">
<div className="terminal-header">
  <div className="terminal-title">Status</div>
  <div className="terminal-controls flex items-center">
    <div className="control close"></div>
    <div className="control minimize"></div>
    <div className="control maximize"></div>
  </div>
</div>

<div className="terminal-text">
  <p className="type-line delay-0">{`<div className="text">`}</p>
  <p className="type-line delay-1">{`  <h1>My Experiences</h1>`}</p>
  <p className="type-line delay-2">{`  <p>`}</p>
  <p className="type-line delay-3">{`    During my college thesis project, I worked on a site called ...`}</p>
  <p className="type-line delay-4">{`    I focused on front-end design, UI functionality, and research...`}</p>
  <p className="type-line delay-5">{`  </p>`}</p>
  <p className="type-line delay-6">{`  <button>Learn More</button>`}</p>
  <p className="type-line delay-7">{`</div>`}</p>
</div>
</div>
                <div className="text-xs text-content m-4">
                    Made by jeremyssocial - <a href="https://www.uiverse.io" target="_blank" className="underline">uiverse.io</a> | Modified by me
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default ConsoleApps;