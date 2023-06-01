import React from "react";
import HeaderSection from "./components/Fragments/HeaderSection";
import MainSection from "./components/Fragments/MainSection";
import FooterSection from "./components/Fragments/FooterSection";

const App = () => {
  return (
    <>
      <div className=" w-full bg-light dark:bg-dark">
        <HeaderSection />
        <MainSection />
        <FooterSection />
      </div>
    </>
  );
};

export default App;
