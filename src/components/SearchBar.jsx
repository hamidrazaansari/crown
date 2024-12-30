import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { API_URL } from '../utills/BaseUrl';
import '../assets/css/navbar.css'


function SearchBar() {
    const [searchQuery , setSearchQuery] = useState('') 
    const [data , setData] = useState('');
    const [category , setCategory] = useState('');

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/products?searchQuery=${searchQuery}`);
                setData(response.data.body);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`${API_URL}/categories?searchQuery=${searchQuery}`);
                setCategory(response.data.body);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
        fetchCategory();
    }, [searchQuery]);
    
    return (
        <>
            <div className='search-product'>
                <input type="text" className='search-input' placeholder='Search Products' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
                <button className='search-btn'> <IoSearchOutline /> </button>
            </div>
            <div className={searchQuery ? "search-box" : 'd-none' }>
                {data && data.map((item)=>{
                    const imageUrl = item.defaultImage ? item.defaultImage.replace('http://localhost:5000', 'http://13.233.121.43:5000') : '';

                    return(
                        <div className='d-flex align-items-center  my-3'>
                            <img src={imageUrl} alt="" className='search-img'/>
                            <p className='mb-0 ms-2'>{item.name}</p>
                        </div>
                    )
                })}
                <h3>Categories</h3>
                {category && category.map((item)=>{
                    return(
                        <div className='d-flex align-items-center  my-3'>
                            <p className='mb-0 ms-2'>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default SearchBar