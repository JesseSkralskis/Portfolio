import React from "react";
import { back } from "../helper/gsap";
import gsap from "gsap";

export default function Info({
  title,
  description,
  tech,
  gridName,

  headerColor,
}) {
  const back = () => {
    gsap.fromTo(`.${gridName}-info`, { duration: 1, x: 0 }, { x: -2000 });
  };
  return (
    <div
      className={`${gridName}-info`}
      style={{
        gridRow: `${gridName}Main / end`,
        gridColumn: `${gridName}Left/ ${gridName}RightMargin`,

        zIndex: "3",
        background: "none",
      }}
    >
      <div className="info">
        <div
          style={{
            background: `${headerColor}`,
          }}
          className="info-header"
        >
          <a className="info-back" href="#" onClick={back}>
            <i class="fas fa-arrow-circle-left"></i>
          </a>

          <h1>{title}</h1>
        </div>
        <div className="info-textContainer">
          <div className="info-description">
            <h1>About {title}</h1>
          </div>
          <div className="info-body-description">
            <div className="info-text-box">
              <p>{description}</p>
            </div>
          </div>
          <div className="info-technologies">
            <h1>Technologies Used</h1>
          </div>

          <div className="info-body-technologies">
            <div className="info-text-box">
              <ul className="info-list">
                {tech.map((i) => {
                  return <li key={i}>{i}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>

        <footer
          style={{
            background: `${headerColor}`,
          }}
          className="info-body-footer"
        >
          <p> &copy; 2020 jesse skralskis</p>
        </footer>
      </div>
    </div>
  );
}
