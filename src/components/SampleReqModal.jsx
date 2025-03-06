import Modal from 'react-bootstrap/Modal';
import 'react-select-search/style.css';
import '../assets/css/samplemodal.css'
import { BsCart3 } from "react-icons/bs";
import { CounterContext } from '../context/CounterContext';
import { useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';
import getImageURL from '../utills/getImageURL';
import Product1 from '../assets/image/product1.png'
import { useState } from 'react';



function SampleReqModal({ show, handleSampleModleClose, data }) {
    const [showAll, setShowAll] = useState(false);
  
    const sizes = data.sizes || [];
    const visibleSizes = showAll ? sizes : sizes.slice(0, 3);
    const remainingCount = sizes.length - 3;

    const { addData } = useContext(CounterContext);
    const handeAddToCart = () => {
        addData(data);
        handleSampleModleClose();

    }

    const imageUrl = data.a4Image ? getImageURL(data.a4Image) : '';
    // const imageUrl = Product1;


    return (
        <Modal show={show} onHide={handleSampleModleClose}>
            <button className='closeButton sample-modal-close' onClick={handleSampleModleClose}><RxCross1 /> </button>
            <div className='Sample-modal'>
                <div className="sample-box">
                    <div className="d-flex">
                        <div className="img-box">
                            <img src={imageUrl} alt={data.name} />
                        </div>
                        <div className="content">
                            <h3>ORDER A SAMPLE</h3>
                            <h2>{data.name}</h2>
                            <p>{data.subCategory && data.subCategory.name}</p>
                            <p className='mb-1'><strong>Category : </strong>{data.categories?.map((cat) => (<>{cat.name}</>))}</p>
                            <p className="mb-1">
                                <strong>Size :</strong> {visibleSizes.map((cat, index) => (
                                    <span key={index}>
                                        {cat.title}{index !== visibleSizes.length - 1 ? ", " : ""}
                                    </span>
                                ))}

                                {sizes.length > 3 && (
                                    <button className="toggle-btn" onClick={() => setShowAll(!showAll)}>
                                        {showAll ? "See Less" : `${remainingCount} More`}
                                    </button>
                                )}
                            </p>                 
                           <button onClick={handeAddToCart}><span><BsCart3 /></span> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default SampleReqModal;
