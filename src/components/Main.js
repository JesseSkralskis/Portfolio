import React from "react";
import Tech from "./Tech";
import NamePage from "./NamePage";
import Skills from "./Skills";

import Projects from "./Projects";
import Exit from "./Exit";

export default function Main() {
  return (
    <div className="app__container">
      <NamePage />
      <Skills />
      <Tech />

      <Projects />
      <Exit />
    </div>
  );
}
