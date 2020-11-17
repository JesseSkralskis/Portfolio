import React from "react";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function NamePage() {
  const handleScroll = () => {
    gsap.to(".app__container", {
      duration: 1.5,
      scrollTo: scrollBasedOnwidth().projects,
      autoKill: false,
      //   ease: "power2"
    });
  };

  const scrollBasedOnwidth = () => {
    if (window.innerWidth <= 414) {
      return {
        projects: 2800,
      };
    }
    if (window.innerWidth <= 768) {
      return {
        projects: 3300,
      };
    }
    if (window.innerWidth <= 1024) {
      return {
        projects: 3700,
      };
    }
    if (window.innerWidth <= 1280) {
      return {
        projects: 3760,
      };
    }

    if (window.innerWidth <= 1440) {
      return {
        projects: 3150,
      };
    }

    if (window.innerWidth <= 4000) {
      return {
        projects: 3800,
      };
    }
  };

  return (
    <div className="namePage__container">
      <div className="namePage__content-wrapper">
        <div className="namePage__content-name">
          <h1>Jesse Skralskis</h1>
        </div>
        <div className="namePage__content-description">
          <p>full stack web developer</p>
        </div>

        <div className="namePage__icons-box">
          <div className="namePage__github">
            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
              href="https://github.com/JesseSkralskis"
              target="blank_"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-4x"></i>
            </a>
          </div>
          <div className="namePage__scrollTo">
            <button onClick={() => handleScroll()}>
              <i className="fas fa-arrow-circle-down"></i>{" "}
              <span> Projects</span>
            </button>
          </div>
        </div>
      </div>

      {/* <div className="namePage__icon-linkWrapper">
        <Link
          onClick={() => toggleHandler()}
          to={"#"}
          style={{ textDecoration: "none" }}
        >
          <i className="fas fa-bars fa-4x"></i>
        </Link>
      </div> */}

      <div className="namePage__giff"></div>
      <div className="namepage__overlay"> </div>
    </div>
  );
}
