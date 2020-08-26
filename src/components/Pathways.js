import React from "react";

export default function Pathways() {
  return (
    <div className="pathways__container">
      <div className="pathways__main-pic-wrapper">
        <div className="pathways__main-pic"></div>
      </div>
      <div className="pw__button-container">
        <div className="pw__awrap">
          <a
            rel="noopener noreferrer"
            className="link"
            href="https://angry-villani-25c06d.netlify.app"
            target="_blank"
          >
            <button className="pw__view">View Site</button>
          </a>
        </div>
      </div>
      <div className="pw__button2-container">
        <div className="pw__awrap">
          <a
            rel="noopener noreferrer"
            className="link"
            href="https://github.com/JesseSkralskis/Developer-Blog"
            target="_blank"
          >
            <button className="pw__repository">See the Code</button>
          </a>
        </div>
      </div>

      <div className="pathways__second-pic"></div>
    </div>
  );
}
