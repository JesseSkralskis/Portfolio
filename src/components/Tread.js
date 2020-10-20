import React from "react";

export default function Tread() {
  return (
    <div style={{}} className="tread__container">
      <div className="tread__button-container">
        <div className="tread__awrap">
          <a
            rel="noopener noreferrer"
            className="link"
            href="https://jessehaven.netlify.app"
            target="_blank"
          >
            <button className="tread__view">View Site</button>
          </a>
        </div>
      </div>
      <div className="tread__button2-container">
        <div className="tread__awrap">
          <a
            rel="noopener noreferrer"
            className="link"
            href="https://github.com/JesseSkralskis/TreadTrackApi"
            target="_blank"
          >
            <button className="tread__repository">See the Code</button>
          </a>
        </div>
      </div>

      <div className="tread__main-pic-wrapper">
       
        <div className="tread__main-pic"></div>
      </div>

      <div className="tread__second-pic"></div>
    </div>
  );
}
