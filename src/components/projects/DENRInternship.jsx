import React from 'react';
import img1 from '../../assets/gallery/blowered.webp'; 
import img2 from '../../assets/gallery/ramdebug.webp'; 

const PawsNClaws = () => {
  return (
    <>
      <div id="DENRInternship" className="hero h-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-full m-4">
            <h1 className="text-3xl font-bold my-2">Internship - Management Service Division - IT department</h1>
            <p className="mb-5 font-paragraph">
            </p>
            <div className="max-w-full">
              <figure className="px-5 flex flex-col gap-2">
                <img src={img1} alt="image 1" className="rounded-xl shadow-xl w-full max-h-[300px] transition-all hover:max-h-[600px] object-cover" />
                <img src={img2} alt="image 2" className="rounded-xl shadow-xl w-full max-h-[300px] transition-all hover:max-h-[600px] object-cover" />
              </figure>
              <div className="text-sm mb-8 mt-1 items-center text-center">
                <p>Some screenshots of the site I worked with</p>
              </div>
            </div>
            <p className="mb-5 font-paragraph"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PawsNClaws;