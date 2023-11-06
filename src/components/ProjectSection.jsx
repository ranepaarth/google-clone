import React from "react";
import { NavLink } from "react-router-dom";
import Techiekart from "../assets/ecommerce-online-shopping-svgrepo-com.svg";
import Github from "../assets/github-142-svgrepo-com.svg";
import TechieTube from "../assets/youtube-icon-svgrepo-com.svg";
import LinkedIn from '../assets/linkedin-svgrepo-com.svg'
import Gmail from '../assets/gmail-svgrepo-com.svg'
import {BiPlus} from 'react-icons/bi'
const ProjectSection = () => {
  return (
    <section className="mt-5 flex flex-wrap justify-center items-center mx-14 cursor-default w-[400px] md:w-[500px]">
      <NavLink to="#" target="_blank">
        <article className="flex flex-col w-[120px] items-center gap-5 dark:hover:bg-neutral-700 hover:bg-neutral-300 py-3 px-5 rounded-lg cursor-pointer">
          <figure className="p-3 bg-neutral-200 dark:bg-neutral-900 rounded-full">
            <img src={TechieTube} alt="" rel="icon" />
          </figure>
          <p className="dark:text-neutral-100 text-neutral-800">TechieTube</p>
        </article>
      </NavLink>
      <NavLink to="https://techiekart.vercel.app/" target="_blank">
        <article className="flex flex-col w-[120px] items-center gap-5 dark:hover:bg-neutral-700 hover:bg-neutral-300 py-3 px-5 rounded-lg cursor-pointer">
          <figure className="p-3 bg-neutral-200 dark:bg-neutral-900 rounded-full">
            <img src={Techiekart} alt="" rel="icon" />
          </figure>
          <p className="dark:text-neutral-100 text-neutral-800">Techiekart</p>
        </article>
      </NavLink>
      <NavLink to='https://github.com/ranepaarth' target="_blank">
        <article className="flex flex-col w-[120px] items-center gap-5 dark:hover:bg-neutral-700 hover:bg-neutral-300 py-3 px-5 rounded-lg cursor-pointer">
          <figure className="p-3 bg-neutral-200 dark:bg-neutral-900 rounded-full">
            <img src={Github} alt="" rel="icon" />
          </figure>
          <p className="dark:text-neutral-100 text-neutral-800">Github</p>
        </article>
      </NavLink>
      <NavLink to='https://github.com/ranepaarth' target="_blank">
        <article className="flex flex-col w-[120px] items-center gap-5 dark:hover:bg-neutral-700 hover:bg-neutral-300 py-3 px-5 rounded-lg cursor-pointer">
          <figure className="p-3 bg-neutral-200 dark:bg-neutral-900 rounded-full">
            <img src={LinkedIn} alt="" rel="icon" />
          </figure>
          <p className="dark:text-neutral-100 text-neutral-800">LinkedIn</p>
        </article>
      </NavLink>
      <NavLink to='mailto:paarthrane3@gmail.com' target="_blank">
        <article className="flex flex-col w-[120px] items-center gap-5 dark:hover:bg-neutral-700 hover:bg-neutral-300 py-3 px-5 rounded-lg cursor-pointer">
          <figure className="p-3 bg-neutral-200 dark:bg-neutral-900 rounded-full">
            <img src={Gmail} alt="" rel="icon" />
          </figure>
          <p className="dark:text-neutral-100 text-neutral-800 whitespace-nowrap">Get in Touch</p>
        </article>
      </NavLink>
      <NavLink to='#'>
        <article className="flex flex-col w-[120px] items-center gap-5 dark:hover:bg-neutral-700 hover:bg-neutral-300 py-3 px-5 rounded-lg cursor-pointer">
          <span className="p-3 bg-neutral-200 dark:bg-neutral-900 rounded-full text-neutral-600 dark:text-neutral-100 text-2xl">
            <BiPlus />
          </span>
          <p className="dark:text-neutral-100 text-neutral-800 whitespace-nowrap">Add Shortcut</p>
        </article>
      </NavLink>
    </section>
  );
};

export default ProjectSection;
