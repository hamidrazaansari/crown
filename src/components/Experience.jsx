import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../assets/css/experience.css";
import GalleryVideo from "../assets/video/gallery-video.mp4";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        scale: 5, // Reduce scale to prevent excessive overlap
        duration: 5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top+=400 center",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);


  return (
    <div ref={experienceRef} className="experience">
      <h2 className="gallery-heading">INSPIRATION GALLERY</h2>
      <div className="experience-middle-container">
        <video
          ref={videoRef}
          className="experience-video"
          autoPlay
          loop
          muted
          playsInline
          src={GalleryVideo}
          type="video/mp4"
        />
      </div>
    </div>
  );
};

export default Experience;
