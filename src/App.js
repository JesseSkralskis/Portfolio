import React, { useRef } from "react";

import "./styles/styles.scss";

import AppRouter from "./routes/AppRouter";
import gsap from "gsap";


const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
