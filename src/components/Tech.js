import React from "react";
import SkillsCard1 from "./SkillsCard1";
import SkillsCard2 from "./SkillsCard2";
import SkillsCard3 from "./SkillsCard3";
import SkillsCard4 from "./SkillsCard4";

export default function Technologies() {
  return (
    <div className="tech-container">
      <div className="tech-skills">
        {typeof window !== "undefined" && window.innerWidth < 768 ? (
          <h1>
            Full stack experienced, <br /> specializing in React and <br />{" "}
            Javascript.
          </h1>
        ) : (
          <h1>
            Full stack experienced, <br /> specializing in React and Javascript.
          </h1>
        )}
        {typeof window !== "undefined" && window.innerWidth < 768 ? (
          <p>
            I have studied and utilized all of the technologies below in a wide
            range of <br /> projects.
          </p>
        ) : (
          <p>
            I have studied and utilized all of the technologies <br /> below in
            a wide range of projects.
          </p>
        )}
      </div>
      <div className="tech-interior-container">
        <SkillsCard1 />

        <SkillsCard2 />
        <SkillsCard3 />
        <SkillsCard4 />
      </div>
    </div>
  );
}
