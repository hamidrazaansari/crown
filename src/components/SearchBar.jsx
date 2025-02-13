import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { API_URL } from '../utills/BaseUrl';
import '../assets/css/navbar.css'
import getImageURL from '../utills/getImageURL';
import { Link, useNavigate } from 'react-router-dom';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('')
    const [data, setData] = useState('');
    const [category, setCategory] = useState('');
    const [display, setDisplay] = useState(false);

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
        setDisplay(true)
        fetchData();
        fetchCategory();
    }, [searchQuery]);

    console.log(data);
    

    const navigate = useNavigate();

    const handleOpen = (id) => {
        navigate("/products", { state: id });
    };

    const hadleHideOnBLur = () => {
        setTimeout(()=>{
            setDisplay(false)
        } , 350)
    }
    return (
        <>
            <div className='search-product'>
                <input type="text" className='search-input' placeholder='Search Products' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onBlur={hadleHideOnBLur} onFocus={()=> setDisplay(true)} />
                <button className='search-btn'> <IoSearchOutline /> </button>
            </div>
            {display && (
                <div className={searchQuery ? "search-box" : 'd-none '}>
                    {data && data.map((item) => {
                        const imageUrl = item.a4Image ? getImageURL(item.a4Image) : '';
                        return (
                            <>
                            <Link to={`/product-details/${item._id}`}>
                                <div className='d-flex align-items-center  my-3' >
                                    <img src={imageUrl} alt="" className='search-img' />
                                    <p className='mb-0 ms-2'>{item.name}</p>
                                </div>
                            </Link>
                            </>

                        )
                    })}
                    <h3>Categories</h3>
                    {category && category.map((item) => {
                        return (
                            <>
                                <div className='d-flex align-items-center  my-3' style={{ cursor: "pointer" }} onClick={() => handleOpen(item._id)}>
                                    <p className='mb-0 ms-2'>{item.name}</p>
                                </div>
                            </>
                        )
                    })}
                </div>
            )}

        </>
    )
}

export default SearchBar