import React from "react";

import ThemeMode from "../Elements/ThemeMode";
import IconSocialMedia from "../Elements/IconSocialMedia";

import user from "../../../public/images/man.png";
import ProfileInfo from "../Elements/ProfileInfo";
const HeaderSection = () => {
  return (
    <>
      <header className="container flex flex-col items-center">
        <ThemeMode />
        <div className="m-4 h-28 w-28 md:h-32 md:w-32">
          <img src={user} alt="my-picture" className="object-contain" />
        </div>
        <h1 className="text-xl font-bold dark:text-light md:text-2xl">Reynaldo Gerard</h1>
        <h2 className="text-sm text-gray-700 dark:text-gray-300 md:text-base">Frontend Developer</h2>
        <IconSocialMedia />
        <ProfileInfo />
      </header>
    </>
  );
};

export default HeaderSection;
