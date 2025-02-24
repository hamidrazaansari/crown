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
import getImageURL from '../utills/getImageURL';



function ShowAllProducts({ relatedProducts }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992, // Tablets
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // Mobile (small screens)
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };
  return (
    <div className='allProduct bgWhite'>
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className='mb-4'>Related Products</h2>
            {/* <button className='view-all'>View All <GoArrowUpRight /></button> */}
          </div>


        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp">
          <Slider {...settings}>
            {
              relatedProducts && relatedProducts.map((product) => {
                const imgUrl = getImageURL(product.a4Image)
                return (
                  <>
                    <Link to={`/product-details/${product._id}`}>
                      <div className="product-box">
                        <img src={imgUrl} alt="product1" />
                        <h4>{product.name}</h4>
                      </div>
                    </Link>
                  </>
                )
              })
            }
          </Slider>
        </ScrollAnimation>

      </div>
    </div>
  )
}

export default ShowAllProducts