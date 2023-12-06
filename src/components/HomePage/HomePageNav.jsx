import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import {NavItem} from '../../routes'
const HomePageNav = () => {
  return (
    <nav className="flex justify-between px-10 py-2 text-neutral-800 dark:text-neutral-200">
      <div className="flex gap-4 items-center">
        <NavItem pathTo={"about"} />
        <NavItem pathTo={"store"} />
      </div>
      <div className="flex gap-4 items-center">
        <NavItem pathTo={"gmail"} />
        <NavItem pathTo={"images"} />
        <span className="p-2 text-2xl text-neutral-800 dark:text-neutral-200">
          <BsPersonCircle />
        </span>
      </div>
    </nav>
  );
};

export default HomePageNav;
