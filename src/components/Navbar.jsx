import React from 'react';
import avatarImg from '../assets/avatar.jpg'; // adjust path if needed

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">DWEDM.dev</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li><a href="#About">About Me</a></li>
            <li><a href="#Experience">Experience</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Gallery">My Gallery</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="w-8 rounded-full overflow-hidden">
          <img
            alt="Avatar"
            src={avatarImg}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;