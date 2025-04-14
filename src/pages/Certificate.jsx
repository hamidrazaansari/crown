import React, { useState , useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import OtherPageFooter from '../components/OtherPageFooter';
import { Modal } from 'react-bootstrap';
import { RxCross1 } from "react-icons/rx";
import Eye from '../assets/image/eye.png';
import company1 from '../assets/image/certificate/CE.png';
import company2 from '../assets/image/certificate/EN 438.jpg';
import company3 from '../assets/image/certificate/FSC.png';
import company4 from '../assets/image/certificate/green label.jpg';
import company5 from '../assets/image/certificate/greenguard.jpg';
import company6 from '../assets/image/certificate/indian green building council.jpg';
import company7 from '../assets/image/certificate/INDIAN STANDARD.jpg';
import company8 from '../assets/image/certificate/nema.png';

// Import PDF files

import '../assets/css/certificate.css';
import { Link } from 'react-router-dom';
import getImageURL from '../utills/getImageURL';
import { API_URL } from '../utills/BaseUrl';
import axios from 'axios';

function Certificate() {
    const[certificates , setCertificates]=useState('')

        useEffect(() => {
            async function fetchCategory() {
                try {
                    let url = `${API_URL}/certificates`;
                    const response = await axios.get(url);
                    setCertificates(response?.data?.body);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchCategory()
        }, [])

        console.log(certificates);
        



    const handleViewCertificate = (pdfFile) => {
        console.log(pdfFile);

        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
          <html>
            <head>
              <title>View Certificate</title>
              <style>
                html, body {
                  margin: 0;
                  height: 100%;
                  overflow: hidden;
                }
                iframe {
                  border: none;
                  width: 100%;
                  height: 100%;
                }
              </style>
            </head>
            <body>
              <iframe src="${pdfFile}" title="Certificate PDF"></iframe>
            </body>
          </html>
        `);
        newWindow.document.close();
      };

    return (
        <div>
            {/* Modal for displaying PDFs */}

            <NavBar />
            <div className="bgWhite">
                <div className="container">
                    <div className="breadcrumb m-0">
                        <p>
                            <Link to="/">HOME</Link>
                            <span> / </span>
                            <Link to="/" className="ms-2">Certification</Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Certificate List Section */}
            <div className="certificate-box bgWhite py-3 pb-4">
                <div className="container px-5">
                    <h1>Global Certification</h1>
                    {certificates && certificates.map((cert, index) => 
                    {
                        const imgUrl = getImageURL(cert.file)
                       return (
                            <div className='d-flex align-items-center' key={index}>
                                <div className="certification-box">
                                    <p>{cert.name}</p>
                                </div>
                                <button className='certificate-btn' onClick={() => handleViewCertificate(imgUrl)}>
                                    View 
                                </button>
                            </div>
                        )  
                    }

                    )}
                </div>
            </div>

            <div className="companies bgWhite  py-0">
                <div className="container">
                    <div className="company-box">
                        <div className="row">
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company5} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company6} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company3} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company4} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company2} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company8} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company7} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OtherPageFooter />
        </div>
    );
}

export default Certificate;
