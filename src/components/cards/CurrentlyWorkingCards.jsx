import React from "react";

import freecodecamp from '../../assets/gallery/freecodecamp-first-activity.webp';
import kodekloud from '../../assets/gallery/KodeKloud-Docker.webp';

const ProjectCards = () => {
    return(
        <>
            <div className="fade-up-scroll py-4 flex lg:flex-row flex-col-reverse gap-4">
                <figure className="md:block md:w-1/2 lg:w-2/5 flex items-center">
                    <img 
                        src={freecodecamp} 
                        alt="DENR PENRO" 
                        className="rounded-xl w-full h-full object-cover"
                    />
                </figure>
                <div className="flex flex-col gap-2 my-auto md:w-1/2 lg:w-3/5">
                    <h2 className="card-title text-2xl">freecodecamp.org | Responsive Web Design</h2>
                    <p className="text-sm mb-2 p-0">Started at July 2025</p>  
                    <p className="text-sm p-0">
                        Currently working on how to further improve my CSS knowledge by revisiting the fundamentals 
                        of creating classic HTML5 website     
                    </p>
                </div>
            </div>
            <div className="divider my-4"></div>
                <div className="fade-up-scroll py-4 flex lg:flex-row flex-col-reverse gap-4">
                    <figure className="md:w-1/2 lg:w-2/5 flex items-center">
                        <img 
                            src={kodekloud} 
                            alt="DENR PENRO" 
                            className="rounded-xl my-auto w-full h-full object-cover"
                        />
                    </figure>
                <div className="flex flex-col gap-2 my-auto md:w-1/2 lg:w-3/5">
                    <h2 className="card-title text-2xl">KodeKloud | Docker Training Course for the Absolute Beginner</h2>
                    <p className="text-sm mb-2 p-0">Started at July 2025</p>  
                    <p className="text-sm p-0">
                        Trying to learn more about DevOps and to understand it's principles out of curiosity starting with Docker. 
                        But I realized how it is important in modern software development and operations teams
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProjectCards;