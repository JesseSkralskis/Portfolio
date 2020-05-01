import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsUR() {
  return (
    <div className="proj__ur-wrapper">
      <div className="proj__ur">
        <div className="proj__ur-link">
          <Link className="link" to="/">
            <button className="buttons buttons--ur">To Site</button>
          </Link>
        </div>
        <div className="proj__ur-readMore">
          <Link className="link" to="/">
            <button className="buttons buttons--ur">Read More</button>
          </Link>
        </div>
        <div className="proj__blog-ss">
          <div className="proj__blog-photo"></div>
        </div>
        <div className="proj__blog-header">
          <h1>Developer Blog</h1>
        </div>
        <div className="proj__blog-sum-wrapper">
          <div className="proj__blog-sum">
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
