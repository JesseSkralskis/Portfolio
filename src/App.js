import React from "react";
import Tech from "./components/Tech";
import "./styles/styles.scss";
import NamePage from "./components/NamePage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => (
  <div className="app__container">
    <NamePage />
    <Skills />
    <Tech />
    <Projects />
  </div>
);

export default App;
