import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import OtherPageFooter from '../components/OtherPageFooter'
import '../assets/css/contact.css'
import ContactCreative from '../assets/image/contact-us-creative.png'
import Call from '../assets/image/call.png'
import Mail from '../assets/image/mail.png'
import Location from '../assets/image/location.png'
import FB from '../assets/image/fb.png'
import Insta from '../assets/image/insta.png'
import Linkedin from '../assets/image/linkedin.png'
import { Link } from 'react-router-dom'
import SelectSearch from 'react-select-search'

function ContactUs() {

    const [country , setCountry] = useState('');

    const options = [
        { name: 'Career', value: 'India', type: 'country' },
        { name: 'Complains', value: 'United States', type: 'country' },
        { name: 'Export', value: 'Canada', type: 'country' },
        { name: 'Price', value: 'United Kingdom', type: 'country' },
        { name: 'Product', value: 'Australia', type: 'country' },
        { name: 'Sampling', value: 'Germany', type: 'country' },
        { name: 'Supplier', value: 'France', type: 'country' },

    ];
    const countryOptions = [
        { name: 'India', value: 'India', type: 'country' },
        { name: 'United States', value: 'United States', type: 'country' },
        { name: 'Canada', value: 'Canada', type: 'country' },
        { name: 'United Kingdom', value: 'United Kingdom', type: 'country' },
        { name: 'Australia', value: 'Australia', type: 'country' },
        { name: 'Germany', value: 'Germany', type: 'country' },
        { name: 'France', value: 'France', type: 'country' },
        { name: 'Spain', value: 'Spain', type: 'country' },
        { name: 'Sweden', value: 'Sweden', type: 'country' },
        { name: 'Japan', value: 'Japan', type: 'country' },
        { name: 'China', value: 'China', type: 'country' },
        { name: 'Russia', value: 'Russia', type: 'country' }
    ];

    const handleCountryChange = (selectedCountry) => {
        setCountry(selectedCountry);
    };
    return (
        <div>
            <NavBar />
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
                            <div className="col-lg-4">
                                <div className="image-box">
                                    <img src={ContactCreative} alt="Creative" />
                                </div>
                                <div className="contact-info">
                                    <h2> Contact Information</h2>
                                    <p><img src={Call} alt="phone" /> +91 8564758228</p>
                                    <p><img src={Mail} alt="mail" style={{ height: "15px", width: '18px' }} /> crownlaminates@gmail.com</p>
                                    <strong><img src={Location} alt="phone" /> Factory Address</strong>
                                    <p className='add-para'>Survey no. 419/1, Radhe Industrial Estate, Tajpur Road, Changodar-382 213, Ahmedabad, Gujarat 382213</p>
                                </div>
                                <div className="socalLinks">
                                    <Link to='https://www.facebook.com/royalcrownlaminates' target='_blank'><img src={FB} alt="Facebook" /></Link>
                                    <Link to='https://www.instagram.com/royalcrownlaminates' target='_blank'><img src={Insta} alt="Instagram" /></Link>
                                    <Link><img src={Linkedin} alt="Linkedin" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="contactForm mt-5">
                                    <div className="row">
                                        <div className="col-6 d-flex flex-column input-field" style={{ position: 'relative' }}>
                                            <label htmlFor="name">Name*</label>
                                            <input
                                                type="text"
                                                id="name"
                                            // value={name}
                                            // onChange={(e) => {
                                            //     const value = e.target.value;
                                            //     if (/^[A-Za-z\s]*$/.test(value)) {
                                            //         setName(value);
                                            //     }
                                            // }}
                                            />
                                            {/* {error.name && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.name}
                                        </div>
                                    )} */}
                                        </div>
                                        <div className="col-6 d-flex flex-column" style={{ position: 'relative' }}>
                                            <label htmlFor="email">Email*</label>

                                            <input type="email" id='email'
                                            //  onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {/* {error.email && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.email}
                                        </div>
                                    )} */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 d-flex flex-column " style={{ position: 'relative' , marginTop:"14px" }}>
                                            <label htmlFor="mobile">Mobile*</label>
                                            <input
                                                type="text"
                                                id="mobile"
                                            // value={name}
                                            // onChange={(e) => {
                                            //     const value = e.target.value;
                                            //     if (/^[A-Za-z\s]*$/.test(value)) {
                                            //         setName(value);
                                            //     }
                                            // }}
                                            />
                                            {/* {error.name && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.name}
                                        </div>
                                    )} */}
                                        </div>
                                        <div className="col-6" style={{ position: 'relative' }}>
                                            <div className='d-flex flex-column country'>
                                                <label htmlFor="country">Country</label>
                                                <SelectSearch
                                                    options={countryOptions}
                                                    value={country}
                                                    onChange={handleCountryChange}
                                                    placeholder="Select Country"
                                                />
                                                {/* {error.country && (
                                                    <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                                        {error.country}
                                                    </div>
                                                )} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-6" style={{ position: 'relative' }}>
                                            <div className='d-flex flex-column country'>
                                                <label htmlFor="country">Inquiry Type</label>
                                                <SelectSearch
                                                    options={options}
                                                    value={country}
                                                    onChange={handleCountryChange}
                                                />
                                                {/* {error.country && (
                                                    <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                                        {error.country}
                                                    </div>
                                                )} */}
                                            </div>
                                        </div>
                                        <div className="col-6 d-flex flex-column " style={{ position: 'relative'}}>
                                            <label htmlFor="mobile">Visitor Type</label>
                                            <SelectSearch
                                                    options={options}
                                                    value={country}
                                                    onChange={handleCountryChange}
                                                />
                                            {/* {error.name && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.name}
                                        </div>
                                    )} */}
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                    <div className="col-12 d-flex flex-column" style={{ position: 'relative' }}>
                                            <label htmlFor="name">Message</label>
                                            <input
                                                type="text"
                                                id="name"
                                            // value={name}
                                            // onChange={(e) => {
                                            //     const value = e.target.value;
                                            //     if (/^[A-Za-z\s]*$/.test(value)) {
                                            //         setName(value);
                                            //     }
                                            // }}
                                            />
                                            {/* {error.name && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.name}
                                        </div>
                                    )} */}
                                        </div>
                                    </div>

                                    <button className='submit'>Submit</button>
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

export default ContactUs