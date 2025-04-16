import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import OtherPageFooter from '../components/OtherPageFooter';
import Files from '../assets/image/file.png';
import CatalougeBanner from '../assets/image/Catalogue-banner.jpg';

// Import PDF files
// import AQVAWALL from '../assets/image/Catalouge/Aqva Wall.pdf';
// import ARENA from '../assets/image/Catalouge/ARENA.pdf';
// import CrownCompact from '../assets/image/Catalouge/Crown Compact 2025.pdf';
// import Crowninstallation from '../assets/image/Catalouge/Crown Compact installation manual.pdf';
// import Fense from '../assets/image/Catalouge/Crown Fense.pdf';
// import Labplus from '../assets/image/Catalouge/Crown Labplus.pdf';
// import ExteriorCom from '../assets/image/Catalouge/Exterior Compact.pdf';
// import Kittop from '../assets/image/Catalouge/Kittop Catalog_INT.pdf';
// import QBISS from '../assets/image/Catalouge/QBISS.pdf';
// import TABILLO from '../assets/image/Catalouge/TABILLO INT.pdf';
// import TabilloInternational from '../assets/image/Catalouge/Tabillo International Look Book.pdf';
// import texpanel from '../assets/image/Catalouge/texpanel.pdf';
// import NOMARKS from '../assets/image/Catalouge/NO MARKS.pdf';
import File from '../assets/image/file.png';
import '../assets/css/certificate.css';
import '../assets/css/catalouge.css';
import { Link } from 'react-router-dom';
import { API_URL } from '../utills/BaseUrl';
import axios from 'axios';
import getImageURL from '../utills/getImageURL';

function Catalogue() {
    const [selectedFilter, setSelectedFilter] = useState("");
    const [catelouge, setCatelouge] = useState('')
    const [catalogueCategories, setCatalogueCategories] = useState('')


    // Filter the certificates based on selectedFilter
    // const filteredCertificates = selectedFilter === "All"
    //     ? catelouge
    //     : catelouge?.filter(cat => cat.category?._id === selectedFilter);



    useEffect(() => {

        async function fetchcatelougeCategory() {
            try {
                let url = `${API_URL}/catalogueCategories?limit=0&priority=ASC`;
                const response = await axios.get(url);
                setCatalogueCategories(response?.data?.body);
            } catch (error) {
                console.log(error);
            }
        }
        fetchcatelougeCategory()
    }, [])

    useEffect(() => {
        async function fetchcatelouge() {
            try {
                let url = `${API_URL}/catalogues?limit=0&priority=ASC`;
                if(selectedFilter){
                    url+=`&category=${selectedFilter}`
                }
                const response = await axios.get(url);
                setCatelouge(response?.data?.body);
            } catch (error) {
                console.log(error);
            }
        }
        fetchcatelouge()

    }, [selectedFilter])
    





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
                <button
                            className={selectedFilter === '' ? "active-filter" : ""}
                            onClick={() => setSelectedFilter('')}
                        >
                            All
                        </button>

                    {catalogueCategories && catalogueCategories.map((category, index) => (
                        <button
                            key={index}
                            className={selectedFilter === category._id ? "active-filter" : ""}
                            onClick={() => setSelectedFilter(category._id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Certificate List Section */}
            <div className="certificate-box bgWhite py-3 pb-5">
                <div className="container px-5">
                    <h1>CROWN CATALOGUE</h1>
                    {catelouge.length > 0 ? (
                        catelouge.map((cert, index) => {
                            const imageUrl = getImageURL(cert?.file);
                            return (
                                <div className='d-flex align-items-center' key={index}>
                                    <div className="certification-box">
                                        <p>{cert.name}</p>
                                    </div>
                                    <button className='certificate-btn' onClick={() => handleViewCertificate(imageUrl)}>
                                        Download <img src={File} alt="eye" />
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <img src={Files} alt="eye" />
                        <p>No catelouge available</p>
                    </div>
                    )}
                </div>
            </div>

            <OtherPageFooter />
        </div>
    );
}

export default Catalogue;
