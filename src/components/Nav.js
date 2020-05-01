import React from "react";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Nav({ toggled }) {
  const handleAboutClick = () => {
    gsap.to(".app__container", {
      duration: 1.5,
      scrollTo: 755,
      ease: "power2"
    });
  };
  const handleTechClick = () => {
    gsap.to(".app__container", {
      duration: 1.5,
      scrollTo: 1310,
      ease: "power2"
    });
  };
  const handleProjectsClick = () => {
    gsap.to(".app__container", {
      duration: 1.5,
      scrollTo: 2050,
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
