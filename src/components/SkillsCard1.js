import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 50,
  (x - window.innerWidth / 5) / 25,
  1.01
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function SkillsCard1() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 5,
      tension: 350,
      friction: 40
    }
  }));

  return (
    <animated.div
      className="tech-card1"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans)
      }}
    >
      <div className="tech-card1-pic1">
        <h2>FRONT END</h2>
      </div>
      <div className="tech-card1-list1">
        <div className="list1R1">
          <h2>Javascript</h2>
        </div>
        <div className="list1-icon1"></div>
        <div className="list1R2">
          <h2>HTML</h2>
        </div>
        <div className="list1-icon2"></div>
        <div className="list1R3">
          <h2>React / Redux</h2>
        </div>
        <div className="list1-icon3"></div>
        <div className="list1R4">
          <h2>CSS / SASS</h2>
        </div>
        <div className="list1-icon4"></div>
      </div>
    </animated.div>
  );
}
