import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import OtherPageFooter from '../components/OtherPageFooter';
import { Modal } from 'react-bootstrap';
import { RxCross1 } from "react-icons/rx";
import Eye from '../assets/image/eye.png';
import CatalougeBanner from '../assets/image/catelog.png' 
// Import PDF files
import Certificate1 from '../assets/image/certificates/20. CE CGS.pdf';
import File from '../assets/image/file.png'

import '../assets/css/certificate.css';
import '../assets/css/catalouge.css';
import { Link } from 'react-router-dom';

function Catalogue() {
    const [show, setShow] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState(null);

    const certificates = [
        { name: "01.  Crownlam laminates lab guardian collection", file: Certificate1 },
        { name: "01.  Crownlam laminates lab guardian collection", file: Certificate1 },
        { name: "01.  Crownlam laminates lab guardian collection", file: Certificate1 },
        { name: "01.  Crownlam laminates lab guardian collection", file: Certificate1 },
        { name: "01.  Crownlam laminates lab guardian collection", file: Certificate1 },
        { name: "01.  Crownlam laminates lab guardian collection", file: Certificate1 },

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
                            <Link to="/" className="ms-2">Catalouge</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className=" bgWhite">
                <div className="container catalogue-banner">
                    <img src={CatalougeBanner} alt="CatalougeBanner" />
                </div>
            </div>
            <div className='bgWhite'>
            <div className="catalouge-btn  container d-flex flex-wrap justify-normal">
                <button>Aqua Wall</button>
                <button>Crown XCL</button>
                <button>Fense</button>
                <button>Kittop</button>
                <button>Lab Plus</button>
                <button>QBISS</button>
                <button>Tabillo</button>
                <button>Texpanel</button>
            </div>
            </div>



            {/* Certificate List Section */}
            <div className="certificate-box bgWhite py-3 pb-5">
                <div className="container px-5">
                    <h1>QUALITY Certificate</h1>
                    {certificates.map((cert, index) => (
                        <div className='d-flex align-items-center' key={index}>
                            <div className="certification-box">
                                <p>{cert.name}</p>
                            </div>
                            <button className='certificate-btn' onClick={() => handleShow(cert.file)}>
                                Download <img src={File} alt="eye" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <OtherPageFooter />
        </div>
    );
}

export default Catalogue;
