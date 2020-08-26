import React from "react";

export default function Haven() {
  return (
    <div className="haven__container">
      <div className="haven__button-container">
        <div className="haven__awrap">
          <a
            rel="noopener noreferrer"
            className="link"
            href="https://jessehaven.netlify.app"
            target="_blank"
          >
            <button className="haven__view">View Site</button>
          </a>
        </div>
      </div>
      <div className="haven__button2-container">
        <div className="haven__awrap">
          <a
            rel="noopener noreferrer"
            className="link"
            href="https://github.com/JesseSkralskis/Haven"
            target="_blank"
          >
            <button className="haven__repository">See the Code</button>
          </a>
        </div>
      </div>

      <div className="haven__main-pic-wrapper">
        <div className="haven__main-pic"></div>
      </div>

      <div className="haven__second-pic"></div>
    </div>
  );
}
