import React, { useRef } from "react";
import ProjectsUL from "./ProjectsUL";
import ProjectsUR from "./ProjectsUR";
import ProjectsLL from "./ProjectsLL";
import ProjectsLR from "./ProjectsLR";
import { useIntersection } from "react-use";
import gsap from "gsap";

export default function Projects() {
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshhold: 9
  });
  const intersection2 = useIntersection(sectionRef2, {
    root: null,
    rootMargin: "0px",
    threshhold: 9
  });

  const fadeIn = element => {
    //to ul
    gsap.to(".proj__ul", {
      opacity: 1,
      y: 0,
      x: 0,
      ease: "power1.out",
      duration: 0.75,
      rotate: 0,
      scale: 1
    });

    // to ur
    gsap.to(".proj__ur", {
      opacity: 1,
      x: 0,
      y: 0,
      ease: "power1.out",
      duration: 0.75,
      rotate: 0,
      scale: 1
      // delay: 0.15
    });
  };

  const fadeIn2 = element => {
    //to ll
    gsap.to(".proj__ll", {
      opacity: 1,
      x: 0,
      y: 0,
      ease: "power1.out",
      duration: 0.75,
      rotate: 0,
      scale: 1
      // delay: 0.2
    });

    //to lr
    gsap.to(".proj__lr", {
      opacity: 1,
      x: 0,
      y: 0,
      ease: "power1.out",
      duration: 0.75,
      rotate: 0,
      scale: 1
      // delay: 0.5
    });
  };
  const fadeOut = element => {
    //from ul
    gsap.to(".proj__ul", {
      opacity: 0,
      x: -800,
      y: -200,
      duration: 0.75,

      ease: "power1.in"

      // scale: 0
    });
    //from ur
    gsap.to(".proj__ur", {
      opacity: 0,
      x: 800,
      y: -200,
      ease: "power1.in",
      duration: 0.75
      // delay: 0.15
    });

    // console.log(intersection);
  };

  const fadeOut2 = element => {
    //from ll
    gsap.to(".proj__ll", {
      opacity: 0,
      x: -400,
      y: 200,
      ease: "power1.in",
      duration: 0.75
      // rotate: 270,
      // scale: 0
    });

    //from lr

    gsap.to(".proj__lr", {
      opacity: 0,
      x: 400,
      y: 200,
      ease: "power1.in",
      duration: 0.75
      // rotate: -180,
    });
  };

  intersection2 && intersection2.intersectionRatio < 0.00001
    ? fadeOut2(".fadeIn2")
    : fadeIn2(".fadeIn2");

  intersection && intersection.intersectionRatio < 0.00001
    ? fadeOut(".fadeIn1")
    : fadeIn(".fadeIn1");

  return (
    <div className="projects__container">
      <div className="projects__header">
        <h1>MY WORK</h1>
      </div>
      <div className="projects__divider"></div>

      <div ref={sectionRef} className="projects__upper-row">
        <ProjectsUL />
        <ProjectsUR />
      </div>
      <div ref={sectionRef2} className="projects__lower-row">
        <ProjectsLL />
        <ProjectsLR />
      </div>

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
