import React from "react";
import Haven from "./Haven";
import Pathways from "./Pathways";
import Aj from "./Aj";
import Playlist from "./Playlist";
import Other from "./Other";

export default function Projects2() {
  return (
    <div className="proj__container">
      <div className="proj-header">
        {typeof window !== "undefined" && window.innerWidth < 768 ? (
          <h1>
            Now lets take <br /> a look at some of <br /> my most recent
            projects.
          </h1>
        ) : (
          <h1>
            Now lets take a look at <br /> some of my most recent projects.
          </h1>
        )}
        {typeof window !== "undefined" && window.innerWidth < 768 ? (
          <p>
            “Plan your work for today and every day, <br /> then work your
            plan.” <br /> ― Margaret Thatcher
          </p>
        ) : (
          <p>
            “Plan your work for today and every day, then work your plan.”{" "}
            <br /> ― Margaret Thatcher
          </p>
        )}
      </div>
      <Haven />
      <Pathways />
      <Aj />
      <Playlist />
      <Other />
    </div>
  );
}
