import React from 'react';

const Collage = () => {
  return (
    <>
        <div className='w-auto md:w-xl h-auto py-4 my-6'>
          <h1 className='fade-up-scroll text-5xl font-bold'>My Gallery</h1>
          <p className='fade-up-scroll'>
            Here’s a bunch of photos that pretty much sum me up—my work, my hobbies, 
            and the stuff I enjoy doing. No fancy order, just moments that show what I’m about.
          </p>
        </div>
      <section id="Gallery" className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
        <div className="fade-up-scroll card shadow-md">
          <figure><img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" className="rounded-lg" /></figure>
        </div>
      </section>
    </>
  );
};

export default Collage;