import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import DetailsForm from '../components/DetailsForm'
import '../assets/css/products.css'
import ProductBanner from '../assets/image/Products-banner.png'
import { Accordion } from 'react-bootstrap'
import { Link ,useLocation } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import { API_URL } from '../utills/BaseUrl'
import axios from 'axios'


function ProductListing() {
    const [products, setProducts] = useState('');
    const [sizes, setSizes] = useState('');
    const [types , setTypes] =useState(''); 
    const [subCategory , setSubCategory] =useState(''); 
    const [catHeader , setCatHeader] =useState(''); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            try {
                const response = await axios.get(`${API_URL}/categories/${catgoryId}`);
                setCatHeader(response.data.body);
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
        fetchSizes();
        fetchTypes();
        fetchHeader();
        fetchSubCategory();
    }, []);

    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
        <div>
            <NavBar />
            <div className="container mt-5">
                <div className="breadcrumb">
                    <p><a href="/">HOME</a><span> / </span> <a href="/" className='ms-2'>Exterior Compacts</a> </p>
                </div>
            </div>
            <div className="container">
                <div className="product-banner">

                    <img src={ProductBanner} alt="product banner" />
                    <div className="content">
                        <h2>{catHeader.textOverImage}</h2>
                        <div className="line"></div>
                        <p>{ catHeader.listingDescription ? catHeader.listingDescription
:                       ` Our crownXCL panels are extremely durable and protect effectively against weather and uv radiation.
                            CrownXCL conforms to north america fire standards, CrownXCL panels are easy to machine, install,
                            maintain and offer a wide range of decorative possibilities. `}</p>
                    </div>
                </div>
            </div>
            <div className="product-listing mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="sidebar">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <h3>Search by decor code</h3>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <input type="text" placeholder='search' className='search' />
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <h3 className='mt-3'>FILTER BY SIZE</h3>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="row">
                                        {sizes && sizes.map((size) => {
                                            return (
                                                <div className="col-6" key={size._id}>
                                                    <button>{size.title}</button>
                                                </div>
                                            )

                                        })}
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <h3 className='mt-3'>FILTER BY TYPE</h3>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="row">
                                    {types && types.map((type) => {
                                            return (
                                                <div className="col-6" key={type._id}>
                                                    <button>{type.title}</button>
                                                </div>
                                            )

                                        })}
                                    </div>
                                </ScrollAnimation>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>EXTERIOR COMPACTS</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                {subCategory && subCategory.map((item)=>{
                                                    return(
                                                        <li><a href="/" key={item._id}>{item.name}</a></li>
                                                    )
                                                })}
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>VIEW ENTIRE RANGE</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li><a href="/">Cladding (XCL)</a></li>
                                                <li><a href="/">Fencing</a></li>
                                                <li><a href="/">Decking (Impressions)</a></li>
                                                <li><a href="/">Table Tops (Tabillo)</a></li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="main">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <h3>{catHeader.name}</h3>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <p>{ catHeader.listingDescription ? catHeader.listingDescription : `Explore our wide range of elegant high pressure Exterior Compacts to find the products that suits your needs best.`}</p>
                                </ScrollAnimation>
                                <div className="row mt-3">
                                    {products && products.map((product) => {

                                        const imageUrl = product.defaultImage ? product.defaultImage.replace('http://localhost:5000', 'http://13.233.121.43:5000') : '';

                                        return (
                                            <>
                                                <div className="col-lg-4">
                                                    <Link to={`/product-details/${product._id}`}>
                                                        <ScrollAnimation animateIn="fadeInUp">
                                                            <div className="product-box">
                                                                <img src={imageUrl} alt="product1" />
                                                                <div className="line"></div>
                                                                <h4>{product.name}</h4>
                                                            </div>
                                                        </ScrollAnimation>
                                                    </Link>
                                                </div>
                                            </>
                                        )
                                    })

                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DetailsForm />
            <Footer />
        </div>
    )
}

export default ProductListing