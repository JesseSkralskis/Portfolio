import React from "react";

export default function Playlist() {
  return (
    <div className="pl__container">
      <div className="pl__button-container">
        <div className="pl__awrap">
          <a
            rel="noopener noreferrer"
            className="link"
            href="https://silly-wescoff-4d18fa.netlify.app"
            target="_blank"
          >
            {" "}
            <button className="pl__view">View Site</button>
          </a>
        </div>
      </div>
      <div className="pl__button2-container">
        <div className="pl__awrap">
          <a
            rel="noopener noreferrer"
            className="link"
            href="https://github.com/JesseSkralskis/PlaylistBuilder"
            target="_blank"
          >
            {" "}
            <button className="pl__repository">See the Code</button>
          </a>
        </div>
      </div>

      <div className="pl__main-pic-wrapper">
        <div className="pl__main-pic"></div>
      </div>

      <div className="pl__second-pic"></div>
    </div>
  );
}
