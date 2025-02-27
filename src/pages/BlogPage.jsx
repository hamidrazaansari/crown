import React from 'react'
import NavBar from '../components/NavBar'
import OtherPageFooter from '../components/OtherPageFooter'
import BlogBanner from '../assets/image/blog-banner.png'
import Blog1 from '../assets/image/blog1.png'
import Blog2 from '../assets/image/blog2.png'
import Blog3 from '../assets/image/blog3.png'
import '../assets/css/blog.css'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom'

function BlogPage() {
    return (
        <div className='blogpage'>
            {/* <NavBar /> */}
            <div className="blog-details">
                <div className="container px-5">
                    <div className="breadcrumb">
                        <p><a href="/">HOME</a><span> / </span> <a href="/" className='ms-2'>Blog</a> </p>
                    </div>
                </div>
                <div className="container">
                    <div className="blog-banner">
                        <img src={BlogBanner} alt="BLog Banner" />
                        <div className='banner-text-container'>
                            <h2>Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="blog-box mx-3">
                                <img src={Blog1} alt="blog1" />
                                <div className="d-flex justify-content-between">
                                    <h2>What is the Laminates Sheets Manufacturing Process</h2>
                                    <Link to={'/blog-details'}><button><GoArrowUpRight /> </button></Link>
                                </div>
                                <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">

                            <div className="blog-box mx-3">
                                <img src={Blog2} alt="blog1" />
                                <div className="d-flex justify-content-between">
                                    <h2>What is the Laminates Sheets
                                        Manufacturing Process</h2>
                                    <Link to={'/blog-details'}><button><GoArrowUpRight /> </button></Link>
                                </div>
                                <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box mx-3">
                                <img src={Blog3} alt="blog1" />
                                <div className="d-flex justify-content-between">
                                    <h2>What is the Laminates Sheets
                                        Manufacturing Process</h2>
                                    <Link to={'/blog-details'}><button><GoArrowUpRight /> </button></Link>
                                </div>
                                <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box mx-3">
                                <img src={Blog3} alt="blog1" />
                                <div className="d-flex justify-content-between">
                                    <h2>What is the Laminates Sheets
                                        Manufacturing Process</h2>
                                    <Link to={'/blog-details'}><button><GoArrowUpRight /> </button></Link>
                                </div>
                                <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box mx-3">
                                <img src={Blog3} alt="blog1" />
                                <div className="d-flex justify-content-between">
                                    <h2>What is the Laminates Sheets
                                        Manufacturing Process</h2>
                                    <Link to={'/blog-details'}><button><GoArrowUpRight /> </button></Link>
                                </div>
                                <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box mx-3">
                                <img src={Blog3} alt="blog1" />
                                <div className="d-flex justify-content-between">
                                    <h2>What is the Laminates Sheets
                                        Manufacturing Process</h2>
                                    <Link to={'/blog-details'}><button><GoArrowUpRight /> </button></Link>
                                </div>
                                <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box mx-3">
                                <img src={Blog3} alt="blog1" />
                                <div className="d-flex justify-content-between">
                                    <h2>What is the Laminates Sheets
                                        Manufacturing Process</h2>
                                    <Link to={'/blog-details'}><button><GoArrowUpRight /> </button></Link>
                                </div>
                                <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box mx-3">
                                <img src={Blog3} alt="blog1" />
                                <div className="d-flex justify-content-between">
                                    <h2>What is the Laminates Sheets
                                        Manufacturing Process</h2>
                                    <Link to={'/blog-details'}><button><GoArrowUpRight /> </button></Link>
                                </div>
                                <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box mx-3">
                                <img src={Blog3} alt="blog1" />
                                <div className="d-flex justify-content-between">
                                    <h2>What is the Laminates Sheets
                                        Manufacturing Process</h2>
                                    <Link to={'/blog-details'}><button><GoArrowUpRight /> </button></Link>
                                </div>
                                <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box mx-3">
                                <img src={Blog3} alt="blog1" />
                                <div className="d-flex justify-content-between">
                                    <h2>What is the Laminates Sheets
                                        Manufacturing Process</h2>
                                    <Link to={'/blog-details'}><button><GoArrowUpRight /> </button></Link>
                                </div>
                                <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box mx-3">
                                <img src={Blog3} alt="blog1" />
                                <div className="d-flex justify-content-between">
                                    <h2>What is the Laminates Sheets
                                        Manufacturing Process</h2>
                                    <Link to={'/blog-details'}><button><GoArrowUpRight /> </button></Link>
                                </div>
                                <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-box mx-3">
                                <img src={Blog3} alt="blog1" />
                                <div className="d-flex justify-content-between">
                                    <h2>What is the Laminates Sheets
                                        Manufacturing Process</h2>
                                    <Link to={'/blog-details'}><button><GoArrowUpRight /> </button></Link>
                                </div>
                                <p>Laminate sheets have gained popularity in recent times due to their aesthetic advantages, durability, and versatility. They are widely applicable in furniture making, wall paneling, and flooring.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OtherPageFooter />
        </div>
    )
}

export default BlogPage