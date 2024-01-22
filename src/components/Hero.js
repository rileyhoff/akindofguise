import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  let centerY = window.innerHeight;
  let centerX = window.innerWidth / 2;
  var angle = Math.atan2(mousePos.y - centerY, mousePos.x - centerX);

  return (
    <div id="hero" className="hero">
      <a href="#mens">
        <img
          className="main"
          src="./akog-logo-static-2.png"
          style={{ transform: "rotate(" + angle * 5 + "deg)" }}
          alt="A kind of Guise"
        />
      </a>
      <div className="links">
        <a className="link mens" href="#mens">
          <span>mens</span>
          <img
            className="hoverimage"
            src="./images/HOLIDAY_DROP_MOODS-1007-1000x1500.jpg"
            style={{ top: mousePos.y / 10 - 175, left: mousePos.x / 10 - 50 }}
            alt=""
          />
        </a>
        <a className="link womens" href="#womens">
          <span>womens</span>
          <img
            className="hoverimage"
            src="./images/hero-w.jpg"
            style={{ top: mousePos.y / 10 - 50, left: mousePos.x / 10 - 75 }}
            alt=""
          />
        </a>
        <a className="link accessories" href="#accessories">
          <span>accessories</span>
          <img
            className="hoverimage"
            src="./images/AKOG_HOLIDAY_DROP_MOODS-06-1000x1500.jpg"
            style={{ top: mousePos.y / 10 - 150, left: mousePos.x / 10 - 150 }}
            alt=""
          />
        </a>
        <a className="link about" href="#about">
          <span>about</span>
          <img
            className="hoverimage"
            src="./images/HOLIDAY_DROP_MOODS-1129-1000x1500.jpg"
            style={{ top: mousePos.y / 10 - 50, left: mousePos.x / 10 - 200 }}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Hero;
