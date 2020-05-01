import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 50,
  (x - window.innerWidth / 3) / 25,
  1.01
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function SkillsCard2() {
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
      className="tech-card2"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans)
      }}
    >
      <div className="tech-card2-pic2">
        <h2>SERVER SIDE</h2>
      </div>
      <div className="tech-card2-list2">
        <div className="list2R1">
          <h2>NODEJS</h2>
        </div>
        <div className="list2-icon1"></div>
        <div className="list2R2">
          <h2>EXPRESS</h2>
        </div>
        <div className="list2-icon2"></div>
        <div className="list2R3">
          <h2>JAVA/SERVLETS</h2>
        </div>
        <div className="list2-icon3"></div>
      </div>
    </animated.div>
  );
}
