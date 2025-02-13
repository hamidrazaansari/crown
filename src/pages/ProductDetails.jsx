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
    const [relatedProducts, setRelatedProducts] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [imageType, setImageType] = useState('A4');
    const [selectedSize, setSelectedSize] = useState("");
    const [matchingFinishes, setMatchingFinishes] = useState([])

    const sizeOptions = products.sizeFinishes?.map((item) => ({
        value: item.size.title,
        name: item.size.title,
    })) || [];

    useEffect(() => {
        if (products.sizeFinishes?.length > 0) {
            const defaultSize = products.sizeFinishes[0].size.title;
            setSelectedSize(defaultSize);
            setMatchingFinishes(products.sizeFinishes[0].finishes);
        }
    }, [products.sizeFinishes]);

    const handleSizeChange = (selectedValue) => {
        setSelectedSize(selectedValue);

        // Find the matching size object
        const selectedSizeObject = products.sizeFinishes.find(
            (item) => item.size.title === selectedValue
        );

        // Update matching finishes
        setMatchingFinishes(selectedSizeObject ? selectedSizeObject.finishes : []);
    };

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
    }, [, id]);


    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>{error}</p>;


    const handleCloseImage = () => {
        setShowFullImage(false);
    };


    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleSampleModleShow = () => setShowSample(true);
    const handleSampleModleClose = () => setShowSample(false);


    const imgURL = getImageURL(products.a4Image)
    const imgURLfullsheet = getImageURL(products.fullSheetImage)


    // Fetch related products 
    
    useEffect(()=>{
        async function fetchRelatedProduct(){
            try {
                const response = await axios.get(`${API_URL}/products?category=${products.categories[0]?._id}`);
                setRelatedProducts(response.data.body);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        }
        fetchRelatedProduct()
    } , [products])

    console.log('relatedProducts' , relatedProducts);
    


    const handleDownload = async () => {
        try {
            const imgURLHighresulation = getImageURL(products.highResolutionImage);
    
            // Fetch the image as a Blob
            const response = await fetch(imgURLHighresulation);
            const blob = await response.blob();
    
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = "highResolutionImage.jpg"; // Set a default filename
    
            document.body.appendChild(link);
            link.click(); // Trigger download
            document.body.removeChild(link); // Cleanup
            URL.revokeObjectURL(link.href); // Free memory
        } catch (error) {
            console.error("Error downloading the image:", error);
        }
    };
    
    return (
        <div>
            <InquiryModal show={show} handleClose={handleClose} productId={products._id} />
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
                                    <button onClick={() => handleDownload()} className='d-flex flex-column justify-content-center align-items-center highRegImg'><img src={File} height={"21px"} alt="full screen icon" /><span>Download <br /> High Resolution File</span></button>
                                </div>

                                <p><span className='key'>Product Category</span><span  className='ms-1' >
                                        {products.categories?.map((cat) => (
                                            <>
                                                {cat.name}
                                            </>

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
                                        onChange={handleSizeChange}
                                        search
                                    />
                                </span></p>
                                <p className='d-flex align-middle justify-between'><div className='key'>Finish </div>
                                    <div className='d-flex justify-baseline finish'>
                                        {matchingFinishes.map((finish) => (
                                            <div key={finish._id} className="finish-item">
                                                <p>{finish.fullName}</p>
                                            </div>
                                        ))}

                                    </div>
                                </p>

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
            <ShowAllProducts relatedProducts={relatedProducts} />
            <OtherPageFooter />
        </div>
    )
}

export default ProductDetails