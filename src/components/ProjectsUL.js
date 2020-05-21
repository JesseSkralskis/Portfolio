import React, { useRef, useState } from "react";

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
    <div className="proj__ul fadeIn1">
      <div className="proj__ul-readMore-afterclick">
        <div className="proj__ul-ac-text">
          <div className="proj__ul-ac-text-box">
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, distinctio eum fugiat fuga unde perspiciatis! Non,
              perspiciatis cum deserunt ut adipisci officia. Deleniti quasi
              repellat, dolore incidunt itaque quis quibusdam. Minus delectus,
              magni, provident eum corrupti maxime odio repellendus officia
              ratione eos aspernatur fugiat? Debitis, dicta. Non optio tempora
              earum ipsum temporibus iusto, quasi recusandae, rem nihil nisi
              inventore consequuntur. Dolorum quaerat pariatur beatae laudantium
              reiciendis cupiditate error quis odio fugiat minima ex, iusto a
              qui nesciunt nulla architecto distinctio ipsam, voluptatibus sint
              assumenda eaque veritatis, repellat alias nam? Explicabo.
              Perferendis alias eligendi rerum dolore laudantium eveniet iusto,
              obcaecati excepturi quia, accusamus harum eaque ab tempora beatae
              similique ex! Dolorem porro architecto libero! Optio omnis quia a,
              pariatur est qui. Dolorem quaerat sunt harum perferendis ipsum
              magni libero, voluptate explicabo! Nesciunt distinctio quaerat
              maxime iste atque, fugiat at in illo mollitia enim doloremque,
              quasi voluptatem alias ratione ab, nihil accusamus? Pariatur ipsa
              quis repellat. Consequuntur saepe quasi id quidem beatae dolorem,
              laborum nam, voluptate libero aspernatur maxime culpa facilis,
              molestias magnam mollitia architecto nulla aliquid. Magnam
              quisquam quam fugiat porro.{" "}
            </p>
          </div>
        </div>
        <div className="proj__ul-ac-header">
          <div></div>
          <h1>HAVEN</h1>

          <button onClick={() => handleBack()} className="buttons__ac">
            X
          </button>
        </div>
      </div>

      <div className="proj__ul-buttons-container">
        <div className="proj__ul-link">
          <Link className="link" to="/">
            {!isClicked && (
              <button className="buttons buttons--ul">To Site</button>
            )}
          </Link>
        </div>

        <div className="proj__ul-repo">
          {!isClicked && (
            <a className="link" href="https://github.com/JesseSkralskis/Haven">
              <button className="buttons buttons--ul">Repository</button>
            </a>
          )}
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
      </div>

      <div className="proj__haven-header">
        <h1>Haven</h1>
      </div>
      <div className="proj__haven-photo-text-wrapper">
        <div className="proj__haven-ss">
          <div className="proj__haven-photo"></div>
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
