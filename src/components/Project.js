import React, { useEffect } from "react";
import Info from "./Info";
import gsap from "gsap";

export default function Project({
  seeCodeUrl,
  buttonColor,
  tech,
  description,
  headerColor,
  photo,
  title,
  gridName,
  buttonHeight,
  viewurl,
}) {
  const hide = () => {
    gsap.to(`.${gridName}-info`, { duration: 1, x: -2000 });
  };
  useEffect(() => {
    hide();
  }, []);
  const show = () => {
    gsap.to(`.${gridName}-info`, { duration: 1, x: 0 });
  };
  return (
    <div
      className="project__container"
      style={{
        gridTemplateRows: `[${gridName}Title] 25% [${gridName}Main] 30% [${gridName}Button] 45% [end]`,
        gridTemplateColumns: `[${gridName}leftMargin] 5% [${gridName}Left] 1fr [${gridName}Right] 1fr [${gridName}RightMargin] 5% [end]`,
      }}
    >
      <div
        style={{
          gridRow: `${gridName}Title /${gridName}Main `,
          gridColumn: `${gridName}leftMargin/end`,
        }}
        className="project__title"
      >
        <h1>{title}</h1>

        <div className="project__button-container">
          <div className="project__awrap">
            <a rel="noopener noreferrer" href={viewurl} target="_blank">
              <button
                style={{
                  background: `${buttonColor}`,
                }}
                className="project__view"
              >
                Site
              </button>
            </a>
          </div>
          <div className="project__awrap">
            <a rel="noopener noreferrer" href="#">
              <button
                onClick={show}
                style={{
                  background: `${buttonColor}`,
                }}
                className="project__view"
              >
                About
              </button>
            </a>
          </div>
          <div className="project__awrap">
            <a rel="noopener noreferrer" href={seeCodeUrl} target="_blank">
              <button
                style={{
                  background: `${buttonColor}`,
                }}
                className="project__view"
              >
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <Info
        gridName={gridName}
        headerColor={headerColor}
        tech={tech}
        description={description}
        title={title}
      />

      <div
        className="project__main-pic-wrapper"
        style={{
          gridRow: `${gridName}Main/end`,
          gridColumn: `${gridName}Left/${gridName}RightMargin`,
        }}
      >
        <img src={photo}></img>
      </div>
    </div>
  );
}
