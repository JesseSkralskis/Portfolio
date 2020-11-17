import React, { useEffect } from "react";
import Project from "./Project";
import treadProps from "../helper/treadProps";
import havenProps from "../helper/havenProps";
import ajProps from "../helper/ajProps";
import blogProps from "../helper/blogProps";
import plProps from "../helper/plProps";

export default function Projects() {
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
            Every project below I designed, programmed and deployed
            independently.
          </p>
        ) : (
          <p>
            Every project below I designed, programmed <br /> and deployed
            independently.
          </p>
        )}
      </div>
      <Project
        buttonHeight={treadProps.buttonHeight}
        title={treadProps.title}
        description={treadProps.description}
        tech={treadProps.tech}
        viewurl={treadProps.viewurl}
        seeCodeUrl={treadProps.seeCodeUrl}
        buttonColor={treadProps.buttonColor}
        headerColor={treadProps.headerColor}
        photo={treadProps.photo}
        gridName="treadTrack"
      />
      <Project
        buttonHeight={havenProps.buttonHeight}
        title={havenProps.title}
        description={havenProps.description}
        tech={havenProps.tech}
        viewurl={havenProps.viewurl}
        seeCodeUrl={havenProps.seeCodeUrl}
        buttonColor={havenProps.buttonColor}
        headerColor={havenProps.headerColor}
        photo={havenProps.photo}
        gridName="haven"
      />

      <Project
        buttonHeight={ajProps.buttonHeight}
        title={ajProps.title}
        description={ajProps.description}
        tech={ajProps.tech}
        viewurl={ajProps.viewurl}
        seeCodeUrl={ajProps.seeCodeUrl}
        buttonColor={ajProps.buttonColor}
        headerColor={ajProps.headerColor}
        photo={ajProps.photo}
        gridName="aj"
      />

      <Project
        buttonHeight={blogProps.buttonHeight}
        title={blogProps.title}
        description={blogProps.description}
        tech={blogProps.tech}
        viewurl={blogProps.viewurl}
        seeCodeUrl={blogProps.seeCodeUrl}
        buttonColor={blogProps.buttonColor}
        headerColor={blogProps.headerColor}
        photo={blogProps.photo}
        gridName="blog"
      />
      <Project
        buttonHeight={plProps.buttonHeight}
        title={plProps.title}
        description={plProps.description}
        tech={plProps.tech}
        viewurl={plProps.viewurl}
        seeCodeUrl={plProps.seeCodeUrl}
        buttonColor={plProps.buttonColor}
        headerColor={plProps.headerColor}
        photo={plProps.photo}
        gridName="pl"
      />
    </div>
  );
}
