import React from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Nav({ toggled }) {
  const scrollBasedOnwidth = () => {
    if (window.innerWidth <= 414) {
      return {
        about: 600,
        skills: 1310,
        projects: 2800
      };
    }
    if (window.innerWidth <= 768) {
      return {
        about: 1100,
        skills: 2200,
        projects: 3100
      };
    }
    if (window.innerWidth <= 1024) {
      return {
        about: 1100,
        skills: 1900,
        projects: 2500
      };
    }
    if (window.innerWidth <= 1280) {
      return {
        about: 850,
        skills: 1500,
        projects: 2100
      };
    }

    if (window.innerWidth <= 1280) {
      return {
        about: 850,
        skills: 1500,
        projects: 2100
      };
    }
    if (window.innerWidth <= 1440) {
      return {
        about: 920,
        skills: 1570,
        projects: 2170
      };
    }

    if (window.innerWidth <= 4000) {
      return {
        about: 1100,
        skills: 1770,
        projects: 2370
      };
    }
  };

  console.log(window.innerWidth + "@@@@@@@@@@" + window.innerHeight);
  const handleAboutClick = () => {
    gsap.to(".app__container", {
      duration: 1.5,
      scrollTo: scrollBasedOnwidth().about,
      ease: "power2"
    });
  };
  const handleTechClick = () => {
    gsap.to(".app__container", {
      duration: 1.5,
      scrollTo: scrollBasedOnwidth().skills,
      ease: "power2"
    });
  };
  const handleProjectsClick = () => {
    gsap.to(".app__container", {
      duration: 1.5,
      scrollTo: scrollBasedOnwidth().projects,
      autoKill: false
      //   ease: "power2"
    });
  };

  const { x } = useSpring({
    x: toggled ? 0 : 100,
    opacity: 0,
    from: { opacity: 0 }
  });
  return (
    <animated.div
      className="nav__container"
      style={{
        transform: x.interpolate(x => `translate3d(${x * -7}%,0,0)`)
      }}
    >
      <div className="nav__nav">
        <div className="nav__navr1">
          <Link onClick={() => handleAboutClick()} to={"/"}>
            <h1>About </h1>
          </Link>
        </div>
        <div className="nav__navr2">
          <Link onClick={() => handleTechClick()} to={"/"}>
            {" "}
            <h1>Skills</h1>
          </Link>
        </div>
        <div className="nav__navr3">
          <Link onClick={() => handleProjectsClick()} to={"/"}>
            <h1>Projects</h1>
          </Link>
        </div>
      </div>
    </animated.div>
  );
}
