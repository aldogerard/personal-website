import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const frontEnd = [
  {
    name: "HTML",
    level: "Advanced",
  },
  {
    name: "CSS",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
  },
  {
    name: "PHP",
    level: "Basic",
  },
  {
    name: "ReactJS",
    level: "Intermediate",
  },
  {
    name: "TailwindCSS",
    level: "Intermediate",
  },
  {
    name: "Git",
    level: "Basic",
  },
];

const backEnd = [
  {
    name: "NodeJS",
    level: "Basic",
  },
  {
    name: "MySQL",
    level: "Basic",
  },
  {
    name: "ExpressJs",
    level: "Basic",
  },
];

const SkillsSection = () => {
  return (
    <>
      <div className="flex w-full flex-wrap justify-between gap-y-12 transition-colors duration-100">
        <div className="w-full max-w-xs md:w-2/5">
          <h1 className="mb-6 text-center text-lg font-semibold dark:text-light ">Frontend Developer</h1>
          <div className="flex w-full ">
            <div className="flex w-1/2 flex-col items-start justify-start gap-y-6">
              {frontEnd.map((item, index) => {
                if (index < frontEnd.length / 2)
                  return (
                    <div className="flex items-start justify-start" key={index}>
                      <IoCheckmarkCircleOutline className="mx-[6px] text-base text-primary" />
                      <div className="flex h-full flex-col justify-items-start">
                        <h1 className="text-base leading-4 dark:text-light">{item.name}</h1>
                        <h1 className="mt-1 text-sm font-light text-gray-700 dark:text-gray-300">{item.level}</h1>
                      </div>
                    </div>
                  );
              })}
            </div>
            <div className="flex w-1/2 flex-col items-start justify-start gap-y-6 pl-4 ">
              {frontEnd.map((item, index) => {
                if (index >= frontEnd.length / 2)
                  return (
                    <div className="flex items-start justify-start" key={index}>
                      <IoCheckmarkCircleOutline className="mx-[6px] text-base text-primary" />
                      <div className="flex h-full flex-col justify-items-start">
                        <h1 className="text-base leading-4 dark:text-light">{item.name}</h1>
                        <h1 className="mt-1 text-sm font-light text-gray-700 dark:text-gray-300">{item.level}</h1>
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>

        <div className="w-full max-w-xs md:w-2/5">
          <h1 className="mb-6 text-center text-lg font-semibold dark:text-light ">Backend Developer</h1>
          <div className="flex w-full ">
            <div className="flex w-1/2 flex-col items-start justify-start gap-y-6">
              {backEnd.map((item, index) => {
                if (index < backEnd.length / 2)
                  return (
                    <div className="flex items-start justify-start" key={index}>
                      <IoCheckmarkCircleOutline className="mx-[6px] text-base text-primary" />
                      <div className="flex h-full flex-col justify-items-start">
                        <h1 className="text-base leading-4 dark:text-light">{item.name}</h1>
                        <h1 className="mt-1 text-sm font-light text-gray-700 dark:text-gray-300">{item.level}</h1>
                      </div>
                    </div>
                  );
              })}
            </div>
            <div className="flex w-1/2 flex-col items-start justify-start gap-y-6 pl-4 ">
              {backEnd.map((item, index) => {
                if (index >= backEnd.length / 2)
                  return (
                    <div className="flex items-start justify-start" key={index}>
                      <IoCheckmarkCircleOutline className="mx-[6px] text-base text-primary" />
                      <div className="flex h-full flex-col justify-items-start">
                        <h1 className="text-base leading-4 dark:text-light">{item.name}</h1>
                        <h1 className="mt-1 text-sm font-light text-gray-700 dark:text-gray-300">{item.level}</h1>
                      </div>
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsSection;
