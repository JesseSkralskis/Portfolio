import React, { useRef, useState } from "react";
import { useINtersection } from "react-use";
import gsap from "gsap";
import { Link } from "react-router-dom";
import whatInput from "what-input";

export default function ProjectsUL() {
  const [isClicked, setIsClicked] = useState(false);

  const handleReadMore = () => {
    gsap.fromTo(
      ".proj__ul-readMore-afterclick",
      {
        x: -600,

        opacity: 0
      },
      { x: 0, duration: 1, opacity: 1 }
    );
    setIsClicked(true);
  };

  const handleBack = () => {
    gsap.fromTo(
      ".proj__ul-readMore-afterclick",
      {
        x: 0,

        opacity: 1
      },
      { x: -600, duration: 0.5, opacity: 0 }
    );
    setIsClicked(false);
  };

  return (
    <div className="proj__ul-wrapper">
      <div className="proj__ul fadeIn1">
        <div className="proj__ul-readMore-afterclick">
          <div className="proj__ul-ac-header">
            <h1>haven</h1>
            <button onClick={() => handleBack()} className=" buttons--ul">
              back
            </button>
          </div>
        </div>
        <div className="proj__ul-link">
          <Link className="link" to="/">
            <button className="buttons buttons--ul">To Site</button>
          </Link>
        </div>
        <div className="proj__ul-readMore">
          <Link
            onClick={() => {
              handleReadMore();
            }}
            className="link"
            to="/"
          >
            {!isClicked && (
              <button className="buttons buttons--ul">Read More</button>
            )}
          </Link>
        </div>
        <div className="proj__haven-ss">
          <div className="proj__haven-photo"></div>
        </div>
        <div className="proj__haven-header">
          <h1>Haven</h1>
        </div>
        <div className="proj__haven-sum-wrapper">
          <div className="proj__haven-sum">
            <p>
              A realestate web application with a twist. A user when looking at
              a house has the ability to check for predator offenders within a
              two mile radius of the property.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
