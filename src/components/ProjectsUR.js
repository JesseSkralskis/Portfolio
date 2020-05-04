import React, { useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function ProjectsUR() {
  const [isClickedUR, setIsClickedUR] = useState(false);

  const handleReadMoreUR = () => {
    console.log("clicked yo");
    gsap.fromTo(
      ".proj__ur-readMore-afterclick",
      {
        x: 600,

        opacity: 0
      },
      { x: 0, duration: 1, opacity: 1 }
    );
    setIsClickedUR(true);
  };

  const handleBackUR = () => {
    gsap.fromTo(
      ".proj__ur-readMore-afterclick",
      {
        x: 0,

        opacity: 1
      },
      { x: 600, duration: 0.5, opacity: 0 }
    );
    setIsClickedUR(false);
  };
  return (
    <div className="proj__ur-wrapper">
      <div className="proj__ur">
        <div className="proj__ur-readMore-afterclick">
          <div className="proj__ur-ac-text">
            <div className="proj__ur-ac-text-box">
              <p>
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, distinctio eum fugiat fuga unde perspiciatis! Non,
                perspiciatis cum deserunt ut adipisci officia. Deleniti quasi
                repellat, dolore incidunt itaque quis quibusdam. Minus delectus,
                magni, provident eum corrupti maxime odio repellendus officia
                ratione eos aspernatur fugiat? Debitis, dicta. Non optio tempora
                earum ipsum temporibus iusto, quasi recusandae, rem nihil nisi
                inventore consequuntur. Dolorum quaerat pariatur beatae
                laudantium reiciendis cupiditate error quis odio fugiat minima
                ex, iusto a qui nesciunt nulla architecto distinctio ipsam,
                voluptatibus sint assumenda eaque veritatis, repellat alias nam?
                Explicabo. Perferendis alias eligendi rerum dolore laudantium
                eveniet iusto, obcaecati excepturi quia, accusamus harum eaque
                ab tempora beatae similique ex! Dolorem porro architecto libero!
                Optio omnis quia a, pariatur est qui. Dolorem quaerat sunt harum
                perferendis ipsum magni libero, voluptate explicabo! Nesciunt
                distinctio quaerat maxime iste atque, fugiat at in illo mollitia
                enim doloremque, quasi voluptatem alias ratione ab, nihil
                accusamus? Pariatur ipsa quis repellat. Consequuntur saepe quasi
                id quidem beatae dolorem, laborum nam, voluptate libero
                aspernatur maxime culpa facilis, molestias magnam mollitia
                architecto nulla aliquid. Magnam quisquam quam fugiat porro.{" "}
              </p>
            </div>
          </div>
          <div className="proj__ur-ac-header">
            <div></div>
            <h1>Devoloper Blog</h1>

            <button onClick={() => handleBackUR()} className="buttons__ac">
              X
            </button>
          </div>
        </div>
        <div className="proj__ur-link">
          <Link className="link" to="/">
            {!isClickedUR && (
              <button className="buttons buttons--ur">To Site</button>
            )}
          </Link>
        </div>
        <div className="proj__ur-repo">
          {!isClickedUR && (
            <a className="link" href="https://github.com/JesseSkralskis/Haven">
              <button className="buttons buttons--ur">Repository</button>
            </a>
          )}
        </div>
        <div className="proj__ur-readMore">
          <Link
            onClick={() => {
              handleReadMoreUR();
            }}
            className="link"
            to="/"
          >
            {!isClickedUR && (
              <button className="buttons buttons--ur">Read More</button>
            )}
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
