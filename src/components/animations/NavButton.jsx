import React from 'react';
import { Link } from 'react-router-dom';


const Navbutton = ({ theme, setTheme }) => {
  return (
    <>
        <div className="flex items-center justify-center h-screen">
          <div className="relative group p-auto">
            <Link to="/" className="btn inline-block relative p-px font-semibold leading-6 text-content bg-base-300 shadow-2xl cursor-pointer rounded-xl shadow-base-300 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl bg-[#FFCC00] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10 block px-6 py-3 rounded-xl bg-base-300">
                    <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">wyane.dev</span>
                    <svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fillRule="evenodd"></path>
                    </svg>
                    </div>
                </span>
            </Link>
          </div>
        </div>
    </>
  );
};

export default Navbutton;