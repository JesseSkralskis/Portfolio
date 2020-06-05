import React from "react";

export default function Skills() {
  return (
    <div className="skills__container">
      <div className="skills__topsvg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,96L1440,55L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="skills__pic-text-wrapper">
        <div className="skills__pic-box">
          <div className="skills__pic"></div>
        </div>
        <div className="skills__text-box">
          <div className="skills-text">
            <h1>
              Full stack developer specializing in React and Javascript with
              unique perspective from diverse industry settings
            </h1>
            <hr />
            <p>
              My fascination with computers and programming began at a young
              age. I remember as a boy, typing hundreds of lines of code into my
              friend’s Commodore 64 to get a simple box to move across the
              screen. This excitement for coding became fully realized when I
              studied Information Technology at the University of Auckland. I
              have always been passionate about problem solving, and this led me
              down a path of diverse academic and professional disciplines prior
              to becoming a developer. I initially pursued my love of music
              production in obtaining an AA degree in sound engineering. I
              mastered technologies including sound engineering software and the
              operation of external sound boards. This translated to my adept
              ability at learning computer coding languages quickly. I also
              spent 6 years working in the exterior crew in the yachting
              industry. That profession required a tireless work ethic, a
              focused attention to detail, an ability to work efficiently under
              pressure, as well as excellent communication to ensure customer
              satisfaction. I’ve applied these same characteristics to my work
              as a developer. I am looking to partner with clients and teams who
              have similar values of strong work ethic and dynamic problem
              solving.
            </p>
          </div>
        </div>
      </div>
      <div className="skills__header">
        <h1 id="about">ABOUT ME</h1>
      </div>
      <div className="skills__footer"></div>
      <div className="skills_svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,300L1440,256L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="skills__bg-art"></div>
    </div>
  );
}
