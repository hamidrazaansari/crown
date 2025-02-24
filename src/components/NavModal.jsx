import React, { useState, useEffect } from "react";
import "../assets/css/modal.css";
import Dropdown from 'react-bootstrap/Dropdown';
import { API_URL } from "../utills/BaseUrl";
import axios from "axios";
import getImageURL from "../utills/getImageURL";
import { useNavigate, Link } from "react-router-dom";

// Import Images
import AquaWall from '../assets/image/All-logo/Aqva-Wall.png';
import CrownXLC from '../assets/image/All-logo/Exterior.png';
import Fense from '../assets/image/All-logo/Fense.png';
import Kittop from '../assets/image/All-logo/Kittop.png';
import Labplus from '../assets/image/All-logo/Labplus.png';
import Qbiss from '../assets/image/All-logo/Qbiss.png';
import Tabillo from '../assets/image/All-logo/Tabillo.png';

const NavModal = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);
    const [activeSection, setActiveSection] = useState("products"); // Tracks which section is active

    const navigate = useNavigate();

    const handleMouseEnter = () => setShow(true);
    const handleMouseLeave = () => setShow(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/categories`);
                setData(response.data.body);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="product-menu">
            <Dropdown onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} show={show}>
                <Dropdown.Toggle id="dropdown-basic" className='bg-transparent border-0 text-dark'>
                    PRODUCTS
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div className="container">
                        <div className="row">
                            {/* Section Toggle Buttons */}
                            <div className="col-lg-3 d-flex align-items-start mt-4 justify-content-start flex-column">
                                <button 
                                    className={`menu-cat-button mb-2 ${activeSection === "products" ? "arrow-button" : "arrow-button-outline"}`} 
                                    onClick={() => setActiveSection("products")}
                                >
                                    <span className="me-3">Products</span>
                                </button>

                                <button 
                                    className={`menu-cat-button ${activeSection === "application" ? "arrow-button" : "arrow-button-outline"}`} 
                                    onClick={() => setActiveSection("application")}
                                >
                                    <span className="me-3">Application</span>
                                </button>
                            </div>

                            {/* Render Products Section */}
                            {activeSection === "products" && (
                                <div className="col-lg-9">
                                    <div className="row d-lg-block d-none ">
                                        {data && data.map((category) => {
                                            const imageUrl = category.image ? getImageURL(category.image) : '';
                                            return (
                                                <Link key={category._id} className="col-lg-4" to={`/${category.slug}`}>
                                                    <div className="menu-img">
                                                        <img src={imageUrl} className="img-fluid mb-2" alt={category.name} />
                                                        <h2 className="fs-5 ms-4">{category.name}</h2>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Render Applications Section */}
                            {activeSection === "application" && (
                                <div className="col-9">
                                    <div className="row">
                                        {[ 
                                            { img: AquaWall, name: "AQUA WALL" },
                                            { img: CrownXLC, name: "CROWN XLC" },
                                            { img: Fense, name: "FENSE" },
                                            { img: Kittop, name: "KITTOP" },
                                            { img: Labplus, name: "LAB PLUS" },
                                            { img: Qbiss, name: "QBISS" },
                                            { img: Tabillo, name: "TABILLO" }
                                        ].map((item, index) => (
                                            <div key={index} className="col-3">
                                                <div className="application-box">
                                                    <img src={item.img} alt={item.name} />
                                                    <h3 className="app-heading">{item.name}</h3>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default NavModal;
