import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../assets/css/product-details.css";
import "../assets/css/details.css";
import SelectSearch from "react-select-search";
import "react-select-search/style.css";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { API_URL } from "../utills/BaseUrl";
import { toast } from "react-toastify";

function InquiryModal({ show, handleClose , productId }) {
    const [formData, setFormData] = useState({
        country: "",
        name: "",
        email: "",
        mobile: "",
        inquiryType:'PRODUCT',
        countryCode:"+91"
    });

    const [errors, setErrors] = useState({
        country: "",
        name: "",
        email: "",
        mobile: "",
        product:''
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

        if (field === "mobile") {
            if (!/^\d*$/.test(value)) {
                newErrors.mobile = "mobile number can only contain numbers.";
                return; // Prevent updating the mobile field
            } else {
                newErrors.mobile = "";
            }
        }

        if (field === "country") {
            newErrors.country = value ? "" : "Please select a country.";
        }

        setErrors(newErrors);
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async(e) => {
      e.preventDefault();

      try {
        const res = await axios.post(`${API_URL}/inquiries` , formData )
          toast.success('Form Submitted...')    
            handleClose()  
            setFormData({
              country: "",
              name: "",
              email: "",
              mobile: "",
              inquiryType:'',
              countryCode:" "
            }) 
      } catch (error) {
        console.log(error);
        
        
        let newErrors = {
          country: formData.country ? "" : "Please select a country.",
          name: formData.name ? errors.name : "Name is required.",
          email: formData.email ? errors.email : "Email is required.",
          mobile: formData.mobile ? errors.mobile : "mobile number is required.",
      };

      setErrors(newErrors);
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
                        <div className="d-flex flex-column" style={{position:"relative"}}>
                            <label htmlFor="country">Country</label>
                            <SelectSearch
                                search
                                options={options}
                                value={formData.country}
                                onChange={(value) => handleChange("country", value)}
                                placeholder="Select Country"
                            />
                            {errors.country && <small style={{ color: 'red', fontSize: "11px", position: "absolute", top: "72px" }}>{errors.country}</small>}
                        </div>

                        {/* Name Input */}
                        <div className="d-flex flex-column" style={{position:'relative'}}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                            />
                            {errors.name && <small style={{ color: 'red', fontSize: "11px", position: "absolute", top: "72px" }}>{errors.name}</small>}
                        </div>

                        {/* Email Input */}
                        <div className="d-flex flex-column" style={{position:'relative'}}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                            {errors.email && <small style={{ color: 'red', fontSize: "11px", position: "absolute", top: "72px" }}>{errors.email}</small>}
                        </div>

                        {/* mobile Input */}
                        <div className="d-flex flex-column" style={{position:'relative'}}>
                            <label htmlFor="mobile">mobile Number</label>
                            <input
                                type="text"
                                id="mobile"
                                value={formData.mobile}
                                onChange={(e) => handleChange("mobile", e.target.value)}
                            />
                            {errors.mobile && <small style={{ color: 'red', fontSize: "11px", position: "absolute", top: "72px" }}>{errors.mobile}</small>}
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
