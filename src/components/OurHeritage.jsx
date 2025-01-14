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
      const bannerWidth = bannerRef.current.offsetWidth;
  
      // GSAP animation for scrolling banner
      gsap.to(".scrolling-banner", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top-=100 top", 
          end: `+=${bannerWidth}`, 
          scrub: true, 
          pin: true, 
          markers: false, 
        },
      });
  
      gsap.to(".procedure", {
        width: "+=1210px", // Increase width by 300px on each scroll
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top-=180 top",
          end: `+=${bannerWidth}`,
          scrub: true,
          snap: { snapTo: 1, duration: 0.5 },
        },
      });
    },
    { scope: bannerRef }
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
              <button className="heritage-btn">
                1955<span className="circle d-inline-block"></span>Our Heritage{" "}
              </button>
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
              <button className="heritage-btn">
                1955<span className="circle d-inline-block"></span>Our Heritage{" "}
              </button>
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
              <button className="heritage-btn">
                1955<span className="circle d-inline-block"></span>Our Heritage{" "}
              </button>
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
              <button className="heritage-btn">
                1955<span className="circle d-inline-block"></span>Our Heritage{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="procedure d-block"></div>
        <div className="procedure-bg"></div>
      </div>
    </div>
  );
};

export default OurHeritage;
