import { projectsData } from '@/constants';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Projects = () => {
  return (
    <section
      id="projects"
      className="projects text-white  flex flex-col p-2  bg-white/95 py-20 pt-16"
    >
      <div className="mx-auto max-w-screen-2xl">
        <h2 className="text-5xl font-semibold sm:text-left text-center  text-black">
          Our <span className="text-orange-500 font-bold">Projects.</span>
        </h2>
        <div className="sm:w-[6%] w-[35%] h-[4px] bg-orange-500 mb-5 mt-3  sm:mx-0 mx-auto  rounded-full" />

        <div className="flex sm:flex-row flex-col justify-evenly mt-4 gap-4">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex-1 p-4 pb-6 border-4 border-black/10 rounded-2xl hover:border-orange-400 bg-black/90  transition-all"
            >
              <div className="overflow-hidden rounded-xl  mb-4 ">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-58 object-cover transition-all rounded-xl hover:scale-105 select-none "
                  draggable={false}
                  width={500}
                  height={300}
                />
              </div>
              <h3 className="text-2xl font-semibold text-orange-400">
                {project.title}
              </h3>
              <div className="flex w-full items-center justify-between">
                <p className="text-sm opacity-90">{project.description}</p>
              </div>
              <Link
                href={project.link}
                alt={project.title}
                draggable="false"
                target="blank"
                className="w-full text-transparent cursor-default select-none"
              >
                {project.title}

                <button className="btn-secondary !rounded-3xl   select-none w-full">
                  Learn more
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
