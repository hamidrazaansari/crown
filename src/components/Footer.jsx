import React from 'react'
import Logo from '../assets/image/logo.png'
import '../assets/css/footer.css'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-12 d-flex flex-column  resp">
                            <div className="logo d-flex justify-content-lg-center justify-content-start align-items-center ">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <img src={Logo} alt="logo" />
                                </ScrollAnimation>
                            </div>
                            <ScrollAnimation animateIn="fadeInUp">
                                <p className='company-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. lorem ipsum to dolor consectetur sed do</p>
                            </ScrollAnimation>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 d-flex flex-column  ps-5">
                            <ScrollAnimation animateIn="fadeInUp">
                                <h2>Quick Links</h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="line"></div>
                            </ScrollAnimation>
                            <ul>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <li> <a href="/">About</a></li>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <li> <a href="/">Blog</a></li>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <li> <a href="/">Environmental</a></li>
                                </ScrollAnimation>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 d-flex flex-column resp">
                            <ScrollAnimation animateIn="fadeInUp">
                                <h2>Product category</h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="line"></div>
                            </ScrollAnimation>
                            <ul>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <li> <a href="/">Decorative Laminates</a></li>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <li> <a href="/">Interior Compacts</a></li>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <li> <a href="/">Exterior Compacts</a></li>
                                </ScrollAnimation>
                            </ul>

                        </div>
                        <div className="col-lg-3 col-sm-6 col-12 d-flex flex-column ps-5">

                            <div className="contact-box">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <h2>Contact</h2>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="line"></div>
                                </ScrollAnimation>

                                <ul className='mt-4'>
                                    <ScrollAnimation animateIn="fadeInUp">
                                        <li><a href="/"><span>Phone:</span> +91 8564758228</a></li>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeInUp">
                                        <li><a href="/"><span>Email:</span> crownlaminates@gmail.com</a></li>
                                    </ScrollAnimation>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 d-flex flex-column justify-content-center ">
                                <p>(c) Crownlaminates 2024. All rights reserved</p>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-start align-items-center">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to='https://www.facebook.com/royalcrownlaminates' target='_blank'><p className='me-3'>Facebook</p></Link> 
                                    <span className='vertical-line'></span>
                                    <Link to='https://www.facebook.com/royalcrownlaminates' target='_blank'><p className='me-3'>Instagram</p></Link> 

                                    <span className='vertical-line'></span>
                                    <p className='me-3'>Pinterest</p>
                                </div>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-start align-items-end">
                                <p>Website designed by  ESTAGLOBAL</p>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Footer