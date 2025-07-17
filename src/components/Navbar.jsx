import React from 'react';
import avatarImg from '../assets/avatar.jpg'; // (unused? optional)
import ThemeToggle from './ThemeToggle';

const Navbar = ({ setActivePage, theme, setTheme }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm h-24">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box gap-y-2 z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => setActivePage("About")}>
                <i className="bi bi-person-lines-fill" />
                About Me
              </a>
            </li>
            <li>
              <a onClick={() => setActivePage("Experience")}>
                <i className="bi bi-hdd-network" />
                Experience
              </a>
            </li>
            <li>
              <a onClick={() => setActivePage("Contact")}>
                <i className="bi bi-telephone-inbound-fill" />
                Contact
              </a>
            </li>
            <li>
              <a onClick={() => setActivePage("Gallery")}>
                <i className="bi bi-collection" />
                My Gallery
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" onClick={() => setActivePage("Home")}>
          DWEDM.dev
        </a>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-x-2">
          <li>
            <a onClick={() => setActivePage("About")}>
              <i className="bi bi-person-lines-fill" />
              About Me
            </a>
          </li>
          <li>
            <a onClick={() => setActivePage("Experience")}>
              <i className="bi bi-hdd-network" />
              Experience
            </a>
          </li>
          <li>
            <a onClick={() => setActivePage("Contact")}>
              <i className="bi bi-telephone-inbound-fill" />
              Contact
            </a>
          </li>
          <li>
            <a onClick={() => setActivePage("Gallery")}>
              <i className="bi bi-collection" />
              My Gallery
            </a>
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