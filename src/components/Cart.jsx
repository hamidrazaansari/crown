import React, { useContext, useState } from 'react';
import '../assets/css/navbar.css';
import CartIcon from '../assets/image/shopping-cart.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CounterContext } from '../../src/context/CounterContext';
import SingInModal from '../components/SingInModal';
import { FaTrashCan } from "react-icons/fa6";
import DilevaryImg from '../assets/image/delivery.png';
import { Link } from 'react-router-dom';

function Cart() {
  const { count, data, clearCheckedData, toggleItemChecked, removeItemById } = useContext(CounterContext);
  const [showSignin, setShowSignin] = useState(false);

  const handleSigninModleShow = () => setShowSignin(true);
  const handleSigninModleClose = () => setShowSignin(false);

  return (
    <div>
      <SingInModal show={showSignin} handleSigninModleClose={handleSigninModleClose} />
      <div className='cart'>
        <NavDropdown
          title={
            <>
              <img src={CartIcon} alt="user-icon" />
              {count > 0 && <span className='cart-indecator'>{count}</span>}
            </>
          }
          id="basic-nav-dropdown"
        >
          <div className="cart-dropdown">
            <h3>My Cart</h3>
            <div className="info-box">
              <img src={DilevaryImg} alt="" />
              <p>We Deliver your free sample of laminates</p>
            </div>
            {data && data.length > 0 ? (
              data.map((item) => {
                const imageUrl = item.defaultImage ? item.defaultImage.replace('http://localhost:5000', 'http://13.233.121.43:5000') : '';
                return (
                  <div key={item._id} className="d-flex align-items-center justify-content-between p-3">
                    <div className="d-flex align-items-center px-4">
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          checked={item.checked || false}
                          onChange={() => toggleItemChecked(item._id)}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <img src={imageUrl} alt="product" className="product-img" />
                      <div>
                        <h4>{item.name}</h4>
                        <p>{item.subCategory.name || 'Abstract'}</p>
                      </div>
                    </div>
                    <button
                      className="fw-bold"
                      onClick={() => removeItemById(item._id)}
                    >
                      Remove <span><FaTrashCan /></span>
                    </button>
                  </div>
                );
              })
            ) : (
              <p className='text-center my-3'>No items in cart</p>
            )}
            <div className="cart-footer p-3">
             <Link to={'/order'}><button onClick={handleSigninModleShow}>Checkout</button></Link>  
            </div>
          </div>
        </NavDropdown>
      </div>
    </div>
  );
}

export default Cart;