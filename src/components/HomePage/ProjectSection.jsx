import React from "react";
import { BiPlus } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { projects } from "./projects";

const ProjectSection = () => {
  return (
    <section className="mt-5 flex flex-wrap justify-center items-center mx-14 cursor-default w-[400px] md:w-[500px]">
      {projects.map((project, index) => {
        return (
          <NavLink to={project.projectLink} target={project.target} key={index}>
            <article className="flex flex-col w-[120px] items-center gap-5 dark:hover:bg-neutral-700 hover:bg-neutral-300 py-3 px-5 rounded-lg cursor-pointer">
              <figure className="p-3 bg-neutral-200 dark:bg-neutral-900 rounded-full">
                <img
                  src={project.projectLogo}
                  alt={project.projectTitle}
                  rel="icon"
                />
              </figure>
              <p className="dark:text-neutral-100 text-neutral-800">
                {project.projectTitle}
              </p>
            </article>
          </NavLink>
        );
      })}
      <NavLink to="#">
        <article className="flex flex-col w-[120px] items-center gap-5 dark:hover:bg-neutral-700 hover:bg-neutral-300 py-3 px-5 rounded-lg cursor-pointer">
          <span className="p-3 bg-neutral-200 dark:bg-neutral-900 rounded-full text-neutral-600 dark:text-neutral-100 text-2xl">
            <BiPlus />
          </span>
          <p className="dark:text-neutral-100 text-neutral-800 whitespace-nowrap">
            Add Shortcut
          </p>
        </article>
      </NavLink>
    </section>
  );
};

export default ProjectSection;
