import React from "react";

export default function Aj() {
  return (
    <div className="aj__container">
      <div className="aj__button-container">
        <div className="aj__awrap">
          <a
            rel="noopener noreferrer"
            className="link"
            target="_blank"
            href="https://ajmathguru.com/"
          >
            <button className="aj__view">View Site</button>
          </a>
        </div>
      </div>
      <div className="aj__button2-container">
        <div className="aj__awrap">
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="link"
            href="https://github.com/JesseSkralskis/Aj"
          >
            {" "}
            <button className="aj__repository">See the Code</button>
          </a>
        </div>
      </div>

      <div className="aj__main-pic-wrapper">
        <div className="aj__main-pic"></div>
      </div>

      <div className="aj__second-pic"></div>
    </div>
  );
}
