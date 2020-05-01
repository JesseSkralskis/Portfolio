import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsLR() {
  return (
    <div className="proj__lr-wrapper">
      <div className="proj__lr fadeIn2">
        <div className="proj__lr-link">
          <Link className="link" to="/">
            <button className="buttons buttons--lr">To Site</button>
          </Link>
        </div>
        <div className="proj__lr-readMore">
          <Link className="link" to="/">
            <button className="buttons buttons--lr">Read More</button>
          </Link>
        </div>
        <div className="proj__spot-ss">
          <div className="proj__spot-photo"></div>
        </div>
        <div className="proj__spot-header">
          <h1>PlayList Builder</h1>
        </div>
        <div className="proj__spot-sum-wrapper">
          <div className="proj__spot-sum">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
              officiis unde impedit vero harum voluptate eligendi incidunt. Eius
              velit magni autem nulla, officiis reiciendis tempora, quia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
