import React, { useState } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function NamePage({ scroll }) {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    console.log("clicked");
    setIsToggled(!isToggled);
  };

  return (
    <div className="namePage__container">
      <div className="namePage__content-wrapper">
        <div className="namePage__content-name">
          <h1>Jesse Skralskis</h1>
        </div>
        <div className="namePage__content-description">
          <p>full stack web developer</p>
        </div>

        <div className="namePage__icons-box">
          <div className="namePage__github">
            <a
              style={{
                textDecoration: "none",
                color: "white"
              }}
              href="https://github.com/JesseSkralskis"
              target="blank_"
            >
              <i className="fab fa-github fa-4x"></i>
            </a>
          </div>
          {/* <div className="namePage__bitBucket">
            <a
              style={{
                textDecoration: "none",
                color: "white"
              }}
              href="https://bitbucket.org/dashboard/repositories"
            >
              <i class="fab fa-bitbucket fa-4x"></i>
            </a>
          </div>
          <div className="namePage__faceBook">
            <a
              href="https://www.facebook.com/jesse.james.3133719"
              style={{
                textDecoration: "none",
                color: "white"
              }}
            >
              {" "}
              <i class="fab fa-facebook fa-4x"></i>
            </a>
          </div>
        </div> */}
      </div>

      <div className="namePage__icon-linkWrapper">
        <Link
          onClick={() => toggleHandler()}
          to={"#"}
          style={{ textDecoration: "none" }}
        >
          <i className="fas fa-bars fa-4x"></i>
        </Link>
      </div>

      <Nav toggled={isToggled} toggled={isToggled} />
      <div className="namePage__giff"></div>
      <div className="namepage__overlay"> </div>

      <div className="namepage_svg-container2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,300L1440,256L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
