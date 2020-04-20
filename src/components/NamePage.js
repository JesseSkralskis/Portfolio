import React from "react";

export default function NamePage() {
  return (
    <div className="namePage__container">
      <div className="namePage__giff">
        <h1>Jesse Skralskis</h1>
        <p>full stack web developer</p>
      </div>
      <div className="namepage__overlay"> </div>

      <div className="namepage_svg-container2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,300L1440,256L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
