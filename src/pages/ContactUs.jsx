import React from 'react'
import NavBar from '../components/NavBar'
import OtherPageFooter from '../components/OtherPageFooter'
import '../assets/css/contact.css'

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
            </div>
        </div>
        <OtherPageFooter/>

    </div>
  )
}

export default ContactUs