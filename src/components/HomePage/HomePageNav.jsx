import React from "react";
import {NavItem, ThemeToggler} from '../../routes'
const HomePageNav = () => {
  return (
    <nav className="flex justify-between py-2 text-neutral-800 dark:text-neutral-200 px-4">
      <div className="flex gap-4 items-center">
        <NavItem pathTo={"about"} />
        <NavItem pathTo={"store"} />
      </div>
      <div className="flex gap-4 items-center">
        <NavItem pathTo={"gmail"} />
        <NavItem pathTo={"images"} />
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default HomePageNav;
