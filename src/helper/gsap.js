import React from "react";
import gsap from "gsap";

export const hide = () => {
  gsap.to(".info", { duration: 1, x: -2000 });
};

export const show = () => {
  gsap.to(".info", { duration: 1, x: 0 });
};

export const back = () => {
  gsap.fromTo(".info", { duration: 1, x: 0 }, { x: -2000 });
};
