import React from 'react'

import '../assets/css/blog.css'
import '../assets/css/products.css'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Slider from 'react-slick'
import { IoIosArrowForward } from "react-icons/io";
import Product1 from '../assets/image/product1.png'
import Product2 from '../assets/image/product2.png'
import Product3 from '../assets/image/product3.png'
import Product4 from '../assets/image/product4.png'
import Product5 from '../assets/image/product5.png'
import Product6 from '../assets/image/product6.png'
import Product7 from '../assets/image/product7.png'
import Product8 from '../assets/image/product8.png'
import Product9 from '../assets/image/product9.png'
import Product10 from '../assets/image/product10.png'
import Product11 from '../assets/image/product11.png'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';



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
function ShowAllProducts() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
      };
  return (
    <div className='allProduct'>
        <div className="container">
        <ScrollAnimation animateIn="fadeInUp">
            <h2 className='mb-4'>View All Products</h2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp">
            <Slider {...settings}>
              <Link to={'/product-details'}>
                <div className="product-box">
                    <img src={Product1} alt="product1" />
                    <div className="line"></div>
                    <h4>164 - SONOMA OAK</h4>
                </div>
              </Link>
              <Link to={'/product-details'}>
                <div className="product-box">
                    <img src={Product2} alt="product1" />
                    <div className="line"></div>
                    <h4>164 - SONOMA OAK</h4>
                </div>
              </Link>
              <Link to={'/product-details'}>
                <div className="product-box">
                    <img src={Product3} alt="product1" />
                    <div className="line"></div>
                    <h4>164 - SONOMA OAK</h4>
                </div>
              </Link>
              <Link to={'/product-details'}>
                <div className="product-box">
                    <img src={Product4} alt="product1" />
                    <div className="line"></div>
                    <h4>164 - SONOMA OAK</h4>
                </div>
              </Link>
              <Link to={'/product-details'}>
                <div className="product-box">
                    <img src={Product5} alt="product1" />
                    <div className="line"></div>
                    <h4>164 - SONOMA OAK</h4>
                </div>
              </Link>
 

            </Slider>
            </ScrollAnimation>

        </div>
    </div>
  )
}

export default ShowAllProducts