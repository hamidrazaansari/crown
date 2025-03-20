import React from 'react'
import Blog1 from '../assets/image/blog1.png'
import Blog2 from '../assets/image/sustainable.jpg'
import Blog3 from '../assets/image/luxury.jpg'
import '../assets/css/blog.css'
import Slider from 'react-slick'
import { IoIosArrowForward } from "react-icons/io";
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";

import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

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
            {/* <h2 className='blog-heading'>BLOG</h2> */}
            <div className="d-flex align-items-center justify-content-between">
            <h3>WORLD OF CROWN LAMINATES</h3>
            <Link className='blog-btn' to={'/blog'}>View All <GoArrowUpRight className='ms-1'/></Link>
            </div>
            <p className='heading-text'>Explore our latest insights and expert articles on high-pressure laminates (HPL). Gain in-depth knowledge of Crown to make informed choices for premium, durable applications.</p>
              <div className="d-flex flex-wrap">
                <div className="blog-box mx-3">
                    <img src={Blog1} alt="blog1" />
                    <div className="d-flex justify-content-between">
                    <h2>The Rise of Thin Laminates: Light Weight Luxury</h2>
                    <Link to={'/blog-details'}><button><GoArrowUpRight/> </button></Link> 
                    </div>
                    <p>In the ever-evolving world of interior design, the demand for visually appealing  yet functional material is at an all-time high. Homeowners, designers, and architects are seeking solutions that look great  without compromising on practicality. </p>
                </div>
                <div className="blog-box mx-3">
                    <img src={Blog2} alt="blog1" />
                    <div className="d-flex justify-content-between">
                    <h2>Sustainable Luxury: Eco-Friendly Laminates for Modern Homes</h2>
                    <Link to={'/sustainabl-details'}><button><GoArrowUpRight/> </button></Link> 
                    </div>
                    <p>Sustainability does not have to come at the cost of aesthetics or utility.Today’s homeowners and designers demand materials that are environmentally sustainable and safe, without compromising on the style quotient of their interiors. Crown high pressure laminates (HPL) provide an ideal solution, with their combination of premium looks, durability and eco-friendly properties. </p>
                </div>
                <div className="blog-box mx-3">
                    <img src={Blog3} alt="blog1" />
                    <div className="d-flex justify-content-between">
                    <h2>Beyond Wood & Stone: Why Luxury Homes are Choosing High-End Laminates</h2>
                    <Link to={'/luxury-details'}><button><GoArrowUpRight/> </button></Link> 
                    </div>
                    <p>In the world of luxury home design, natural materials like wood and stone have long been the gold standard. However, wise homeowners and designers are increasingly turning to high-end laminates as a lighter, eco friendly, yet elegant and durable alternative. </p>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Blog