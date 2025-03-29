import React from 'react'
import NavBar from '../components/NavBar';
import OtherPageFooter from '../components/OtherPageFooter';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <>
            <NavBar />
            <div className="bgWhite">
                <div className="container">
                    <div className="breadcrumb m-0">
                        <p>
                            <Link to="/">HOME</Link>
                            <span> / </span>
                            <Link to="/" className="ms-2">Privacy Policy</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="privacy-policy bgWhite">
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>Last updated February 2015.</p>
                    <p>
                        Welcome to DeViine.com (the "Site"), provided by DeViine LLC, and its affiliates, subsidiaries, parent company and other related companies ("Us", "We", or "DeViine"). This DeViine.com Privacy Policy ("Policy") describes the information we gather from you when you use the Site, mobile applications, and related services (together, the "Services") and how we use, process, and disclose that information. We may add to this Policy with other notices. We may also post additional privacy statements for some portions of the Services. By submitting personal information through our Services, you expressly consent to the transfer of your personal data to our servers in the U.S. for our collection, use, and disclosure in accordance with this Policy.
                    </p>

                    <h2>Information We Collect</h2>
                    <p>When you create an account and use our Service, we collect the following types of information from you:</p>
                    <ul>
                        <li>Name</li>
                        <li>Contact information such as your email address and phone number</li>
                        <li>Demographics information such as your gender and location</li>
                        <li>Any other information, such as reviews, content, and bio, you provide us</li>
                    </ul>

                    <p>
                        If you create an account using, or otherwise connect your account to, a social networking services account (e.g. Twitter or Facebook), we may also collect information provided to us by such social networking service.
                    </p>

                    <h2>Sharing Of Your Information</h2>
                    <p>The DeViine Services may allow you to connect and share your actions, comments, content, profile, and information publicly or with other people.</p>

                    <h2>How We Use Your Information</h2>
                    <ul>
                        <li>Facilitate the creation of and secure your account on the Services</li>
                        <li>Identify you as a user in our system</li>
                        <li>Provide, personalize, and improve the Services</li>
                        <li>Customize advertising and recommend content</li>
                        <li>Protect, investigate, and prevent potentially fraudulent activities</li>
                    </ul>

                    <h2>How We Disclose Your Information</h2>
                    <ol>
                        <li>We may share your personal information with your consent or at your direction.</li>
                        <li>We may also share your information with others who perform services on our behalf.</li>
                        <li>We may disclose your information if we believe we are required to do so by law.</li>
                    </ol>

                    <h2>Security</h2>
                    <p>DeViine takes commercially reasonable steps to help protect your Information against loss, misuse, and unauthorized access.</p>

                    <h2>Dispute Resolution</h2>
                    <p>If you believe that DeViine has not adhered to this Statement, please contact us at support@deviine.com.</p>

                    <h2>Information Choices</h2>
                    <p>You may opt out of receiving promotional emails from DeViine by following the instructions in those emails.</p>

                    <h2>Changes and Updates to this Privacy Policy</h2>
                    <p>From time to time, we may revise the Policy. To help you stay current on any changes, we note the date the Privacy Policy was last updated above.</p>

                    <h2>Contact Information</h2>
                    <p>
                        DeViine LLC<br />
                        28 W. 3rd Avenue, Suite B-1<br />
                        Spokane, WA 99201<br />
                        Telephone: 509-232-0810<br />
                        Email: support@deviine.com
                    </p>
                </div>
            </div>
            <OtherPageFooter />
        </>

    );
};

export default Privacy;
