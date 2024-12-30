import React from 'react'
import NavBar from '../components/NavBar'
import OtherPageFooter from '../components/OtherPageFooter'
import '../assets/css/blog.css'
import BlogDetailsBanner from '../assets/image/blog-details-banner.png'
import User from '../assets/image/admin.png'
import Calendar from '../assets/image/calender.png'
import BlogImage from '../assets/image/blogimage.png'
import RecentBlog from '../assets/image/recent-blog.png'

function BlogDetails() {
    return (
        <div className='blogpage'>
            <NavBar />
            <div className="blog-details">
                <div className="container px-5">
                    <div className="breadcrumb">
                        <p><a href="/">HOME</a><span> / </span> <a href="/" className='ms-2'>BLog</a> </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-banner">
                                <img src={BlogDetailsBanner} alt="Blog details Banner" />
                            </div>
                            <div className="blog-details-content">
                                <div className="d-flex information align-items-center">
                                    <p className="d-flex align-items-center justify-content-center"><img src={User} alt="user image" /> Admin</p>
                                    <div className="dot"></div>
                                    <p className="d-flex align-items-center justify-content-center"><img src={Calendar} alt="user image" />November 10, 2024</p>
                                </div>
                                <h1>What is the Laminates Sheets Manufacturing Process</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <h2>1. Cost-Effective</h2>
                                <p>Laminate sheets are economical compared to cabinetry materials such as natural stones and solid wood. They thus offer an appealing choice for individuals seeking to don modern attire at affordable costs. For instance, laminate sheets like low-pressure laminates are easy to install and you don’t have to pay an expert because you can easily do it yourself.</p>
                                <h2>2. Variety of Designs and Colors</h2>
                                <p>There are plenty of color, pattern, and design options for laminate sheets for your kitchen especially if you choose to go for the decorative laminates. Homeowners, therefore, have an opportunity to select the best option for their kitchen decor and personality. Some laminate designs imitate even these elements such as wood and imitations thereof, stone, or metal.</p>
                                <img src={BlogImage} alt="blog image" className='mb-3'/>
                                <h2>3. Durable and Resistant</h2>
                                <p>Laminate sheets for the kitchen such as the high-pressure laminates are tough with good resistance to stains, scratches, and moisture. Therefore, making them a good choice for such places as kitchen cabinets since spillages occur there regularly.</p>
                                <h2>4. Environmentally Friendly Options</h2>
                                <p>Manufacturing processes are available that have minimal environmental impact. Some of the laminate sheets like matt finish laminates are also made using eco-friendly materials. Besides, in most cases, laminate is more environmentally friendly as it does not necessitate large tree felling that may be required in the case of solid wood.</p>
                                <h2>5. Stain Resistance</h2>
                                <p>Stain resistance allows laminate sheets like glossy laminates to resist most common household stains such as those caused by food, drinks, and cooking oils. It makes maintaining an appearance of cleanliness for the kitchen cabinets more convenient.</p>
                                <h2>Conclusion</h2>
                                <p>The features to look out for when selecting laminate sheets for your kitchen cabinet are as discussed above. However, these benefits cannot eliminate the disadvantages of each type of laminate sheet, you need to choose wisely by waying between the two.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="recent-blog">
                                <h2>Recent Posts</h2>
                                <div className="rcent-blog-box d-flex">
                                    <img src={RecentBlog} alt="blog image" />
                                    <div>
                                        <p>November 10, 2024</p>
                                        <h3>What are the Laminates use laminates and their types</h3>
                                    </div>
                                </div>
                                <div className="rcent-blog-box d-flex">
                                    <img src={RecentBlog} alt="blog image" />
                                    <div>
                                        <p>November 10, 2024</p>
                                        <h3>What are the Laminates use laminates and their types</h3>
                                    </div>
                                </div>
                                <div className="rcent-blog-box d-flex">
                                    <img src={RecentBlog} alt="blog image" />
                                    <div>
                                        <p>November 10, 2024</p>
                                        <h3>What are the Laminates use laminates and their types</h3>
                                    </div>
                                </div>
                                <div className="rcent-blog-box d-flex">
                                    <img src={RecentBlog} alt="blog image" />
                                    <div>
                                        <p>November 10, 2024</p>
                                        <h3>What are the Laminates use laminates and their types</h3>
                                    </div>
                                </div>
                                <div className="rcent-blog-box d-flex">
                                    <img src={RecentBlog} alt="blog image" />
                                    <div>
                                        <p>November 10, 2024</p>
                                        <h3>What are the Laminates use laminates and their types</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <OtherPageFooter />
        </div>
    )
}

export default BlogDetails