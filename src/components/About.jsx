import React, {useState} from 'react'
import '../assets/css/about.css'
import Video from '../assets/image/video4.webm'
import PlayIcon from '../assets/image/play-icon.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import Logo from '../assets/image/logo.png'



function About() {
    const [showPlayIcon1, setShowPlayIcon1] = useState(true);

  return (
    <div className='about'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center">
                    <ScrollAnimation animateIn="fadeInUp">
                    <div className="about-vid-box">

                    <video
                    controls
                    autoPlay
                    className="custom-video"
                    onPlay={() => setShowPlayIcon1(false)}
                    onPause={() => setShowPlayIcon1(true)}
                  >
                    <source src={'https://media.istockphoto.com/id/1428253293/video/modern-european-complex-of-apartment-buildings-aerial-view.mp4?s=mp4-640x640-is&k=20&c=CrUZ4TKmLybyF1Lzf7RKiTh6KL7SX74ePBU_pOmwjaM='} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  {showPlayIcon1 && (
                    <img
                      src={PlayIcon}
                      alt="play icon"
                      className="playIcon"
                    />
                )}
                    </div>
                    </ScrollAnimation>

                </div>
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="about-content">
                        <ScrollAnimation animateIn="fadeInUp">
                          <h2>About Us</h2>
                        </ScrollAnimation>
                        {/* <ScrollAnimation animateIn="fadeInUp">
                        <h3>preferably something with combination of “luxury”, “aesthetic appeal” and “durability”</h3>
                        </ScrollAnimation> */}
                        <ScrollAnimation animateIn="fadeInUp">
                          <p>Crown Décor is a premier Indian brand, crafting a range of stylish, durable laminates for both interior and exterior applications.</p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                          <p>Crown Decor goes much beyond being a trusted manufacturer. We offer solutions that transform all your decorative surfaces into timeless expressions of sophistication and elegance. </p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                          <p>Our 10 advanced production lines produce over 30 million square meters of high pressure laminates (HPL) annually. We offer laminated sheets and compacts in 6 sizes, with thicknesses ranging from 0.6 mm to 25 mm. Featuring 1200+ captivating decors and 120+ distinctive textures, our collection ensures an ideal match to complement every decorative surface you envision. </p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                        <Link to={'/about'}><button>Read More <GoArrowUpRight/></button></Link>
                        </ScrollAnimation>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About