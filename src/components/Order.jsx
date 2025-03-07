import React, { useState, useEffect, useContext } from 'react';
import NavBar from './NavBar';
import 'react-select-search/style.css';
import '../assets/css/order.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_URL } from '../utills/BaseUrl';
import axios from 'axios';
import getImageURL from '../utills/getImageURL';
import { RxCross2 } from "react-icons/rx";
import { toast, ToastContainer } from 'react-toastify';
import { CounterContext } from '../context/CounterContext';
import { useFormik } from "formik";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

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
        if (Array.isArray(data?.state)) {
            setOrderData(data.state);
        }
    }, [data?.state]);


    const handleRemoveItem = (indexToRemove, id) => {
        const updatedOrders = orderData.filter((_, index) => index !== indexToRemove);
        setOrderData(updatedOrders);
        removeItemById(id)
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

    const addressFormik = useFormik({
        initialValues: {
            country: null,
            state: null,
            city: null,
        },
        onSubmit: (values) => console.log(JSON.stringify(values)),
    });



    const { values, setFieldValue } = addressFormik;
    
    // console.log(city , state , country);
    
    

    const countries = Country.getAllCountries().map((country) => ({
        label: country.name,
        value: country.isoCode, // Use `isoCode` instead of `id`
    }));

    const states = values.country
        ? State.getStatesOfCountry(values.country).map((state) => ({
            label: state.name,
            value: state.isoCode,
        }))
        : [];

    const cities = values.state
        ? City.getCitiesOfState(values.country, values.state).map((city) => ({
            label: city.name,
            value: city.name,
        }))
        : [];

        
    console.log(State.getStatesOfCountry(values.country));

    console.log("Selected Country:", values.country);

    return (
        <div>
            <ToastContainer />
            <NavBar />

            <div className="container placeOrder">
                <div className="row">
                    <div className="col-md-8 order-md-0 order-1">
                        <div className="order-form">
                            <h2>Delivery Address</h2>
                            <div className="row">
                                <div className="col-12" style={{ position: 'relative' }}>
                                    <div className='d-flex flex-column country'>
                                        <Select
                                            options={countries}
                                            onChange={(option) => {
                                                setFieldValue("country", option.value);
                                                setFieldValue("state", null);
                                                setFieldValue("city", null);
                                                setCountry(option.label)
                                            }}
                                            value={countries.find((c) => c.value === values.country) || null}
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
                                <div className="col-lg-6" style={{ position: 'relative' }}>
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
                                <div className="col-lg-6" style={{ position: 'relative' }}>
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

                                <div className="col-lg-4 state" style={{ position: 'relative' }}>
                                    <Select
                                        options={states}
                                        onChange={(option) => {
                                            setFieldValue("state", option.value);
                                            setFieldValue("city", null);
                                            setState(option.label)
                                        }}
                                        value={states.find((s) => s.value === values.state) || null}
                                        placeholder="Select State"
                                        isDisabled={!values.country}
                                        className='mt-2'

                                    />
                                    {error.state && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.state}
                                        </div>
                                    )}
                                </div>
                                <div className="col-lg-4  " style={{ position: 'relative' }}>
                                    <Select
                                        options={cities}
                                        onChange={(option) => setFieldValue("city", option.value)}
                                        value={cities.find((c) => c.value === values.city) || null}
                                        placeholder="Select City"
                                        isDisabled={!values.state}
                                        className='mt-2'
                                    />
                                    {error.city && (
                                        <div style={{ color: 'red', fontSize: "11px", position: "absolute", top: "65px" }}>
                                            {error.city}
                                        </div>
                                    )}
                                </div>
                                <div className="col-lg-4  " style={{ position: 'relative' }}>
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
                    <div className="col-md-4 order-md-1 order-0">
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


