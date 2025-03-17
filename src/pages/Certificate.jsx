import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import OtherPageFooter from '../components/OtherPageFooter';
import { Modal } from 'react-bootstrap';
import { RxCross1 } from "react-icons/rx";
import Eye from '../assets/image/eye.png';
import company1 from '../assets/image/company1.png';
import company2 from '../assets/image/company2.png';
import company3 from '../assets/image/company3.png';
import company4 from '../assets/image/company4.png';
import company5 from '../assets/image/company5.png';
import company6 from '../assets/image/company6.png';
import company7 from '../assets/image/company7.png';
import company8 from '../assets/image/company8.png';

// Import PDF files
import Certificate1 from '../assets/image/certificates/20. CE CGS.pdf';
import Certificate2 from '../assets/image/certificates/21. CE EDF - 6mm to 22 mm.pdf';
import Certificate3 from '../assets/image/certificates/CE - EGS (6-19 MM)-Crown Decor_131_a (3).pdf';
import Certificate4 from '../assets/image/certificates/24.  CHEMICAL RESISTANCE CERT (1.2 & 12 MM).pdf';
import Certificate5 from '../assets/image/certificates/CCF_000015 (3).pdf';
import Certificate6 from '../assets/image/certificates/26. EPD (0.8 - 20 MM).pdf';
import Certificate7 from '../assets/image/certificates/29. GREEN LABEL SINGAPORE.pdf';
import Certificate8 from '../assets/image/certificates/32. GREEN LEAF.pdf';
import Certificate9 from '../assets/image/certificates/33. HYGIENIC CERTIFICATE.pdf';
import Certificate10 from '../assets/image/certificates/34. ISO 9001-2015.pdf';
import Certificate11 from '../assets/image/certificates/35. ISO 14001-2015.pdf';
import Certificate12 from '../assets/image/certificates/36. ISO 45001- 2018.pdf';
import Certificate13 from '../assets/image/certificates/37. UKCA - EDF (6 - 22 MM).pdf';
import Certificate14 from '../assets/image/certificates/38. UKCA - EGF (6 TO 8 MM).pdf';

import '../assets/css/certificate.css';
import { Link } from 'react-router-dom';

function Certificate() {
    const [show, setShow] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState(null);

    const certificates = [
        { name: "CE CGS", file: Certificate1 },
        { name: "CE EDF - 6mm to 22 mm", file: Certificate2 },
        { name: "CE - EGS (6-19 MM)", file: Certificate3 },
        { name: "CHEMICAL RESISTANCE CERT 9 1.2 - 12 MM)", file: Certificate4 },
        { name: "EPD (0.8 - 20 MM)", file: Certificate6 },
        { name: "IGBC MEMBERSHIP", file: Certificate5 },
        { name: "GREEN LABEL SINGAPORE", file: Certificate7 },
        { name: "GREEN LEAF", file: Certificate8 },
        { name: "HYGIENIC CERTIFICATE", file: Certificate9 },
        { name: "ISO 9001-2015", file: Certificate10 },
        { name: "ISO 14001-2015", file: Certificate11 },
        { name: "ISO 45001- 2018", file: Certificate12 },
        { name: "EN 438-7:2005 (6 to 22 MM)", file: Certificate13 },
        { name: "EN 438-7:2005 (6 to 8 MM)", file: Certificate14 },
    ];

    const handleShow = (pdfFile) => {
        setSelectedPdf(pdfFile);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedPdf(null);
    };

    return (
        <div>
            {/* Modal for displaying PDFs */}
            <Modal className='certificate-modal' show={show} onHide={handleClose} centered size="lg">
                <Modal.Body>
                    <button className='certificate-cancel-btn' onClick={handleClose}>
                        <RxCross1 />
                    </button>
                    <div className="display-certificate">
                        {selectedPdf && (
                            <iframe
                                src={selectedPdf}
                                width="500px"
                                height="100%"
                                style={{ border: 'none' }}
                                title="Certificate PDF"
                            ></iframe>
                        )}
                    </div>
                </Modal.Body>
            </Modal>

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
            <div className="certificate-box bgWhite py-3">
                <div className="container px-5">
                    <h1>Global Certification</h1>
                    {certificates.map((cert, index) => (
                        <div className='d-flex align-items-center' key={index}>
                            <div className="certification-box">
                                <p>{cert.name}</p>
                            </div>
                            <button className='certificate-btn' onClick={() => handleShow(cert.file)}>
                                View 
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="companies bgWhite ">
                <div className="container">
                    <div className="company-box">
                        <div className="row">
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company2} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company3} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company4} alt="" />
                                </div>
                            </div>
                        </div>
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
                                    <img src={company7} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 d-flex align-items-center justify-content-center">
                                <div className="company-logo">
                                    <img src={company8} alt="" />
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
