import React, { useState ,useEffect } from 'react'
import NavBar from '../components/NavBar'
import Product1 from '../assets/image/product1.png'
import '../assets/css/product-details.css'
import DetailsForm from '../components/DetailsForm'
import Footer from '../components/Footer'
import ShowAllProducts from '../components/ShowAllProducts'
import InquiryModal from '../components/InquiryModal'
import SampleReqModal from '../components/SampleReqModal'
import FullImageView from '../components/FullImageView'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../utills/BaseUrl'


function ProductDetails() {
    const {id}= useParams();

    const [show, setShow] = useState(false);
    const [showSample, setShowSample] = useState(false);
    const [showFullImage, setShowFullImage] = useState(false);
    const [products, setProducts] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${API_URL}/products/${id}`);
                setProducts(response.data.body);
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    // function for full image view 
    const handleOpenImage = () => {
        setShowFullImage(true);
    };

    const handleCloseImage = () => {
        setShowFullImage(false);
    };


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleSampleModleShow = () => setShowSample(true);
    const handleSampleModleClose = () => setShowSample(false);


    const handleDownload = (imageUrl) => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'downloaded-image.jpg'; // This is the filename for the download
        document.body.appendChild(link);
        link.click(); // Trigger download
        document.body.removeChild(link); // Remove link after downloading
      };
      const imageUrl = products.defaultImage ? products.defaultImage.replace('http://localhost:5000', 'http://13.233.121.43:5000') : '';


    return (
        <div>
            <InquiryModal show={show} handleClose={handleClose} />
            <SampleReqModal show={showSample} handleSampleModleClose={handleSampleModleClose} data={products} />

            <NavBar />
            <div className="container mt-5">
                <div className="breadcrumb">
                    <p><a href="/">HOME</a><span> / </span> <a href="/" className='ms-2'>Exterior Compacts</a> </p>
                </div>
            </div>
            <div className="product-details my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className='image-title'>STANDARD GRADE</h3>
                            <div className="img-box">
                                <img src={imageUrl} alt="" />
                                <div className="line"></div>
                                <h4>{products.name}</h4>
                            </div>
                            <div className="d-flex align-items-center justify-content-center action-btn">
                                <button onClick={handleOpenImage}>FULL VIEW</button>
                                <button onClick={()=> handleDownload(Product1)}>IMAGE DOWNLOAD</button>
                            </div>
                            {showFullImage && (
                                <FullImageView
                                    imageUrl={imageUrl}
                                    onClose={handleCloseImage}
                                />
                            )}

                        </div>
                        <div className="col-lg-6">
                            <div className="details-product">
                                <h1>{products.name}</h1>
                                <div className="line"></div>
                                <p>Product Category : <span>Abstract</span> </p>
                                <p>Decor Number : <span>{products.decorNumber}</span></p>
                                <p>Decor Name : <span>{products.decorName}</span></p>
                                <p>Finish : <span>{products.finish}</span></p>
                                <div className="d-flex">
                                    <p>Dimensions(mm):</p>
                                        <span className='size'>
                                        {products.sizes && products.sizes.map((size)=>(
                                                `${size.title} , `
                                    ))}
                                            </span> 
                                      
                                </div>
                                <div className="d-flex mt-4">
                                    <button className='sample-btn' onClick={handleSampleModleShow}>Sample Request</button>
                                    <button className='enq-btn' onClick={handleShow}>Enquire Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShowAllProducts />
            <DetailsForm />
            <Footer />
        </div>
    )
}

export default ProductDetails