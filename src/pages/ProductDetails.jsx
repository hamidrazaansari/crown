import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Product1 from '../assets/image/product1.png'
import '../assets/css/product-details.css'
import ShowAllProducts from '../components/ShowAllProducts'
import InquiryModal from '../components/InquiryModal'
import SampleReqModal from '../components/SampleReqModal'
import FullImageView from '../components/FullImageView'
import File from '../assets/image/file.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../utills/BaseUrl'
import OtherPageFooter from '../components/OtherPageFooter'
import getImageURL from '../utills/getImageURL';
import Product2 from '../assets/image/product1.png'
import Product3 from '../assets/image/product3.png'
import SelectSearch from 'react-select-search';




function ProductDetails() {
    const { id } = useParams();

    const [show, setShow] = useState(false);
    const [showSample, setShowSample] = useState(false);
    const [showFullImage, setShowFullImage] = useState(false);
    const [products, setProducts] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selected, setSelected] = useState(null);
    const [imageType, setImageType] = useState('A4');
    const [selectedSize, setSelectedSize] = useState(null); // Store selected size
    const [matchingFinishes, setMatchingFinishes] = useState([]); // Store matching finishes


    const sizeOptions = products.sizes && products.sizes.map((size) => ({
        value: size._id, // Unique identifier
        name: size.title, // Display text
    }))

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
    // const imageUrl = products.defaultImage ? getImageURL(products.defaultImage) : '';
    const imageUrl = Product2;

    const handleChange = (value) => {
        setSelected(value);
        console.log('Selected:', value);
    };

    // Handle size selection
    const handleSizeChange = (selectedId) => {
        setSelectedSize(selectedId);

        // Find the matching size in sizeFinishes
        const match = products.sizeFinishes?.find((item) => item.size === selectedId);
        if (match) {
            setMatchingFinishes(match.finishes); // Update finishes
        } else {
            setMatchingFinishes([]); // Clear finishes if no match
        }
    };

    console.log(products);
    
    return (
        <div>
            <InquiryModal show={show} handleClose={handleClose} />
            <SampleReqModal show={showSample} handleSampleModleClose={handleSampleModleClose} data={products} />

            <NavBar />
            <div className="bgWhite">
                <div className="container ">
                    <div className="breadcrumb m-0 py-3 pb-0">
                        <p><a href="/">HOME</a><span> / </span> <a href="/" className='ms-2'>Exterior Compacts</a> </p>
                    </div>
                </div>
            </div>
            <div className="product-details bgWhite py-4 pt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* <div className="img-box">
                                {imageType === 'A4' ? <img src={products.a4Image} alt={products.name} /> : <img src={products.fullSheetImage} alt={products.name} /> }
                            </div> */}

                            {/* <h3 className='image-title'>STANDARD GRADE</h3> */}
                            <div className="img-box">
                                {imageType === 'A4' ? <img src={Product2} alt={products.name} /> : <img src={Product3} alt={products.name} />}
                                {imageType === 'A4' ? <div className="a4">A4</div> : <div className="a4">Full Sheet</div>}
                                {/* <div className="line"></div>
                                <h4>{products.name}</h4> */}
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="img-ideecator" onClick={() => { setImageType('A4') }}>
                                    <img src={Product2} alt="" />
                                </div>
                                <div className="img-ideecator" onClick={() => { setImageType('full-sheet') }}>
                                    <img src={Product3} alt="" />
                                </div>
                            </div>
                            {/* <div className="d-flex align-items-center justify-content-between action-btn">
                                <button onClick={handleOpenImage}><span>FULL VIEW </span><img src={Fullscreen} alt="full screen icon" /></button>
                            </div> */}
                            {showFullImage && (
                                <FullImageView
                                    imageUrl={imageUrl}
                                    onClose={handleCloseImage}
                                />
                            )}

                        </div>
                        <div className="col-lg-6">
                            <div className="details-product">
                                <div className="d-flex align-items-center">
                                    <h1>{products.name}
                                        <div className="line"></div>
                                    </h1>
                                    <button onClick={() => handleDownload(Product1)} className='d-flex flex-column justify-content-center align-items-center highRegImg'><img src={File} height={"21px"} alt="full screen icon" /><span>Download <br /> High Resolution File</span></button>
                                </div>
                                <p><span className='key'>Product Category</span><span>Abstract</span> </p>
                                <p><span className='key'>Decor Number </span><span>{products.decorNumber}</span></p>
                                <p><span className='key'>Decor Name </span><span>{products.decorName}</span></p>

                                <p className='d-flex justify-content-between align-items-center'><span className='key'>Size</span><span>
                                    <SelectSearch
                                        options={sizeOptions}
                                        value={selected}
                                        onChange={handleSizeChange}
                                        placeholder=" "
                                        search // Enables the search functionality
                                    />
                                </span></p>
                                <p><span className='key'>Finish </span><span>
                                    {matchingFinishes.length > 0 ? (
                                        <div>
                                            {matchingFinishes.map((finish, index) => (
                                                <p key={index}>{finish.shortName}</p>
                                            ))}
                                        </div>
                                    ) : ''}
                                </span></p>

                                {/* <p><span className='key'>Dimensions(mm)</span><span >
                                        {products.sizes && products.sizes.map((size)=>(
                                                `${size.title} , `
                                    ))}
                                            </span> 
                                            </p> */}
                                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                <div className=" mt-4">
                                    <button className='enq-btn' onClick={handleShow}>Enquire Now</button>
                                    <button className='sample-btn' onClick={handleSampleModleShow}>Sample Request</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ShowAllProducts />
            <OtherPageFooter />
        </div>
    )
}

export default ProductDetails