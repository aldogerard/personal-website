import React, { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const handleMode = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      return document.documentElement.classList.add("dark");
    }
    setTheme("light");
    localStorage.setItem("theme", "light");
    return document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      return document.documentElement.classList.add("dark");
    }
    return document.documentElement.classList.remove("dark");
  }, []);

  return (
    <>
      {theme === "light" && <IoMoonOutline className="cursor-pointer self-end text-xl md:text-2xl" onClick={() => handleMode()} />}
      {theme === "dark" && <IoSunnyOutline className="cursor-pointer self-end text-xl text-white md:text-2xl" onClick={() => handleMode()} />}
    </>
  );
};

export default ThemeMode;
