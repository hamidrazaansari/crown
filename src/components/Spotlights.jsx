import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import "../assets/css/spotlight.css";
import SpotLightImg from '../assets/image/qbiss.jpg';
import SpotLightImg1 from '../assets/image/tabillo.jpg';
import SpotLightImg2 from '../assets/image/kittop.jpg';
import SpotLightImg3 from '../assets/image/aqua-wall.jpg';

gsap.registerPlugin(ScrollTrigger);

const Spotlights = () => {
  const bannerRef = useRef(null);

  useGSAP(() => {
    // GSAP animation for scrolling banner
    gsap.to(".scrolling-banner", {
      xPercent: -140,
      ease: "none",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top-=160 top", // Animation starts when the banner section is at 160px from the top
        end: () => `+=${bannerRef.current.offsetWidth}`, // Animation ends based on the width of the banner
        scrub: 10, // Smooth animation based on scroll progress
        pin: true, // Pin the banner during scroll
        markers: false, // Disable markers (remove for production)
      },
    });
  }, {
    scope: bannerRef, // Scope the animation to the bannerRef container
  });

  return (
    <div className="spotlight">
      <div className="spotlightheader">
        <div className="container">
          <h2>PRODUCT IN THE SPOTLIGHT</h2>
        </div>
      </div>
      <div className="banner-container" ref={bannerRef}>
        <div className="scrolling-banner">
          <div className="banner-item">
            <img src={SpotLightImg1} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            <h2>TABILLO</h2>
          </div>
          <div className="banner-item">
            <img src={SpotLightImg} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            <h2>QBISS</h2>
          </div>
          <div className="banner-item">
            <img src={SpotLightImg2} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            <h2>KITTOP</h2>
          </div>
          <div className="banner-item">
            <img src={SpotLightImg3} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
            <h2>AQUA WALL</h2>
          </div>
          {/* Repeat banners if needed */}
        </div>
      </div>
    </div>
  );
};

export default Spotlights;
