import React from "react";

export default function Projects() {
  return (
    <div className="projects__container">
      <div className="projects__header">
        <h1>MY WORK</h1>
      </div>
      <div className="proj__ul-wrapper">
        <div className="proj__ul">
          <div className="proj__haven-ss">
            <div className="proj__haven-photo"></div>
          </div>
          <div className="proj__haven-header">
            <h1>Haven</h1>
          </div>
          <div className="proj__haven-sum-wrapper">
            <div className="proj__haven-sum">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                officiis unde impedit vero harum voluptate eligendi incidunt.
                Eius velit magni autem nulla, officiis reiciendis tempora, quia
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="proj__ur-wrapper">
        <div className="proj__ur">
          <div className="proj__haven-ss">
            <div className="proj__haven-photo"></div>
          </div>
          <div className="proj__haven-header">
            <h1>Haven</h1>
          </div>
          <div className="proj__haven-sum-wrapper">
            <div className="proj__haven-sum">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
                officiis unde impedit vero harum voluptate eligendi incidunt.
                Eius velit magni autem nulla, officiis reiciendis tempora, quia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="proj__ll"></div>
      <div className="proj__lr"></div>
      <div className="projects__bg-art"></div>
      <div className="projects__bg"></div>
      <div className="project__topsvg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L1440,55L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="proj_bottom-svg-container">
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
