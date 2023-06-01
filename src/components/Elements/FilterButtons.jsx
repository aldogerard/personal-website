import React from "react";

const FilterButtons = ({ onClick, filter }) => {
  return (
    <>
      <div className="mt-2 flex gap-2 rounded-lg bg-gray-300 p-[6px] dark:bg-gray-800">
        <button className={`btn ${filter === "Projects" ? "bg-light dark:bg-dark" : ""}`} onClick={() => onClick("Projects")}>
          Projects
        </button>
        <button className={`btn  ${filter === "Skills" ? "bg-light dark:bg-dark" : ""}`} onClick={() => onClick("Skills")}>
          Skills
        </button>
      </div>
    </>
  );
};

export default FilterButtons;
