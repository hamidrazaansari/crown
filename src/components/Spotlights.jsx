import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/css/spotlight.css";
import SpotLightImg from "../assets/image/qbiss.jpg";
import SpotLightImg1 from "../assets/image/tabillo.jpg";
import SpotLightImg2 from "../assets/image/kittop.jpg";
import SpotLightImg3 from "../assets/image/aqua-wall.png";

gsap.registerPlugin(ScrollTrigger);

const Spotlights = () => {
  const [images] = useState([
    { src: SpotLightImg1, title: "TABILLO" },
    { src: SpotLightImg, title: "QBISS" },
    { src: SpotLightImg2, title: "KITTOP" },
    { src: SpotLightImg3, title: "AQUA WALL" },
  ]);

  useEffect(() => {
    const sections = gsap.utils.toArray(".banner-item");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".banner-container",
        start: "top-=140 top",
        pin: true,
        scrub: 1,
        anticipatePin: 2,
        end: () => "+=" + (document.querySelector(".banner-container").offsetWidth), 
       },
    });
  }, []);
  

  return (
    <div className="spotlight">
      <div className="spotlightheader">
        <div className="container">
          <h2>SPOTLIGHT</h2>
        </div>
      </div>

      <div className="banner-container">
        <div className="scrolling-banner">
          {images.map((item, index) => (
            <div className="banner-item" key={index}>
              <img src={item.src} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spotlights;
