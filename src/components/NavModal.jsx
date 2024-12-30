import React, { useState } from "react";
import "../assets/css/modal.css";
import { RxCross1 } from "react-icons/rx";
import imgModal from '../assets/image/modal-img.png'
import { Link } from "react-router-dom";


const MenuItems = [
    { id: "01", title: "About us", description: "Learn more about us here." },
    { id: "02", title: "Blog", description: "Read our latest blog posts." },
    { id: "03", title: "Environmental", description: "Our environmental initiatives." },
    { id: "04", title: "Certifications", description: "Certifications we have achieved." },
    { id: "05", title: "Contact us", description: "Get in touch with us." },
  ];
const ProductItems = [
    { id: "01", title: "Exterior", description: "Learn more about us here." },
    { id: "02", title: "Blog", description: "Read our latest blog posts." },
    { id: "03", title: "Environmental", description: "Our environmental initiatives." },
    { id: "04", title: "Certifications", description: "Certifications we have achieved." },
    { id: "05", title: "Contact us", description: "Get in touch with us." },
  ];
const LangItems = [
    { id: "01", title: "About us", description: "Learn more about us here." },
    { id: "02", title: "Blog", description: "Read our latest blog posts." },
    { id: "03", title: "Environmental", description: "Our environmental initiatives." },
    { id: "04", title: "Certifications", description: "Certifications we have achieved." },
    { id: "05", title: "Contact us", description: "Get in touch with us." },
  ];


const NavModal = ({ onClose }) => {

    return (
        <div className="app-container">
            {/* <div className="modal-overlay" onClick={onClose}> */}
            <div
                className="modal-contents"
                onClick={(e) => e.stopPropagation()} 
            >
                <div className="d-flex align-items-start justify-content-between">
                    <div className="left">
                        <button className="close-button" onClick={onClose}>
                            <RxCross1 />
                        </button>
                        <img src={imgModal} alt="modal" className="mb-5" height={"300px"} />
                    </div>
                    <div className="right mt-5 me-5">
                    <p><Link to={'/about'} className="active"> <span className="me-2">01</span> About us</Link></p>
                    <p><Link to={'/blog'}><span className="me-2">02</span> Blog</Link></p>
                    <p><Link to={'/environmental'}><span className="me-2">03</span> Environmental</Link></p>
                    <p><Link to={'/certification'}><span className="me-2">04</span> Certifications</Link></p>
                    <p><span className="me-2">05</span> Contact us</p>
                    </div>
                </div>

            </div>
            {/* </div> */}
        </div>
    );
};

export default NavModal;
