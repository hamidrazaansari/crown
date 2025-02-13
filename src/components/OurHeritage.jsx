import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const OurHeritage = () => {
  const bannerRef = useRef(null);
  const bannerContainerRef = useRef(null);

  useEffect(() => {
    if (!bannerRef.current || !bannerContainerRef.current) return;

    const bannerWidth = bannerRef.current.scrollWidth; // Get total scrollable width
    const containerWidth = bannerContainerRef.current.offsetWidth;

    // Ensure that animation happens smoothly
    gsap.to(bannerRef.current, {
      x: -(bannerWidth - containerWidth), // Move only the required distance
      ease: "none",
      scrollTrigger: {
        trigger: bannerContainerRef.current,
        start: "top top",
        end: `+=${bannerWidth}`,
        scrub: 1, // Reduced scrub for smoother effect
        pin: true,
        markers: false, 
      },
    });

    gsap.to(".procedure", {
      width: "+=1210px",
      scrollTrigger: {
        trigger: bannerContainerRef.current,
        start: "top-=180 top",
        end: `+=${bannerWidth}`,
        scrub: true,
        snap: { snapTo: 1, duration: 0.5 },
      },
    });
  }, []);

  return (
    <div className="heritage-section">
      <div className="banner-container container" ref={bannerContainerRef}>
        <div className="scrolling-banner" ref={bannerRef}>
          {[...Array(4)].map((_, index) => (
            <div className="banner-item" key={index}>
              <div className="heritage-info-container">
                <div className="year-highlight">
                  <span className="circle"></span>1995
                </div>
                <h1>Our Heritage</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="heritage-btn">
                  1955<span className="circle d-inline-block"></span>Our Heritage
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="procedure d-block"></div>
        <div className="procedure-bg"></div>
      </div>
    </div>
  );
};

export default OurHeritage;
