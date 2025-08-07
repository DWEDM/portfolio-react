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
        <Link className="btn btn-ghost text-xl" to="/">
          wyane.dev
        </Link>
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