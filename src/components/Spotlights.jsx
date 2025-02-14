import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../assets/css/spotlight.css";
import SpotLightImg from "../assets/image/qbiss.jpg";
import SpotLightImg1 from "../assets/image/tabillo.jpg";
import SpotLightImg2 from "../assets/image/kittop.jpg";
import SpotLightImg3 from "../assets/image/aqua-wall.jpg";

gsap.registerPlugin(ScrollTrigger);

const Spotlights = () => {
  const bannerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const banner = bannerRef.current;
      const container = containerRef.current;

      if (!banner || !container) return;

      const totalWidth = banner.scrollWidth; // Total scrollable width
      const viewportWidth = container.clientWidth; // Screen width
      const scrollDistance = totalWidth - viewportWidth; // Scroll amount

      gsap.to(banner, {
        x: -scrollDistance, // Move left
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top-=150 top",
          end: `+=${scrollDistance}`, // Scroll duration
          scrub: 2, // Smooth scrolling effect
          pin: true, // **This now properly pins the section**
          anticipatePin: 1, // Helps with smoother pinning
        },
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="spotlight">
      <div className="spotlightheader">
        <div className="container">
          <h2>PRODUCT IN THE SPOTLIGHT</h2>
        </div>
      </div>

      {/* 🔹 This is the pinned section */}
      <div className="banner-container" ref={containerRef}>
        <div className="scrolling-banner" ref={bannerRef}>
          {[SpotLightImg1, SpotLightImg, SpotLightImg2, SpotLightImg3].map(
            (img, index) => (
              <div className="banner-item" key={index}>
                <img src={img} alt={`Spotlight ${index + 1}`} />
                <h2>{["TABILLO", "QBISS", "KITTOP", "AQUA WALL"][index]}</h2>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Spotlights;
