import React from "react";

export default function Other() {
  return (
    <div className="other__container">
      <div className="other__header">
        <h1>
          {" "}
          Portfolio of <br /> academic projects:
        </h1>
        {typeof window !== "undefined" && window.innerWidth < 768 ? (
          <p>
            This array of games demonstrates my versatility in coding - I also
            enjoy software engineering.
          </p>
        ) : (
          <p>
            This array of games demonstrates my versatility <br /> in coding - I
            also enjoy software engineering.
          </p>
        )}
      </div>
      <div className="other__bulls-container">
        <div className="other__bulls-button-container">
          <div className="button-wrappers">
            <a
              rel="noopener noreferrer"
              className="link"
              target="_blank"
              href="https://github.com/JesseSkralskis/tetris"
            >
              {" "}
              <button>About Project</button>
            </a>
          </div>
          <div className="button-wrappers">
            <a
              rel="noopener noreferrer"
              className="link"
              target="_blank"
              href="https://github.com/JesseSkralskis/tetris"
            >
              {" "}
              <button>See the Code</button>
            </a>
          </div>
        </div>

        <div className="other__bulls-pic-wrap">
          <div className="other__bulls-pic"></div>
        </div>
      </div>
      <div className="other__tetris-container">
        <div className="other__tetris-button-container">
          <div className="button-wrappers">
            <a
              rel="noopener noreferrer"
              className="link"
              target="_blank"
              href="https://github.com/JesseSkralskis/tetris"
            >
              <button>About Project</button>
            </a>
          </div>
          <div className="button-wrappers">
            <a
              rel="noopener noreferrer"
              className="link"
              target="_blank"
              href="https://github.com/JesseSkralskis/tetris"
            >
              <button>See the Code</button>
            </a>
          </div>
        </div>
        <div className="other__tetris-wrap">
          <div className="other__tetris-pic"></div>
        </div>
      </div>
      <div className="other__simon-container">
        <div className="other__simon-button-container">
          <div className="button-wrappers">
            <a
              rel="noopener noreferrer"
              className="link"
              target="_blank"
              href="https://github.com/JesseSkralskis/simonSays"
            >
              <button>About Project</button>
            </a>
          </div>
          <div className="button-wrappers">
            <a
              rel="noopener noreferrer"
              className="link"
              target="_blank"
              href="https://github.com/JesseSkralskis/simonSays"
            >
              <button>See the Code</button>
            </a>
          </div>
        </div>
        <div className="other__simon-wrap">
          <div className="other__simon-pic"></div>
        </div>
      </div>
    </div>
  );
}
