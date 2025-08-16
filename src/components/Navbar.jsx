import React from 'react';
import ThemeToggle from './ThemeToggle';

import { Link } from 'react-router-dom';


const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="navbar  shadow-sm h-24 lg:px-28 px-8">
      {/* Mobile menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box gap-y-2 z-1 mt-3 w-xs max-w-md p-2 shadow"
          >
            <li className="mb-6 border-b-1 border-accent">
              <Link to="/" class="btn md:hidden inline-block relative p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div class="relative z-10 flex items-center space-x-2">
                    <span class="transition-all duration-500 group-hover:translate-x-1">wyane.dev</span>
                    <svg class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fill-rule="evenodd"></path>
                    </svg>
                  </div>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <i className="bi bi-person-lines-fill" />
                About Me
              </Link>
            </li>
            <li>
              <Link to="/experience">
                <i className="bi bi-hdd-network" />
                Experience
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i className="bi bi-telephone-inbound-fill" />
                Contact
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                <i className="bi bi-collection" />
                My Gallery
              </Link>
            </li>
            <li>
              <Link to="/console-app">
                <i className="bi bi-terminal-fill"></i>
                Console Appications
              </Link>
            </li>
          </ul>
        </div>
<div class="flex items-center justify-center h-screen">
  <div class="relative group">
    <button class="hidden md:inline-block relative p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
      <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
        <div class="relative z-10 flex items-center space-x-2">
          <span class="transition-all duration-500 group-hover:translate-x-1">wyane.dev</span>
          <svg class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" fill-rule="evenodd"></path>
          </svg>
        </div>
      </span>
    </button>
  </div>
</div>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-2">
          <li>
            <Link to="/about">
              <i className="bi bi-person-lines-fill" />
              About Me
            </Link>
          </li>
          <li>
            <Link to="/experience">
              <i className="bi bi-hdd-network" />
              Experience
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="bi bi-telephone-inbound-fill" />
              Contact
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              <i className="bi bi-collection" />
              My Gallery
            </Link>
          </li>
            <li>
              <Link to="/console-app">
                <i className="bi bi-terminal-fill"></i>
                Console Appications
              </Link>
            </li>
        </ul>
      </div>

      {/* Theme toggle */}
      <div className="navbar-end px-2">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default Navbar;