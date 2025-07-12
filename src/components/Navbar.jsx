import React from 'react';
import avatarImg from '../assets/avatar.jpg'; // adjust path if needed

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm justify-between">
        <div className="flex-none">
          <h6 className="btn btn-ghost text-xl" href="#">DWEDM.dev</h6>
        </div>
        <div className="flex-1 flex justify-center">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="w-12 rounded-full overflow-hidden">
          <img
            alt="Avatar"
            src={avatarImg}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;