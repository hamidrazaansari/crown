import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../assets/css/experience.css";
import GalleryVideo3 from "../assets/image/video3.mp4";

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
          src={'https://videocdn.cdnpk.net/videos/817ba419-38b3-4032-bd17-84ef6733a6af/horizontal/previews/watermarked/large.mp4'}
          type="video/mp4"
        />
      </div>
    </div>
  );
};

export default Experience;
