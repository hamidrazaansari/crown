import React from 'react'
import NavBar from './NavBar'
import SelectSearch from 'react-select-search';  // Import the correct component
import 'react-select-search/style.css';  // Add default styles if needed
import '../assets/css/order.css'
import Product1 from '../assets/image/product.png'

function Order() {
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
    const stateOptions = [
        { name: 'United States', value: 'United States', type: 'country' },
        { name: 'Canada', value: 'Canada', type: 'country' },
        { name: 'United Kingdom', value: 'United Kingdom', type: 'country' },
        { name: 'Australia', value: 'Australia', type: 'country' },
        { name: 'India', value: 'India', type: 'country' },
        { name: 'Germany', value: 'Germany', type: 'country' },
        { name: 'France', value: 'France', type: 'country' },
        { name: 'Spain', value: 'Spain', type: 'country' },
        { name: 'Sweden', value: 'Sweden', type: 'country' },
        { name: 'Japan', value: 'Japan', type: 'country' },
        { name: 'China', value: 'China', type: 'country' },
        { name: 'Russia', value: 'Russia', type: 'country' }
    ];


    return (
        <div >
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
                                        search
                                        options={options}
                                        name="language"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <input type="text" id='name' placeholder='Name' />
                            </div>
                            <div className="col-6">
                                <input type="email" id='email' placeholder='Email' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className='address'>
                                    <textarea name="address" id="address" placeholder='Address'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className='local'>
                                    <input type="text" placeholder='Apartment, suite,etc. (Optional)' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <input type="text" placeholder='City' />
                            </div>
                            <div className="col-4">
                                <SelectSearch
                                    search
                                    options={stateOptions}
                                    name="language"
                                    placeholder="State"
                                />
                            </div>
                            <div className="col-4">
                                <input type="text" placeholder='PIN code' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text" placeholder='Phone Number' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className='order-button'>Place Order</button>
                                <p className='mt-1'>Your order will get delivered within 7-10 working days.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="order-box">
                            <h3>Orders</h3>
                            <hr />
                            <div className="d-flex align-items-center " style={{background:"#fff" , padding:"5px"}}>
                                <img src={Product1} alt="" />
                                <div className="order-info mx-3">
                                    <h2>164 - SONOMA OAK</h2>
                                    <p>Abstarct</p>
                                    <p>Size : 1235*2000</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order