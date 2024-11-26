import React, {useState} from 'react'
import '../assets/css/about.css'
import Video from '../assets/image/video4.webm'
import PlayIcon from '../assets/image/play-icon.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { GoArrowUpRight } from "react-icons/go";



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
                    className="custom-video"
                    onPlay={() => setShowPlayIcon1(false)}
                    onPause={() => setShowPlayIcon1(true)}
                  >
                    <source src={Video} type="video/webm" />
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
                        <h2>About</h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                        <h3>Where Innovation Meets Craft</h3>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp">
                        <button>Read More <GoArrowUpRight/></button>
                        </ScrollAnimation>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About