import React, { useState, useEffect } from "react";
import "../assets/css/modal.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DummyCategory1 from '../assets/image/category1.png'
import DummyCategory2 from '../assets/image/category2.png'
import DummyCategory3 from '../assets/image/category3.png'
import { API_URL } from "../utills/BaseUrl";
import axios from "axios";
import getImageURL from "../utills/getImageURL";
import { useNavigate } from "react-router-dom";

const NavModal = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(false);

    const navigate = useNavigate();

    const handleMouseEnter = () => setShow(true);
    const handleMouseLeave = () => setShow(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/categories`);
                setData(response.data.body);
            } catch (err) {
                // setError("Error fetching data");
                console.error(err);
            } finally {
                // setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleOpen = (id) => {
        navigate("/products", { state: id });
      };
    

    return (

        <div className="product-menu">
            <Dropdown
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                show={show}
            >
                <Dropdown.Toggle id="dropdown-basic" className='bg-transparent border-0 text-dark'>
                    PRODUCTS
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 d-flex align-items-start mt-4 justify-content-center">
                                <button className="menu-cat-button arrow-button">
                                    <span className=" me-3">Products</span>
                                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path
                                            d="M4 12h16m0 0l-6-6m6 6l-6 6"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {data && data.map((category) => {
                                const imageUrl = category.image ? getImageURL(category.image) : '';
                                return (
                                    <>
                                        <div className="col-3" onClick={()=>{handleOpen(category._id)}}>
                                            <div className="menu-img">
                                                <img src={imageUrl} className="img-fluid mb-2" alt={category.name} />
                                                <h2 className="fs-5 ms-4">{category.name}</h2>
                                            </div>
                                        </div>
                                    </>
                                )

                            })}
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default NavModal;
