import React, { useContext, useState } from 'react';
import '../assets/css/navbar.css';
import CartIcon from '../assets/image/shopping-cart.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CounterContext } from '../../src/context/CounterContext';
import SingInModal from '../components/SingInModal';
import { FaTrashCan } from "react-icons/fa6";
import DilevaryImg from '../assets/image/delivery.png';
import getImageURL from '../utills/getImageURL';
import { Link, useNavigate } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import Product1 from '../assets/image/product1.png'
import { Modal, Button } from 'react-bootstrap';
import EmptyCart from '../assets/image/cart-empty.png'




function Cart() {
  const { count, data, clearCheckedData, toggleItemChecked, removeItemById } = useContext(CounterContext);
  const [showSignin, setShowSignin] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSigninModleShow = () => setShowSignin(true);
  const handleSigninModleClose = () => setShowSignin(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCheckOut = () => {
    if (count === 0) {
      return
    }
    else {
      navigate('/order', { state: data })
    }
  }
  console.log(data);



  return (
    <div>
      <SingInModal show={showSignin} handleSigninModleClose={handleSigninModleClose} />
      <div className='cart'>
        <div onClick={handleShow} className='cart-btn'>
          <BsCart3 />
          {count > 0 && <span className='cart-indecator'>{count}</span>}
        </div>


        <Modal className="cart-modal" show={show} onHide={handleClose}>

          <Modal.Body>
            {data && data.length > 0 ? (
              <h3>Cart</h3>
            ) : ''
            }

            {data && data.length > 0 ?         
            <div className="header d-flex">
              <h5 className='me-3'>Product Image </h5>
              <h5>Details </h5>
            </div> : ''
            }

            {data && data.length > 0 ? (
              data && data.map((item) => {
                // const imageUrl = item.defaultImage ? item.defaultImage.replace('http://localhost:5000', 'http://13.233.121.43:5000') : '';
                // const imageUrl = item.defaultImage ? getImageURL(item.defaultImage) : '';
                const imageUrl = Product1;

                return (
                  <div className="new-cart" key={item._id}>
                    <div className="d-flex align-items-center justify-content-between added-product">
                      <div className="d-flex">
                        <img src={imageUrl} alt="product" className="product-img" />
                        <div className='ms-2'>
                          <h4>{item.name || 'Abstract'}</h4>
                          <p>Decor Series : {item.decorSeries?.title || 'Abstract'}</p>
                          <p>Size : {item.sizes[0]?.title || 'Abstract'}</p>
                        </div>
                      </div>
                      <div className='d-flex flex-column align-items-end justify-content-end'>
                        <button className=" cart-dlt-btn" onClick={() => removeItemById(item._id)}><span className='me-1'><FaTrashCan /></span> Delete</button>
                        <button className="chekout-btn" onClick={handleCheckOut}>Checkout</button>
                      </div>
                    </div>


                  </div>
                );
              })
            ) : (
              <div className='d-flex align-items-center justify-content-center flex-column emptyCart pt-4'>
                <img src={EmptyCart} alt="Empty Cart" height={"115px"} />
                <p className='text-center my-3'>Your cart is currently empty. Start adding  the products</p>
                <button className='cart-btn' onClick={handleCheckOut}>Add Product</button>
              </div>
            )}
          </Modal.Body>
        </Modal>

      </div>
    </div>
  );
}

export default Cart;
