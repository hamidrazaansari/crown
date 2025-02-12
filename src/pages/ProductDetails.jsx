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
    const [matchingFinishes, setMatchingFinishes] = useState([]); // Store matching finishes

    const defaultSize = products.sizeFinishes?.length > 0 ? products.sizeFinishes[0]?.size?.title : "";
    const [selectedSize, setSelectedSize] = useState(defaultSize);


    const sizeOptions = products.sizeFinishes?.map((item) => ({
        value: item._id,
        name: item.size?.title, // Display size title
    }));

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
        console.log(imageUrl);

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
    const selectedSizeObj = products.sizeFinishes?.find((item) =>
        item.size?.title === selectedSize);


    console.log(products);

    const imgURL = getImageURL(products.a4Image)
    const imgURLfullsheet = getImageURL(products.fullSheetImage)
    const imgURLHighresulation = getImageURL(products.highResolutionImage)

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
                                {imageType === 'A4' ? <img src={imgURL} alt={products.name} /> : <img src={imgURLfullsheet} alt={products.name} />}
                                {imageType === 'A4' ? <div className="a4">A4</div> : <div className="a4">Full Sheet</div>}
                                {/* <div className="line"></div>
                                <h4>{products.name}</h4> */}
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="img-ideecator" onClick={() => { setImageType('A4') }}>
                                    <img src={imgURL} alt={products.name} />
                                </div>
                                <div className="img-ideecator" onClick={() => { setImageType('full-sheet') }}>
                                    <img src={imgURLfullsheet} alt={''} />
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
                                    <button onClick={() => handleDownload(products.highResolutionImage)} className='d-flex flex-column justify-content-center align-items-center highRegImg'><img src={File} height={"21px"} alt="full screen icon" /><span>Download <br /> High Resolution File</span></button>
                                </div>

                                <p className='d-flex align-items-center justify-content-between'><span className='key'>Product Category</span>
                                    <span style={{ position: "relative", right: "55px" }}  >
                                        {products.categories?.map((cat) => (
                                            <div className='me-2'>
                                                {cat.name}
                                            </div>

                                        )
                                        )}
                                    </span>
                                </p>
                                <p><span className='key'>Decor Number </span><span className='ms-1'>{products.decorNumber}</span></p>
                                <p><span className='key'>Decor Name </span><span className='ms-1'>{products.decorSeries?.title}</span></p>

                                <p className='d-flex justify-content-between align-items-center'><span className='key'>Size</span><span>
                                    <SelectSearch
                                        options={sizeOptions}
                                        value={selectedSize}
                                        onChange={setSelectedSize}
                                        search
                                    />
                                </span></p>
                                <p className='d-flex align-middle justify-between'><div className='key'>Finish </div>
                                    <div className='d-flex justify-baseline'>
                                        {products.sizeFinishes?.map((finish) =>
                                            finish.finishes?.map((item) => (
                                                <p key={item.shortName}>{item.shortName}</p>
                                            ))
                                        )}

                                    </div>
                              </p>

                                {/* <p><span className='key'>Dimensions(mm)</span><span >
                                        {products.sizes && products.sizes.map((size)=>(
                                                `${size.title} , `
                                    ))}
                                            </span> 
                                            </p> */}
                                <p className='desc'></p>

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