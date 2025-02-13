import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import HeroBanner from '../assets/image/hero-banner.png'
// import Logo from '../assets/image/'

gsap.registerPlugin(ScrollTrigger);

function HorizontalScroll() {
  const slider = useRef(null); // Removed type annotation

  useGSAP(
    () => {
      let panels = gsap.utils.toArray(".panel");
      let tlMain = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "none",
        },
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: true,
          start: 0,
          end: () => "+=" + window.innerWidth,
          markers: false,
        },
      });
      tlMain.fromTo(
        ".thank-you.is-2",
        {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        0
      );
    },
    {
      scope: slider,
    }
  );

  return (
    <div className="thank-you-container" ref={slider}>
      <div className="thank-you-wrapper panel">
        <div className="thank-you d-block">
              <div className="heroBanner">
                <img src={HeroBanner} alt="Hero Banner" />
            </div>
        </div>
        <div className="thank-you is-2">
          <div className="content">
            <div className="textBlock ctext">
              <p>CROWN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HorizontalScroll