import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import OtherPageFooter from '../components/OtherPageFooter';
import { Modal } from 'react-bootstrap';
import { RxCross1 } from "react-icons/rx";
import Eye from '../assets/image/eye.png';
import CatalougeBanner from '../assets/image/Catalogue-banner.jpg';

// Import PDF files
import AQVAWALL from '../assets/image/Catalouge/Aqva Wall.pdf';
import ARENA from '../assets/image/Catalouge/ARENA.pdf';
import CrownCompact from '../assets/image/Catalouge/Crown Compact 2025.pdf';
import Crowninstallation from '../assets/image/Catalouge/Crown Compact installation manual.pdf';
import Fense from '../assets/image/Catalouge/Crown Fense.pdf';
import Labplus from '../assets/image/Catalouge/Crown Labplus.pdf';
import ExteriorCom from '../assets/image/Catalouge/Exterior Compact.pdf';
import Kittop from '../assets/image/Catalouge/Kittop Catalog_INT.pdf';
import QBISS from '../assets/image/Catalouge/QBISS.pdf';
import TABILLO from '../assets/image/Catalouge/TABILLO INT.pdf';
import TabilloInternational from '../assets/image/Catalouge/Tabillo International Look Book.pdf';
import texpanel from '../assets/image/Catalouge/texpanel.pdf';
import NOMARKS from '../assets/image/Catalouge/NO MARKS.pdf';


import File from '../assets/image/file.png';

import '../assets/css/certificate.css';
import '../assets/css/catalouge.css';
import { Link } from 'react-router-dom';

function Catalogue() {
    const [show, setShow] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState("All"); // State to store selected filter

    const certificates = [
        { name: "01. Aqva Wall", file: AQVAWALL, application: "Aqva Wall" },
        { name: "02. Arena", file: ARENA, application: "Arena" },
        { name: "03. Crown Compact 2025", file: CrownCompact, application: "Compact" },
        { name: "04. Crown Compact installation manual", file: Crowninstallation, application: "Compact" },
        { name: "05. Fense", file: Fense, application: "Fense" },
        { name: "06. Labplus", file: Labplus, application: "Lab Plus" },
        { name: "07. Exterior Compact", file: ExteriorCom, application: "Compact" },
        { name: "08. Kittop", file: Kittop, application: "Kittop" },
        { name: "09. Qbiss", file: QBISS, application: "Qbiss" },
        { name: "10. Tabillo", file: TABILLO, application: "Tabillo" },
        { name: "11. Tabillo Look Book", file: TabilloInternational, application: "Tabillo" },
        { name: "12. Texpanel", file: texpanel, application: "Texpanel" },
        { name: "13. No Marks", file: NOMARKS, application: "No Marks" },
    ];

    // Filter the certificates based on selectedFilter
    const filteredCertificates = selectedFilter === "All"
        ? certificates
        : certificates.filter(cert => cert.application.toLowerCase() === selectedFilter.toLowerCase());

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
            <div className="bgWhite">
                <div className="container catalogue-banner">
                    <img src={CatalougeBanner} alt="CatalougeBanner" />
                </div>
            </div>

            {/* Filter Buttons */}
            <div className='bgWhite'>
                <div className="catalouge-btn container d-flex flex-wrap justify-normal">
                    {["All", "Aqva Wall", "Compact", "Fense", "Kittop", "Lab Plus", "Qbiss", "Tabillo", "Texpanel" , "Arena" , "No Marks"].map((category, index) => (
                        <button 
                            key={index} 
                            className={selectedFilter === category ? "active-filter" : ""}
                            onClick={() => setSelectedFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Certificate List Section */}
            <div className="certificate-box bgWhite py-3 pb-5">
                <div className="container px-5">
                    <h1>CROWN CATALOGUE</h1>
                    {filteredCertificates.length > 0 ? (
                        filteredCertificates.map((cert, index) => (
                            <div className='d-flex align-items-center' key={index}>
                                <div className="certification-box">
                                    <p>{cert.name}</p>
                                </div>
                                <button className='certificate-btn' onClick={() => handleShow(cert.file)}>
                                    Download <img src={File} alt="eye" />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No certificates available for "{selectedFilter}"</p>
                    )}
                </div>
            </div>

            <OtherPageFooter />
        </div>
    );
}

export default Catalogue;
