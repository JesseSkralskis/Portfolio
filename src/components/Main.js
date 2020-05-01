import React from "react";
import Tech from "./Tech";
import NamePage from "./NamePage";
import Skills from "./Skills";
import Projects from "./Projects";


export default function Main() {
  
  return (
    <div className="app__container">
      <NamePage  />
      <Skills />
      <Tech />

      <Projects />
    </div>
  );
}
