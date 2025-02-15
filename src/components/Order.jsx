import React, { useState, useEffect, useContext } from 'react';
import NavBar from './NavBar';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css';
import '../assets/css/order.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_URL } from '../utills/BaseUrl';
import axios from 'axios';
import getImageURL from '../utills/getImageURL';
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from 'react-toastify';
import { CounterContext } from '../context/CounterContext';



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
    const [error, setError] = useState({
        name: '',
        mobile: '',
        email: '',
        products: '',
        address: '',
        locality: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
    })
    const data = useLocation();


    const [orderData, setOrderData] = useState([]);

    const { removeItemById } = useContext(CounterContext);

    useEffect(() => {
        if (Array.isArray(data.state)) {
            setOrderData(data.state);
        }
    }, [data.state]);

    console.log(orderData);


    const handleRemoveItem = (indexToRemove, id) => {
        const updatedOrders = orderData.filter((_, index) => index !== indexToRemove);
        setOrderData(updatedOrders);
        removeItemById(id)
    };

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
            { name: 'Andhra Pradesh', value: 'Andhra Pradesh' },
            { name: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
            { name: 'Assam', value: 'Assam' },
            { name: 'Bihar', value: 'Bihar' },
            { name: 'Chhattisgarh', value: 'Chhattisgarh' },
            { name: 'Goa', value: 'Goa' },
            { name: 'Gujarat', value: 'Gujarat' },
            { name: 'Haryana', value: 'Haryana' },
            { name: 'Himachal Pradesh', value: 'Himachal Pradesh' },
            { name: 'Jharkhand', value: 'Jharkhand' },
            { name: 'Karnataka', value: 'Karnataka' },
            { name: 'Kerala', value: 'Kerala' },
            { name: 'Madhya Pradesh', value: 'Madhya Pradesh' },
            { name: 'Maharashtra', value: 'Maharashtra' },
            { name: 'Manipur', value: 'Manipur' },
            { name: 'Meghalaya', value: 'Meghalaya' },
            { name: 'Mizoram', value: 'Mizoram' },
            { name: 'Nagaland', value: 'Nagaland' },
            { name: 'Odisha', value: 'Odisha' },
            { name: 'Punjab', value: 'Punjab' },
            { name: 'Rajasthan', value: 'Rajasthan' },
            { name: 'Sikkim', value: 'Sikkim' },
            { name: 'Tamil Nadu', value: 'Tamil Nadu' },
            { name: 'Telangana', value: 'Telangana' },
            { name: 'Tripura', value: 'Tripura' },
            { name: 'Uttar Pradesh', value: 'Uttar Pradesh' },
            { name: 'Uttarakhand', value: 'Uttarakhand' },
            { name: 'West Bengal', value: 'West Bengal' }
            // Add more states as needed
        ],
"United States": [
    { name: 'Alabama', value: 'Alabama' },
    { name: 'Alaska', value: 'Alaska' },
    { name: 'Arizona', value: 'Arizona' },
    { name: 'Arkansas', value: 'Arkansas' },
    { name: 'California', value: 'California' },
    { name: 'Colorado', value: 'Colorado' },
    { name: 'Connecticut', value: 'Connecticut' },
    { name: 'Delaware', value: 'Delaware' },
    { name: 'Florida', value: 'Florida' },
    { name: 'Georgia', value: 'Georgia' },
    { name: 'Hawaii', value: 'Hawaii' },
    { name: 'Idaho', value: 'Idaho' },
    { name: 'Illinois', value: 'Illinois' },
    { name: 'Indiana', value: 'Indiana' },
    { name: 'Iowa', value: 'Iowa' },
    { name: 'Kansas', value: 'Kansas' },
    { name: 'Kentucky', value: 'Kentucky' },
    { name: 'Louisiana', value: 'Louisiana' },
    { name: 'Maine', value: 'Maine' },
    { name: 'Maryland', value: 'Maryland' },
    { name: 'Massachusetts', value: 'Massachusetts' },
    { name: 'Michigan', value: 'Michigan' },
    { name: 'Minnesota', value: 'Minnesota' },
    { name: 'Mississippi', value: 'Mississippi' },
    { name: 'Missouri', value: 'Missouri' },
    { name: 'Montana', value: 'Montana' },
    { name: 'Nebraska', value: 'Nebraska' },
    { name: 'Nevada', value: 'Nevada' },
    { name: 'New Hampshire', value: 'New Hampshire' },
    { name: 'New Jersey', value: 'New Jersey' },
    { name: 'New Mexico', value: 'New Mexico' },
    { name: 'New York', value: 'New York' },
    { name: 'North Carolina', value: 'North Carolina' },
    { name: 'North Dakota', value: 'North Dakota' },
    { name: 'Ohio', value: 'Ohio' },
    { name: 'Oklahoma', value: 'Oklahoma' },
    { name: 'Oregon', value: 'Oregon' },
    { name: 'Pennsylvania', value: 'Pennsylvania' },
    { name: 'Rhode Island', value: 'Rhode Island' },
    { name: 'South Carolina', value: 'South Carolina' },
    { name: 'South Dakota', value: 'South Dakota' },
    { name: 'Tennessee', value: 'Tennessee' },
    { name: 'Texas', value: 'Texas' },
    { name: 'Utah', value: 'Utah' },
    { name: 'Vermont', value: 'Vermont' },
    { name: 'Virginia', value: 'Virginia' },
    { name: 'Washington', value: 'Washington' },
    { name: 'West Virginia', value: 'West Virginia' },
    { name: 'Wisconsin', value: 'Wisconsin' },
    { name: 'Wyoming', value: 'Wyoming' }
],

        Canada: [
            { name: 'Ontario', value: 'Ontario' },
            { name: 'Quebec', value: 'Quebec' },
            { name: 'British Columbia', value: 'British Columbia' },
            // Add more provinces as needed
        ],
        // Add other countries and their states/provinces here
        "Canada": [
    { name: 'Alberta', value: 'Alberta' },
    { name: 'British Columbia', value: 'British Columbia' },
    { name: 'Manitoba', value: 'Manitoba' },
    { name: 'New Brunswick', value: 'New Brunswick' },
    { name: 'Newfoundland and Labrador', value: 'Newfoundland and Labrador' },
    { name: 'Northwest Territories', value: 'Northwest Territories' },
    { name: 'Nova Scotia', value: 'Nova Scotia' },
    { name: 'Nunavut', value: 'Nunavut' },
    { name: 'Ontario', value: 'Ontario' },
    { name: 'Prince Edward Island', value: 'Prince Edward Island' },
    { name: 'Quebec', value: 'Quebec' },
    { name: 'Saskatchewan', value: 'Saskatchewan' },
    { name: 'Yukon', value: 'Yukon' }
],
"Australia": [
    { name: 'New South Wales', value: 'New South Wales' },
    { name: 'Victoria', value: 'Victoria' },
    { name: 'Queensland', value: 'Queensland' },
    { name: 'Western Australia', value: 'Western Australia' },
    { name: 'South Australia', value: 'South Australia' },
    { name: 'Tasmania', value: 'Tasmania' },
    { name: 'Australian Capital Territory', value: 'Australian Capital Territory' },
    { name: 'Northern Territory', value: 'Northern Territory' }
],

"United Kingdom": [
    { name: 'England', value: 'England' },
    { name: 'Scotland', value: 'Scotland' },
    { name: 'Wales', value: 'Wales' },
    { name: 'Northern Ireland', value: 'Northern Ireland' }
],

"Germany": [
    { name: 'Baden-Württemberg', value: 'Baden-Württemberg' },
    { name: 'Bavaria', value: 'Bavaria' },
    { name: 'Berlin', value: 'Berlin' },
    { name: 'Brandenburg', value: 'Brandenburg' },
    { name: 'Bremen', value: 'Bremen' },
    { name: 'Hamburg', value: 'Hamburg' },
    { name: 'Hesse', value: 'Hesse' },
    { name: 'Lower Saxony', value: 'Lower Saxony' },
    { name: 'Mecklenburg-Vorpommern', value: 'Mecklenburg-Vorpommern' },
    { name: 'North Rhine-Westphalia', value: 'North Rhine-Westphalia' },
    { name: 'Rhineland-Palatinate', value: 'Rhineland-Palatinate' },
    { name: 'Saarland', value: 'Saarland' },
    { name: 'Saxony', value: 'Saxony' },
    { name: 'Saxony-Anhalt', value: 'Saxony-Anhalt' },
    { name: 'Schleswig-Holstein', value: 'Schleswig-Holstein' },
    { name: 'Thuringia', value: 'Thuringia' }
],

"France": [
    { name: 'Auvergne-Rhône-Alpes', value: 'Auvergne-Rhône-Alpes' },
    { name: 'Bourgogne-Franche-Comté', value: 'Bourgogne-Franche-Comté' },
    { name: 'Brittany', value: 'Brittany' },
    { name: 'Centre-Val de Loire', value: 'Centre-Val de Loire' },
    { name: 'Corsica', value: 'Corsica' },
    { name: 'Grand Est', value: 'Grand Est' },
    { name: 'Hauts-de-France', value: 'Hauts-de-France' },
    { name: 'Île-de-France', value: 'Île-de-France' },
    { name: 'Normandy', value: 'Normandy' },
    { name: 'Nouvelle-Aquitaine', value: 'Nouvelle-Aquitaine' },
    { name: 'Occitanie', value: 'Occitanie' },
    { name: 'Pays de la Loire', value: 'Pays de la Loire' },
    { name: 'Provence-Alpes-Côte d\'Azur', value: 'Provence-Alpes-Côte d\'Azur' }
]

    };


    const handleCountryChange = (selectedCountry) => {
        setCountry(selectedCountry);
        setState('');
    };


    const handlePlaceOrder = async () => {
        const products = orderData && orderData.length > 0
            ? orderData.map(item => ({
                product: item._id,
                qty: "1"
            }))
            : (toast.error("No data available"), []);
        try {
            const response = await axios.post(`${API_URL}/orders`, {
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
            if (products.length > 0) {
                toast.success(response.data.message)
                removeItemById(products._id)
                navigate('/thank-you')

            }

        } catch (error) {
            const errorData = error.response?.data?.errors
            console.log(errorData);
            setError({
                name: errorData?.name || '',
                mobile: errorData?.mobile || '',
                email: errorData?.email || '',
                products: errorData?.products || '',
                address: errorData?.address || '',
                locality: errorData?.locality || '',
                city: errorData?.city || '',
                state: errorData?.state || '',
                country: errorData?.country || '',
                pincode: errorData?.pincode || '',
            });
        }
    }

    const navigate = useNavigate();

    const handleGoto = () => {

        navigate("/");
    };

    return (
        <div>
            <ToastContainer />
            <NavBar />
            <div className="container placeOrder">
                <div className="row">
                    <div className="col-md-8">
                        <div className="order-form">
                            <h2>Delivery Address</h2>
                            <div className="row">
                                <div className="col-12" style={{ position: 'relative' }}>
                                    <div className='d-flex flex-column country'>
                                        <label htmlFor="country">Country/Region</label>
                                        <SelectSearch
                                            options={options}
                                            value={country}
                                            onChange={handleCountryChange}
                                            placeholder="Select Country"
                                        />
                                        {error.country && (
                                            <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                                {error.country}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6" style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (/^[A-Za-z\s]*$/.test(value)) {
                                                setName(value);
                                            }
                                        }}
                                    />
                                    {error.name && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.name}
                                        </div>
                                    )}
                                </div>
                                <div className="col-6" style={{ position: 'relative' }}>
                                    <input type="email" id='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                                    {error.email && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.email}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12" style={{ position: 'relative' }}>
                                    <textarea name="address" id="address" placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
                                    {error.address && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.address}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="row"  >
                                <div className="col-12" style={{ position: 'relative' }}>
                                    <input type="text" placeholder='Apartment, suite, etc. (Optional)' onChange={(e) => setLocality(e.target.value)} />
                                    {error.locality && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.locality}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-4" style={{ position: 'relative' }}>
                                    <input type="text" placeholder='City'
                                        value={city}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (/^[A-Za-z\s]*$/.test(value)) {
                                                setCity(value);
                                            }
                                        }} />
                                    {error.city && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.city}
                                        </div>
                                    )}
                                </div>
                                <div className="col-4 state" style={{ position: 'relative' }}>
                                    <SelectSearch
                                        options={country ? stateOptionsByCountry[country] : []}
                                        value={state}
                                        onChange={setState}
                                        placeholder="Select State"
                                        disabled={!country}
                                    />
                                    {error.state && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.state}
                                        </div>
                                    )}
                                </div>
                                <div className="col-4" style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        placeholder="PIN code"
                                        value={pincode}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (/^\d*$/.test(value)) {
                                                setPincode(value);
                                            }
                                        }}
                                    />
                                    {error.pincode && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.pincode}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="row"  >
                                <div className="col-12" style={{ position: 'relative' }}>
                                    <input
                                        type="text"
                                        placeholder="Mobile"
                                        value={mobile}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (/^\d*$/.test(value)) {
                                                setMobile(value);
                                            }
                                        }}
                                    />
                                    {error.mobile && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.mobile}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-12" style={{ position: 'relative' }}>
                                    <button className='order-button' onClick={handlePlaceOrder}>Place Order</button>
                                    <p className='mt-1'>Your order will get delivered within 7-10 working days.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="order-box">
                            <h3>Orders</h3>
                            <hr />
                            {orderData.length > 0 ? (
                                orderData.map((item, index) => {
                                    const imageUrl = item.a4Image ? getImageURL(item.a4Image) : '';
                                    return (
                                        <div key={index} className="d-flex align-items-center" style={{ background: "#fff", padding: "5px", position: "relative" }}>
                                            <button className="cancelBtn" onClick={() => handleRemoveItem(index, item._id)}><RxCross2 /></button>
                                            <img src={imageUrl} alt="" />
                                            <div className="order-info mx-3">
                                                <h2>{item.name}</h2>
                                                <p>{item.type?.title}</p>
                                                <p>{item.sizes?.map((cat, i) => (<span key={i}>{cat.title}, </span>))}</p>
                                                <p>{item.categories?.map((cat, i) => (<span key={i}>{cat.name}</span>))}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="text-center my-3 empty-cart">
                                    <h4>No Orders Found</h4>
                                    <p>Looks like you haven't added any orders yet.</p>
                                    <button onClick={handleGoto}> Go To Products</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;


