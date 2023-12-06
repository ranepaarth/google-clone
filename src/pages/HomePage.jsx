import React from "react";
import { HomePageNav, Logo, ProjectSection, UniSearchInput } from "../routes";

const HomePage = () => {
  return (
    <>
      <HomePageNav />

      <div className="flex flex-col items-center justify-center mt-20">
        <Logo textSize={"text-8xl"} mb10={"mb-10"} />
        <UniSearchInput
          mainDivClassName={"max-sm:w-[350px] max-md:w-[450px] md:w-[580px]"}
          formInputClass={"max-sm:w-[220px] max-md:w-[320px] md:w-[460px]"}
        />
      </div>

      <div className="flex justify-center">
        <ProjectSection />
      </div>
    </>
  );
};

export default HomePage;
