import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import '../assets/css/products.css';
import { Accordion } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { API_URL } from '../utills/BaseUrl';
import axios from 'axios';
import Img from '../assets/image/productbanner.png'
import getImageURL from '../utills/getImageURL';
import OtherPageFooter from '../components/OtherPageFooter';

function ProductListing() {
    const [products, setProducts] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [types, setTypes] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [catHeader, setCatHeader] = useState('')

    const location = useLocation();
    const catgoryId = location.state;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${API_URL}/products`);
                setProducts(response.data.body);
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        const fetchSizes = async () => {
            try {
                const response = await axios.get(`${API_URL}/sizes`);
                setSizes(response.data.body);
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        const fetchTypes = async () => {
            try {
                const response = await axios.get(`${API_URL}/types`);
                setTypes(response.data.body);
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        const fetchSubCategory = async () => {
            try {
                const response = await axios.get(`${API_URL}/subCategories`);
                setSubCategory(response.data.body);
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        const fetchHeader = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${API_URL}/categories/${catgoryId}`);
                setCatHeader(response.data.body); // Update state with API response
            } catch (err) {
                setError("Error fetching category header data"); // Set error message
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
    

        fetchProducts();
        fetchSizes();
        fetchTypes();
        fetchSubCategory();
        fetchHeader()
    }, []);

    const handleSizeFilter = (sizeId) => setSelectedSize(sizeId);
    const handleTypeFilter = (typeId) => setSelectedType(typeId);
    const handleSubCategoryFilter = (subCategoryId) => setSelectedSubCategory(subCategoryId);

    const filteredProducts = products
        .filter((product) => (selectedSize ? product.sizes.some(size => size._id === selectedSize) : true))
        .filter((product) => (selectedType ? product.type._id === selectedType : true))
        .filter((product) => (selectedSubCategory ? product.subCategory._id === selectedSubCategory : true));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

console.log(catHeader);

    return (
        <div>
            <NavBar />
            <div className="bgWhite py-4">
            <div className="container">
                <div className="breadcrumb mb-0">
                    <p className='mb-0'><a href="/">HOME</a><span> / </span> <a href="/" className='ms-2'>Exterior Compacts</a></p>
                </div>
            </div>
            </div>
            
            <div className="bgWhite">
            <div className="container">
            <div className='product-main-banner' >
                <div className="product-banner d-flex">
                    <div>
                        <img src={Img} alt="" />
                        <div className='banner-text-container'>
                            <h2>{catHeader.textOverImage || "Default Title"}</h2>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className="product-listing py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="sidebar">
                                    <h3>Search by decor code</h3>
                                    <input type="text" placeholder='search' className='search' />
                                    <h3 className='mt-3'>FILTER BY SIZE</h3>
                                    <div className="row">
                                        {sizes.map((size) => (
                                            <div className="col-6" key={size._id}>
                                                <button onClick={() => handleSizeFilter(size._id)}>{size.title}</button>
                                            </div>
                                        ))}
                                    </div>
                                    <h3 className='mt-3'>FILTER BY TYPE</h3>
                                    <div className="row">
                                        {types.map((type) => (
                                            <div className="col-6" key={type._id}>
                                                <button onClick={() => handleTypeFilter(type._id)}>{type.title}</button>
                                            </div>
                                        ))}
                                    </div>
                                    <h3 className='mt-3'>FILTER BY CATEGORY</h3>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Subcategory</Accordion.Header>
                                            <Accordion.Body>
                                                <ul className='list-unstyled ms-2'>
                                                    {subCategory.map((item) => (
                                                        <li key={item._id}>
                                                            <a href="/" onClick={(e) => { e.preventDefault(); handleSubCategoryFilter(item._id); }}>
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-9 products-container">
                        <h2>{catHeader.name || "Default Title"}</h2>
                        <p>{catHeader.shortDescription || "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}</p>

                            <div className="row mt-3">
                                {filteredProducts.map((product) => {
                                    const imageUrl = product.defaultImage ? getImageURL(product.defaultImage) : '';
                                    
                                    return (
                                        <div className="col-lg-4" key={product._id}>
                                            <Link to={`/product-details/${product._id}`}>
                                                    <div className="product-box">
                                                        <img src={imageUrl} alt="product" />
                                                        <div className="line"></div>
                                                        <h4>{product.name}</h4>
                                                    </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OtherPageFooter/>
        </div>
    );
}

export default ProductListing;
