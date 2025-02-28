import React from 'react'
import Blog1 from '../assets/image/blog1.png'
import Blog2 from '../assets/image/blog2.png'
import Blog3 from '../assets/image/blog3.png'
import '../assets/css/blog.css'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Slider from 'react-slick'
import { IoIosArrowForward } from "react-icons/io";
import ScrollAnimation from 'react-animate-on-scroll'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom'


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
            <h2 className='blog-heading'>BLOG</h2>
            <h3>Latest Article</h3>
            <p className='heading-text'>Discover our latest news and articles regarding common HPL knowledge. Having deep
            understanding about Crown can help you choose the right one for your applications.</p>
              <div className="d-flex flex-wrap align-items-center justify-content-sm-start justify-content-center">
                <div className="blog-box mx-3">
                    <img src={Blog1} alt="blog1" />
                    <div className="d-flex justify-content-between">
                    <h2>What is the Laminates Sheets
                    Manufacturing Process</h2>
                    <Link to={'/blog-details'}><button><GoArrowUpRight/> </button></Link> 
                    </div>
                    <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                </div>
                <div className="blog-box mx-3">
                    <img src={Blog2} alt="blog1" />
                    <div className="d-flex justify-content-between">
                    <h2>What is the Laminates Sheets
                    Manufacturing Process</h2>
                    <Link to={'/blog-details'}><button><GoArrowUpRight/> </button></Link> 
                    </div>
                    <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                </div>
                <div className="blog-box mx-3">
                    <img src={Blog3} alt="blog1" />
                    <div className="d-flex justify-content-between">
                    <h2>What is the Laminates Sheets
                    Manufacturing Process</h2>
                    <Link to={'/blog-details'}><button><GoArrowUpRight/> </button></Link> 
                    </div>
                    <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                </div>
                </div>

        </div>
    </div>
  )
}

export default Blog