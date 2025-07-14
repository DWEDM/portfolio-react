import React from 'react';
import profileImg from '../assets/profile.jpg'; // adjust path if needed

const ProfileCard = () => {
  return (
    <>
      <div className="card bg-base-100 max-w-150 lg:w-120 shadow-sm mx-auto lg:mx-2 px-6">
          <figure className="">
              <img src={profileImg} alt="Graduation Pic (I like this pic I look like I'm content in life...)" className="rounded-xl" />
          </figure>
          <div className="card-body items-left text-left px-0 text-neutral-content">
            <div className="card-actions flex gap-2">
              <button className="btn btn-primary flex-1 gap-x-2">
                <i className="bi bi-file-earmark-post"></i>
                Resume
              </button>
              <button className="btn btn-primary gap-x-2">
                <i className="bi bi-download"></i>
                Download
              </button>
            </div>
            <ul className="list list-col-wrap gap-y-2 mt-4">
              <li>
                <a href="mailto:denver.delamasa@gmail.com" className="link link-hover flex gap-x-2">
                  <i className="bi bi-envelope-at-fill"></i>
                  denver.delamasa@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/DWEDM" className="link link-hover flex gap-x-2">
                  <i class="bi bi-github"></i>
                  wyane(DWEDM)
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/denverdelamasa" target="_blank" rel="noopener noreferrer" className="link link-hover flex gap-x-2">
                  <i className="bi bi-linkedin"></i>
                  linkedin.com/in/denverdelamasa
                </a>
              </li>
              <li>
                <a href="https://instagram.com/wanedanvers" target="_blank" rel="noopener noreferrer" className="link link-hover flex gap-x-2">
                  <i className="bi bi-instagram"></i>
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