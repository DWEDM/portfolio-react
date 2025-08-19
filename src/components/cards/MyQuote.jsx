import React from 'react';

import StarryNight from '../../assets/StarryNight.jpg';

const MyQuote = () => {
  return (
    <>
        <div 
            className="fade-up-scroll relative w-full mb-32 rounded-lg overflow-hidden min-h-[500px] flex items-center justify-center"
            style={{
                backgroundImage: `url(${StarryNight})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            >
            <div 
                style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(30, 27, 75, 0.4)' // indigo-900 with 40% opacity
                }}
            ></div>
            
            <div className='fade-up-scroll mx-auto relative z-10 p-8 text-center text-white'>    
                <figure className="max-w-screen-md text-center">
                    <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                    </svg>
                    <blockquote>
                        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                            "I am always doing what I cannot do yet, in order to learn how to do it."
                        </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                            <cite className="pe-3 font-medium text-gray-900 dark:text-white">Vincent van Gogh</cite>
                            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                                The Letters of Vincent van Gogh
                            </cite>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    </>
  );
};

export default MyQuote;