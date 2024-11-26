import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import "../assets/css/experience.css";
import GalleryVideo1 from '../assets/image/video1.mp4';
import GalleryVideo2 from '../assets/image/video2.mp4';
import GalleryVideo3 from '../assets/image/video3.mp4';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experienceRef = useRef(null);
  const experienceMiddleRef = useRef(null);

  useGSAP(() => {
    // Create the GSAP timeline for the experience animation
    const exp = gsap.timeline();
    exp.to(experienceMiddleRef.current, {
      scale: 1.5,  // Scale down to create zoom-out effect
      duration: 5,
      ease: "power1.out", // Adjust easing for a smooth zoom effect
      scrollTrigger: {
        trigger: experienceRef.current, // Pin the experience section while scrolling
        start: "top top", // Start when the experience section is at the top of the viewport
        end: "+=600", // End after scrolling 500px
        scrub: true, // Smooth animation based on scroll progress
        markers: false, // Enable for debugging (remove in production)
        pin: experienceRef.current, // Pin the section during scroll
      },
    });
  }, {
    scope: experienceRef, // Scope GSAP animations to the experienceRef container
  });

  return (
    <div ref={experienceRef} className="experience">
      <div className="experience-show">
      <h2 className="gallery-heading">INSPIRATION GALLERY</h2>

        <div className="experience-middle-container">
          {/* Replace the h1 with the video */}
          <video
            ref={experienceMiddleRef}
            className="experience-video"
            autoPlay
            loop
            muted
            playsInline
            src={GalleryVideo3}
            type="video/mp4"
          />
        </div>

        <div className="spacer-end"></div>
      </div>
    </div>
  );
};

export default Experience;
