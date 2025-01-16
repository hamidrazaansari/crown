import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import DetailsForm from '../components/DetailsForm';
import Footer from '../components/Footer';
import Certificate1 from '../assets/image/certificate1.png';
import company1 from '../assets/image/company1.png';
import company2 from '../assets/image/company2.png';
import company3 from '../assets/image/company3.png';
import company4 from '../assets/image/company4.png';
import company5 from '../assets/image/company5.png';
import company6 from '../assets/image/company6.png';
import company7 from '../assets/image/company7.png';
import company8 from '../assets/image/company8.png';
import '../assets/css/certificate.css';
import OtherPageFooter from '../components/OtherPageFooter';
import { Modal, Button } from 'react-bootstrap';
import { RxCross1 } from "react-icons/rx";


function Certificate() {
    const [visibleImages, setVisibleImages] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleButtonClick = (index) => {
        setVisibleImages((prev) => ({
            ...prev,
            [index]: !prev[index], // Toggle visibility for the specific index
        }));
    };

    const certificates = [
        "Certificate of compliance - Traceless premium compact 1",
        "Certificate of compliance - Traceless premium compact 2",
        "Certificate of compliance - Traceless premium compact 3",
        "Certificate of compliance - Traceless premium compact 4",
        "Certificate of compliance - Traceless premium compact 5",
    ];

    return (
        <div>

<Modal className='certificate-modal' show={show} onHide={handleClose}>
        <Modal.Body>
                <button className='certificate-cancel-btn' onClick={handleClose}><RxCross1/></button>
        <div className="display-certificate">
            <img src={Certificate1}  />
        </div>
        </Modal.Body>

      </Modal>
            <NavBar />
            <div className="bgWhite">
                <div className="container">
                    <div className="breadcrumb m-0">
                        <p>
                            <a href="/">HOME</a>
                            <span> / </span>
                            <a href="/" className="ms-2">Certification</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="certificate-box bgWhite py-3">
                <div className="container">
                    <h1>QUALITY Certificate</h1>
                    {certificates.map((cert, index) => (
                        <div className="certification-box" key={index}>
                            <p>{cert}</p>
                            <button onClick={handleShow}>
                                View
                            </button>
                        
                        </div>
                    ))}
                </div>
            </div>
            <div className="companies bgWhite ">
                <div className="container">
                <h2>BRANDS certification</h2>
                    <div className="company-box">
                        <div className="row">
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company1} alt="" />
                                </div>
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company2} alt="" />
                                </div>
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company3} alt="" />
                                </div>
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company4} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company5} alt="" />
                                </div>
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company6} alt="" />
                                </div>
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company7} alt="" />
                                </div>
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company8} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OtherPageFooter/>
        </div>
    );
}

export default Certificate;
