import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { API_URL } from '../utills/BaseUrl';
import '../assets/css/navbar.css';
import getImageURL from '../utills/getImageURL';
import { Link, useNavigate } from 'react-router-dom';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    const [category, setCategory] = useState([]);
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        if (!searchQuery.trim()) return; // Run only when searchQuery is not empty

        const fetchResults = async () => {
            try {
                const [productRes, categoryRes] = await Promise.all([
                    axios.get(`${API_URL}/products?searchQuery=${searchQuery}`),
                    axios.get(`${API_URL}/categories?searchQuery=${searchQuery}`)
                ]);

                setData(productRes.data.body || []);
                setCategory(categoryRes.data.body || []);
                setDisplay(true);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const debounceTimer = setTimeout(fetchResults, 300); // Debounce API calls

        return () => clearTimeout(debounceTimer); // Cleanup function
    }, [searchQuery]);

    const navigate = useNavigate();

    return (
        <>
            <div className='search-product'>
                <input
                    type="text"
                    className='search-input'
                    placeholder='Search Products'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={() => setTimeout(() => setDisplay(false), 350)}
                    onFocus={() => searchQuery && setDisplay(true)}
                />
                <button className='search-btn'> <IoSearchOutline /> </button>
            </div>

            {display && searchQuery && (
                <div className="search-box">
                    {data.length > 0 && data.slice(0, 5).map((item) => (
                        <Link to={`/product-details/${item.slug}`} state={{slug:item.slug}} key={item._id}>
                            <div className='d-flex align-items-center my-3'>
                                <img src={item.a4Image ? getImageURL(item.a4Image) : ''} alt={item.name} className='search-img' />
                                <div>
                                    <p className='mb-0 ms-2'>{item.name}</p>
                                    <small className='me'>{item?.decorNumber}</small>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {category.length > 0 && (
                        <>
                            <h3>Categories</h3>
                            {category.map((item) => (
                                <Link to={`/${item.slug}`} key={item.slug}>
                                    <div className='d-flex align-items-center my-3' style={{ cursor: "pointer" }}>
                                        <p className='mb-0 ms-2'>{item.name}</p>
                                    </div>
                                </Link>
                            ))}
                        </>
                    )}
                </div>
            )}
        </>
    );
}

export default SearchBar;
