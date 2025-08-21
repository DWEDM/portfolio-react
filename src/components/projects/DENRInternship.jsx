import React from 'react';
import img1 from '../../assets/gallery/blowered.webp'; 
import img2 from '../../assets/gallery/ramdebug.webp'; 

const PawsNClaws = () => {
  return (
    <>
      <section id="DENRInternship" className="hero h-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="max-w-full m-4">
            <h1 className="text-4xl font-bold my-2">Internship | Management Service Division - IT department</h1>
            <p className="mb-5 font-paragraph">
              During my On-the-Job Training (OJT), I was assigned to the Department of Environment and Natural 
              Resources – Provincial Environment and Natural Resources Office Bulacan (DENR-PENRO) as an IT intern. 
              My role was quite all-around, handling both office support and technical tasks.
            </p>
            <p className="mb-5 font-paragraph">
              Most of my responsibilities involved PMS documentation and computer maintenance, covering both hardware 
              and software. I handled routine PC cleaning (thankfully with a blower that made things easier), troubleshooting, 
              and resolving technical issues across the office. The most common problems I worked on were printer malfunctions, 
              power supply and RAM issues, and software-related concerns that sometimes required a full system reformat.
            </p>
            <div className="max-w-full">
              <figure className="px-5 flex flex-col gap-2">
                <img src={img1} alt="image 1" className="rounded-xl shadow-xl w-full max-h-[300px] transition-all hover:max-h-[600px] object-cover" />
                <img src={img2} alt="image 2" className="rounded-xl shadow-xl w-full max-h-[300px] transition-all hover:max-h-[600px] object-cover" />
              </figure>
              <div className="text-xs mb-8 mt-1 items-center text-center text-accent">
                <p>Some pictures of the things I fixed/Maintained</p>
              </div>
            </div>
            <p className="mb-5 font-paragraph">
              One of the biggest challenges came when my immediate supervisor—the sole IT personnel—had to transfer to another 
              branch for medical reasons. For about a month, I was the only IT intern managing the entire office’s tech needs, 
              until another intern from a different department was reassigned to help. This experience pushed me to become more 
              resourceful and confident in my technical abilities, especially in diagnosing and repairing hardware problems.
            </p>
            <p className="mb-5 font-paragraph">
              Overall, my internship gave me hands-on experience in maintaining IT infrastructure and solving real-world 
              technical issues under pressure. It significantly improved my troubleshooting skills and strengthened my 
              confidence in handling IT-related responsibilities independently.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PawsNClaws;