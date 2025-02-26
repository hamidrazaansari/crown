import React, { useState, useEffect } from 'react'
import Logo from '../assets/image/white-logo-crown.png'
import '../assets/css/footer.css'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'
import Call from '../assets/image/call.png'
import Mail from '../assets/image/mail.png'
import axios from 'axios'
import { API_URL } from '../utills/BaseUrl'


function Footer() {
    const [data, setData] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/categories`);
                setData(response.data.body);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12 d-flex flex-column  resp">
                            <div className="logo d-flex justify-content-lg-center justify-content-start align-items-center ">
                                    <img src={Logo} alt="logo" />
                            </div>
                            <div className='socal-link'>
                                <div className="d-flex align-items-center">
                                    <div className="footer-img">
                                        <img src={Call} alt="phone" />
                                    </div>
                                    <p className='mb-0'>+91 8564758228</p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <div className="footer-img">
                                        <img src={Mail} alt="mail" style={{ height: "12px", width: "18px" }} />
                                    </div>
                                    <p className='mb-0'> crownlaminates@gmail.com</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3  col-6 d-flex flex-column  resp">
                                <h2>Quick Links</h2>
                                <div className="line"></div>
                            <ul>
                                    <li> <a href="/about">ABOUT</a></li>
                                   <li> <a href="/blog">BLOG</a></li>
                                    <li> <a href="/contact">CONTACT US</a></li>
                                    <li> <a href="/">PRIVACY POLICY</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3  col-6 d-flex flex-column resp">
                                <h2>PRODUCTS</h2>
                                <div className="line"></div>
                            <ul>
                                {data && data.map((item) => {
                                    return (
                                        <Link to={`/${item.slug}`}>
                                                <li> <a href="/">{item.name}</a></li>
                                        </Link>
                                    )

                                })
                                }
                            </ul>

                        </div>
                        <div className="col-lg-3  col-12 d-flex flex-column resp">
                                <h2>Application</h2>
                                <div className="line"></div>
                            <ul>
                                <div className="row">
                                    <div className="col-6">
                                            <li> <a href="/">AQVA WALL</a></li>
                                            <li> <a href="/">CROWN XCL</a></li>
                                            <li> <a href="/">FEASE</a></li>
                                            <li> <a href="/">KITTOP</a></li>
                                    </div>
                                    <div className="col-6">
                                            <li> <a href="/">LABPLUS</a></li>
                                            <li> <a href="/">QBISS</a></li>
                                            <li> <a href="/">TABILLO</a></li>
                                            <li> <a href="/">texpanel</a></li>
                                    </div>
                                </div>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12 d-flex flex-column justify-content-center ">
                            <p>Copyright 2025 © Crown Laminates & Beyond. All rights reserved.</p>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-start align-items-center socal">
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to='https://www.facebook.com/royalcrownlaminates' target='_blank'><p className='me-3'>Facebook</p></Link>
                                {/* <span className='vertical-line'></span> */}
                                <Link to='https://www.facebook.com/royalcrownlaminates' target='_blank'><p className='me-3'>Instagram</p></Link>

                                {/* <span className='vertical-line'></span> */}
                                <p className='me-3'>Linkedin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer