import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 50,
  (x - window.innerWidth / 2) / 25,
  1.01
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
export default function SkillsCard3() {
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
      className="tech-card3"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans)
      }}
    >
      <div className="tech-card3-pic3">
        <h2>DATA BASE</h2>
      </div>
      <div className="tech-card3-list3">
        <div className="list3R1">
          <h2>MONGO DB</h2>
        </div>
        <div className="list3-icon1"></div>
        <div className="list3R2">
          <h2>MYSQL</h2>
        </div>
        <div className="list3-icon2"></div>
        <div className="list3R3">
          <h2>FIREBASE</h2>
        </div>
        <div className="list3-icon3"></div>
      </div>
    </animated.div>
  );
}
