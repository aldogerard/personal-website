import React, { useState } from "react";
import FilterButtons from "../Elements/FilterButtons";
import SkillsSection from "../Elements/SkillsSection";
import ProjectSection from "../Elements/ProjectSection";

const MainSection = () => {
  const [filter, setFilter] = useState("Skills");

  return (
    <>
      <main className="container flex flex-col items-center">
        <FilterButtons onClick={setFilter} filter={filter} />
        <div className="container mt-2 flex flex-wrap justify-center">
          {filter === "Skills" && <SkillsSection />}
          {filter === "Projects" && <ProjectSection />}
        </div>
      </main>
    </>
  );
};

export default MainSection;
