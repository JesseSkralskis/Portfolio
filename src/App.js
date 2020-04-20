import React from "react";
import Tech from "./components/Tech";
import "./styles/styles.scss";
import NamePage from "./components/NamePage";
import Skills from "./components/Skills";

const App = () => (
  <div className="app__container">
    <NamePage />
    <Skills />
    <Tech />
  </div>
);

export default App;
