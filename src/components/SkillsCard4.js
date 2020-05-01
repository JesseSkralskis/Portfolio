import React from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 50,
  (x - window.innerWidth / 1.5) / 50,
  1.01
];

const trans = (x, y, s) =>
  `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
export default function SkillsCard4() {
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
      className="tech-card4"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans)
      }}
    >
      <div className="tech-card4-pic4">
        <h2>DEPLOYMENT</h2>
      </div>

      <div className="tech-card4-list4">
        <div className="list4R1">
          <h2>HEROKU</h2>
        </div>
        <div className="list4-icon1"></div>
        <div className="list4R2">
          <h2>NETLIFY</h2>
        </div>
        <div className="list4-icon2"></div>
      </div>
    </animated.div>
  );
}
