import React from 'react';
import profileImg from '../assets/profile.jpg'; // adjust path if needed

const ProfileCard = () => {
  return (
    <>
      <div className="card bg-base-100 max-w-100 lg:w-100 shadow-sm mx-auto lg:mx-2 px-6">
          <figure className="">
              <img src={profileImg} alt="Graduation Pic (I like this pic I look like I'm content in life...)" className="rounded-xl" />
          </figure>
          <div className="card-body items-left text-left px-0 text-neutral-content">
            <div className="card-actions flex gap-2">
              <button className="btn btn-primary flex-1">
                Resume
              </button>
              <button className="btn btn-primary">
                Download
              </button>
            </div>
            <ul className="list list-col-wrap gap-y-2 mt-4">
              <li>
                <a href="mailto:denver.delamasa@gmail.com" className="link link-hover">
                  denver.delamasa@gmail.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/denverdelamasa" target="_blank" rel="noopener noreferrer" className="link link-hover">
                  linkedin.com/in/denverdelamasa
                </a>
              </li>
              <li>
                <a href="https://instagram.com/wanedanvers" target="_blank" rel="noopener noreferrer" className="link link-hover">
                  instagram.com/wanedanvers
                </a>
              </li>
            </ul>
          </div>
      </div>
    </>
  );
};

export default ProfileCard;