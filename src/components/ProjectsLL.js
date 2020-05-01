import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsLL() {
  return (
    <div id="yo" className="proj__ll-wrapper">
      <div className="proj__ll fadeIn2">
        <div className="proj__ll-link">
          <Link className="link" to="/">
            <button className="buttons buttons--ll">To Site</button>
          </Link>
        </div>
        <div className="proj__ll-readMore">
          <Link className="link" to="/">
            <button className="buttons buttons--ll">Read More</button>
          </Link>
        </div>
        <div className="proj__aj-ss">
          <div className="proj__aj-photo"></div>
        </div>
        <div className="proj__aj-header">
          <h1>Tutoring</h1>
        </div>
        <div className="proj__aj-sum-wrapper">
          <div className="proj__aj-sum">
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
