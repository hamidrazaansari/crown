import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../assets/css/product-details.css";
import "../assets/css/details.css";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";
import { RxCross1 } from "react-icons/rx";

function InquiryModal({ show, handleClose }) {
    const [formData, setFormData] = useState({
        country: "",
        name: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState({
        country: "",
        name: "",
        email: "",
        phone: "",
    });

    const options = [
        { name: "India", value: "India", type: "country" },
        { name: "United States", value: "United States", type: "country" },
        { name: "Canada", value: "Canada", type: "country" },
        { name: "United Kingdom", value: "United Kingdom", type: "country" },
        { name: "Australia", value: "Australia", type: "country" },
        { name: "Germany", value: "Germany", type: "country" },
        { name: "France", value: "France", type: "country" },
        { name: "Spain", value: "Spain", type: "country" },
        { name: "Sweden", value: "Sweden", type: "country" },
        { name: "Japan", value: "Japan", type: "country" },
        { name: "China", value: "China", type: "country" },
        { name: "Russia", value: "Russia", type: "country" },
    ];

    const handleChange = (field, value) => {
        let newErrors = { ...errors };

        if (field === "name") {
            if (!/^[a-zA-Z\s]*$/.test(value)) {
                newErrors.name = "Name cannot contain numbers or special characters.";
                return; // Prevent updating the name field
            } else {
                newErrors.name = "";
            }
        }

        if (field === "email") {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                newErrors.email = "Enter a valid email address.";
            } else {
                newErrors.email = "";
            }
        }

        if (field === "phone") {
            if (!/^\d*$/.test(value)) {
                newErrors.phone = "Phone number can only contain numbers.";
                return; // Prevent updating the phone field
            } else {
                newErrors.phone = "";
            }
        }

        if (field === "country") {
            newErrors.country = value ? "" : "Please select a country.";
        }

        setErrors(newErrors);
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {
            country: formData.country ? "" : "Please select a country.",
            name: formData.name ? errors.name : "Name is required.",
            email: formData.email ? errors.email : "Email is required.",
            phone: formData.phone ? errors.phone : "Phone number is required.",
        };

        setErrors(newErrors);

        if (!newErrors.country && !newErrors.name && !newErrors.email && !newErrors.phone) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="inquiry-modal">
            <Modal show={show} onHide={handleClose}>
                <div className="modal-form">
                    <button className="closeButton" onClick={handleClose}>
                        <RxCross1 />
                    </button>
                    <div className="form">
                        <h4>Fill The Details</h4>

                        {/* Country Selection */}
                        <div className="d-flex flex-column">
                            <label htmlFor="country">Country</label>
                            <SelectSearch
                                search
                                options={options}
                                value={formData.country}
                                onChange={(value) => handleChange("country", value)}
                                placeholder="Select Country"
                            />
                            {errors.country && <small className="text-danger">{errors.country}</small>}
                        </div>

                        {/* Name Input */}
                        <div className="d-flex flex-column">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                            />
                            {errors.name && <small className="text-danger">{errors.name}</small>}
                        </div>

                        {/* Email Input */}
                        <div className="d-flex flex-column">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                            {errors.email && <small className="text-danger">{errors.email}</small>}
                        </div>

                        {/* Phone Input */}
                        <div className="d-flex flex-column">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="text"
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                            />
                            {errors.phone && <small className="text-danger">{errors.phone}</small>}
                        </div>

                        <button className="form-btn" onClick={handleSubmit}>
                            Enquire Now
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default InquiryModal;
