import gsap from "gsap";
import SpotLightImg from "../assets/image/spotlight.png";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const OurHeritage = () => {
  const bannerRef = useRef(null);

  useGSAP(
    () => {
      // GSAP animation for scrolling banner
      gsap.to(".scrolling-banner", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top-=180 top", // Animation starts when the banner section is at 160px from the top
          end: () => `+=${bannerRef.current.offsetWidth}`, // Animation ends based on the width of the banner
          scrub: true, // Smooth animation based on scroll progress
          pin: true, // Pin the banner during scroll
          markers: false, // Disable markers (remove for production)
        },
      });
    },
    {
      scope: bannerRef, // Scope the animation to the bannerRef container
    }
  );

  return (
    <div className="heritage-section ">
      <div className="banner-container container" ref={bannerRef}>
        <div className="scrolling-banner">
          <div className="banner-item ">
            <div className="heritage-info-container">
              <div className="year-highlight">
                <span className="circle"></span>1995
              </div>
              <h1>Our heritage</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="banner-item ">
            <div className="heritage-info-container">
              <div className="year-highlight">
                <span className="circle"></span>1995
              </div>
              <h1>Our heritage</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row">
          <div className="col-3">
            <button className="heritage-btn">
              1955<span className="circle d-inline-block"></span>Our Heritage{" "}
            </button>
          </div>
          <div className="col-3">
            <button className="heritage-btn">
              1955<span className="circle d-inline-block"></span>Our Heritage{" "}
            </button>
          </div>
          <div className="col-3">
            <button className="heritage-btn">
              1955<span className="circle d-inline-block"></span>Our Heritage{" "}
            </button>
          </div>
          <div className="col-3">
            <button className="heritage-btn">
              1955<span className="circle d-inline-block"></span>Our Heritage{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHeritage;
