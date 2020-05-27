import React, { useEffect, useRef } from "react";
import "./Hero.scss";
import Header from "../Header/Header";
import { gsap } from "gsap";

//Stop vh to change when you scroll up and down on phone
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

const Hero = () => {
  let hero = useRef(null);
  useEffect(() => {
    gsap.to([hero], 1, {
      delay: 0.1,
      ease: "power3.out",
      height: "0",
      stagger: {
        amount: 0.15,
      },
    });
  });

  return (
    <>
      <Header />
      <div ref={(el) => (hero = el)} className="background" />
      <div className={"hero-container"}>
        <h5>Ayo Ogunseinde</h5>
        <div className="professions">
          <p>Visual artist</p>
          <p>Photographer</p>
        </div>
        <div className="scroll">Scroll down</div>
      </div>
    </>
  );
};

export default Hero;
