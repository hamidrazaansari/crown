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

      const totalWidth = banner.scrollWidth;
      const viewportWidth = container.clientWidth;
      const scrollDistance = totalWidth - viewportWidth;

      gsap.to(banner, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top-=150 top",
          end: `+=${scrollDistance + 800}`,
          scrub: 1,
          pin: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  

  return (
    <div className="spotlight">
      <div className="spotlightheader">
        <div className="container">
          <h2>PRODUCT IN THE SPOTLIGHT</h2>
        </div>
      </div>

      <div className="banner-container" ref={containerRef}>
        <div className="scrolling-banner" ref={bannerRef}>
          {[SpotLightImg1, SpotLightImg, SpotLightImg2, SpotLightImg3].map(
            (img, index) => (
              <div className="banner-item" key={index}>
                <img src={img} alt={`Spotlight ${index + 1}`} />
                <h3>{["TABILLO", "QBISS", "KITTOP", "AQUA WALL"][index]}</h3>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Spotlights;
