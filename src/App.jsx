import React from "react";
import HeaderSection from "./components/Fragments/HeaderSection";
import MainSection from "./components/Fragments/MainSection";

const App = () => {
  return (
    <>
      <div className="h-[300vh] w-full bg-light dark:bg-dark">
        <HeaderSection />
        <MainSection />
      </div>
    </>
  );
};

export default App;
