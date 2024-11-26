import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css';
import '../assets/css/order.css';
import { useLocation } from 'react-router-dom';
import { API_URL } from '../utills/BaseUrl';
import axios from 'axios';

function Order() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [locality, setLocality] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pincode, setPincode] = useState('');

    const data = useLocation();
    console.log(data.state)

    const options = [
        { name: 'India', value: 'India', type: 'country' },
        { name: 'United States', value: 'United States', type: 'country' },
        { name: 'Canada', value: 'Canada', type: 'country' },
        { name: 'United Kingdom', value: 'United Kingdom', type: 'country' },
        { name: 'Australia', value: 'Australia', type: 'country' },
        { name: 'Germany', value: 'Germany', type: 'country' },
        { name: 'France', value: 'France', type: 'country' },
        { name: 'Spain', value: 'Spain', type: 'country' },
        { name: 'Sweden', value: 'Sweden', type: 'country' },
        { name: 'Japan', value: 'Japan', type: 'country' },
        { name: 'China', value: 'China', type: 'country' },
        { name: 'Russia', value: 'Russia', type: 'country' }
    ];
    
    const stateOptionsByCountry = {
        India: [
            { name: 'Maharashtra', value: 'Maharashtra' },
            { name: 'Delhi', value: 'Delhi' },
            { name: 'Karnataka', value: 'Karnataka' },
            // Add more states as needed
        ],
        "United States": [
            { name: 'California', value: 'California' },
            { name: 'Texas', value: 'Texas' },
            { name: 'New York', value: 'New York' },
            // Add more states as needed
        ],
        Canada: [
            { name: 'Ontario', value: 'Ontario' },
            { name: 'Quebec', value: 'Quebec' },
            { name: 'British Columbia', value: 'British Columbia' },
            // Add more provinces as needed
        ],
        // Add other countries and their states/provinces here
    };
    

    const handleCountryChange = (selectedCountry) => {
        setCountry(selectedCountry);
        setState('');  
    };
    const products = data.state && data.state.map(item => ({
        product: item._id, 
        qty: "1"            
    }));
    const handlePlaceOrder = async()=>{
        const response = await axios.post(`${API_URL}/orders` , {
            name,
            mobile,
            email,
            products,
            address,
            locality,
            city,
            state,
            country,
            pincode,
        })
        console.log(response)
        alert(response.data.message)
    }
    return (
        <div>
            <NavBar />
            <div className="container placeOrder">
                <div className="row">
                    <div className="col-md-8">
                        <h2>Delivery Address</h2>
                        <div className="row">
                            <div className="col-12">
                                <div className='d-flex flex-column country'>
                                    <label htmlFor="country">Country/Region</label>
                                    <SelectSearch
                                        options={options}
                                        value={country}
                                        onChange={handleCountryChange}
                                        placeholder="Select Country"
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <input type="text" id='name' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="col-6">
                                <input type="email" id='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <textarea name="address" id="address" placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text" placeholder='Apartment, suite, etc. (Optional)' onChange={(e) => setLocality(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <input type="text" placeholder='City' onChange={(e) => setCity(e.target.value)} />
                            </div>
                            <div className="col-4">
                                <SelectSearch
                                    options={country ? stateOptionsByCountry[country] : []}
                                    value={state}
                                    onChange={setState}
                                    placeholder="Select State"
                                    disabled={!country}
                                />
                            </div>
                            <div className="col-4">
                                <input type="text" placeholder='PIN code' onChange={(e) => setPincode(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text" placeholder='Phone Number' onChange={(e) => setMobile(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className='order-button' onClick={handlePlaceOrder}>Place Order</button>
                                <p className='mt-1'>Your order will get delivered within 7-10 working days.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="order-box">
                            <h3>Orders</h3>
                            <hr />
                            {data.state && data.state.map((item, index) => {
                                const imageUrl = item.defaultImage ? item.defaultImage.replace('http://localhost:5000', 'http://13.233.121.43:5000') : '';

                                return (
                                    <div key={index} className="d-flex align-items-center" style={{ background: "#fff", padding: "5px" }}>
                                        <img src={imageUrl} alt="" />
                                        <div className="order-info mx-3">
                                            <h2>{item.name}</h2>
                                            <p>{item.subCategory.name}</p>
                                            <p>{item.sizes[0].title}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;


