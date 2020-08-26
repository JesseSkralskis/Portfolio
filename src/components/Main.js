import React from "react";
import Tech from "./Tech";
import NamePage from "./NamePage";
import Skills from "./Skills";

import Projects2 from "./Projects2";
import Exit from "./Exit";

export default function Main() {
  return (
    <div className="app__container">
      <NamePage />
      <Skills />
      <Tech />

      <Projects2 />
      <Exit />
    </div>
  );
}
