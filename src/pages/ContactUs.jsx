import React from 'react'
import NavBar from '../components/NavBar'
import OtherPageFooter from '../components/OtherPageFooter'
import '../assets/css/contact.css'
import ContactCreative from '../assets/image/contact-us-creative.png'
import Call from '../assets/image/box_phone-call.png'

function ContactUs() {
  return (
    <div>
        <NavBar/>
        <div className="bgWhite">
                <div className="container">
                    <div className="breadcrumb m-0">
                        <p>
                            <a href="/">HOME</a>
                            <span> / </span>
                            <a href="/" className="ms-2">CONTACT US</a>
                        </p>
                    </div>
                </div>
            </div>
        <div className="contact-us bgWhite">
            <div className="container">
                    <h1>Contact us</h1>
                    <p>Any question or remarks? Just write us a message!</p>
                    <div className="contact-box">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="image-box">
                                    <img src={ContactCreative} alt="Creative" />
                                </div>
                                <div className="contact-info">
                                    <h2> Contact Information</h2>
                                    <p><img src={Call} alt="phone" /> +1012 3456 789</p>
                                    <p>demo@gmail.com</p>
                                    <strong>Factory Address</strong>
                                    <p>Survey no. 419/1, Radhe Industrial Estate, Tajpur Road, Changdor-382 213, Ahmedabad, Gujarat 382213 India</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <OtherPageFooter/>

    </div>
  )
}

export default ContactUs