import React, { useState, useEffect } from 'react'
import Logo from '../assets/image/white-logo-crown.png'
import '../assets/css/footer.css'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'
import Call from '../assets/image/call.png'
import Mail from '../assets/image/mail.png'
import axios from 'axios'
import { API_URL } from '../utills/BaseUrl'
import FB from '../assets/image/fb.png'
import Insta from '../assets/image/insta.png'
import Linkedin from '../assets/image/linkedin.png'


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
                                        <img src={Mail} alt="mail" style={{ height: "12px", width: "18px" , margin: "0 10px "}} />
                                    </div>
                                    <p className='mb-0'> crownlaminates@gmail.com</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3  col-6 d-flex flex-column  resp">
                                <h2>Quick Links</h2>
                                <div className="line"></div>
                            <ul>
                                    <li> <Link to="/about">ABOUT</Link></li>
                                   <li>  <Link to="/blog">BLOG</Link></li>
                                    <li> <Link to="/contact">CONTACT US</Link></li>
                                    <li> <Link to="/">PRIVACY POLICY</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3  col-6 d-flex flex-column resp">
                                <h2>PRODUCTS</h2>
                                <div className="line"></div>
                            <ul>
                                {data && data.map((item) => {
                                    return (
                                        <Link to={`/${item.slug}`}>
                                                <li> <Link to="/">{item.name}</Link></li>
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
                                            <li> <Link to="/">AQVA WALL</Link></li>
                                            <li> <Link to="/">CROWN XCL</Link></li>
                                            <li> <Link to="/">FENSE</Link></li>
                                            <li> <Link to="/">KITTOP</Link></li>
                                    </div>
                                    <div className="col-6">
                                            <li> <Link to="/">LABPLUS</Link></li>
                                            <li> <Link to="/">QBISS</Link></li>
                                            <li> <Link to="/">TABILLO</Link></li>
                                            <li> <Link to="/">texpanel</Link></li>
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
                        <div className="col-lg-4 d-flex flex-column justify-content-end align-items-end socal">
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to='https://www.facebook.com/crownlamination/' target='_blank'><div className='me-3'><img src={FB} alt="Fb" /></div></Link>
                                <Link to='https://www.instagram.com/crown_laminates_compacts/' target='_blank'><div className='me-3'><img src={Insta} alt="Insta" /></div></Link>
                                <Link to='https://www.linkedin.com/company/42304530' target='_blank'><div className='me-3'><img src={Linkedin} alt="Linkedin" /></div></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer