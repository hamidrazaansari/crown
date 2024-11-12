import React from 'react'
import Blog1 from '../assets/image/blog1.png'
import Blog2 from '../assets/image/blog2.png'
import Blog3 from '../assets/image/blog3.png'
import '../assets/css/blog.css'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Slider from 'react-slick'
import { IoIosArrowForward } from "react-icons/io";
import ScrollAnimation from 'react-animate-on-scroll'

// Custom Prev Arrow
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-prev-btn" onClick={onClick}>
        <FaArrowLeftLong />
      </button>
    );
  };
  
  // Custom Next Arrow
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-next-arrow" onClick={onClick}>
        <FaArrowRightLong />
      </button>
    );
  };
function Blog() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992, // Max width 992px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520, // Max width 520px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div className='blog'>
        <div className="container">
        <ScrollAnimation animateIn="fadeInUp">
            <h2 className='blog-heading'>LATEST BLOG</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp">
            <Slider {...settings}>
                <div className="blog-box">
                    <img src={Blog1} alt="blog1" />
                    <p>Posuere urna nec tincidunt praesent egestas maecenas.</p>
                    <button>Learn More <IoIosArrowForward/></button>
                </div>
                <div className="blog-box">
                    <img src={Blog2} alt="blog1" />
                    <p>Posuere urna nec tincidunt praesent egestas maecenas.</p>
                    <button>Learn More <IoIosArrowForward/></button>
                </div>
                <div className="blog-box">
                    <img src={Blog3} alt="blog1" />
                    <p>Posuere urna nec tincidunt praesent egestas maecenas.</p>
                    <button>Learn More <IoIosArrowForward/></button>
                </div>
            </Slider>
            </ScrollAnimation>

        </div>
    </div>
  )
}

export default Blog