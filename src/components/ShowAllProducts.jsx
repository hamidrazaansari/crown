import React from 'react'

import '../assets/css/blog.css'
import '../assets/css/products.css'
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


function ShowAllProducts({ relatedProducts , categoryId ,  subCategoryId , productId }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    draggable: true, 
    swipe: true,      
    touchMove: true,  
    cssEase: "ease-in-out",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
          slidesToShow: 2,
          dots:false
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

  console.log(categoryId ,  subCategoryId);
  
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
                if(productId === product._id){
                  return ''
                }
                else
                  return (
                    <>
                      <Link to={`/product-details/${product._id}?categoryId=${categoryId}&subCategoryId=${subCategoryId}`} key={product?._id}>
                        <div className="product-box">
                          <img src={imgUrl} alt="product1" />
                          <h4>{product.name}</h4>
                          <h4 className='text-start'>{product.decorNumber}</h4>
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