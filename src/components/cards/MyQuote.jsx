import React from 'react';

const MyQuote = () => {
  return (
    <>
        <figure class="max-w-screen-md text-center">
            <svg class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
            </svg>
            <blockquote>
                <p class="text-2xl italic font-medium text-gray-900 dark:text-white">
                    "I am always doing what I cannot do yet, in order to learn how to do it."
                </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite class="pe-3 font-medium text-gray-900 dark:text-white">Vincent van Gogh</cite>
                    <cite class="ps-3 text-sm text-gray-500 dark:text-gray-400">
                        The Letters of Vincent van Gogh
                    </cite>
                </div>
            </figcaption>
        </figure>
    </>
  );
};

export default MyQuote;