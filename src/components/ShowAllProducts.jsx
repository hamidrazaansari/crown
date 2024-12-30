import React from 'react'

import '../assets/css/blog.css'
import '../assets/css/products.css'
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Slider from 'react-slick'
import Product1 from '../assets/image/product1.png'
import Product2 from '../assets/image/product2.png'
import Product3 from '../assets/image/product3.png'
import Product4 from '../assets/image/product4.png'
import Product5 from '../assets/image/product5.png'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll';
import { GoArrowUpRight } from "react-icons/go";



function ShowAllProducts() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrow:false
      };
  return (
    <div className='allProduct bgWhite'>
        <div className="container">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className='mb-4'>Related Products</h2>
            <button className='view-all'>View All <GoArrowUpRight/></button>
          </div>


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