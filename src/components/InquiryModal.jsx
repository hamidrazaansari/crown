import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/css/product-details.css'
import '../assets/css/details.css';
import SelectSearch from 'react-select-search';  
import 'react-select-search/style.css';  
import { RxCross1 } from "react-icons/rx";


function InquiryModal({ show, handleClose }) {
  const options = [
    { name: 'India', value: 'India', type: 'country' },
    { name: 'United States', value: 'United States', type: 'country' },
    { name: 'Canada', value: 'Canada', type: 'country' },
    { name: 'United Kingdom', value: 'United Kingdom', type: 'country' },
    { name: 'Australia', value: 'Australia', type: 'country' },
    { name: 'Germany', value: 'Germany', type: 'country' },
    { name: 'France', value: 'France', type: 'country' },
    { name: 'Spain', value: 'Spain', type: 'country' },
    { name: 'Sweden', value: 'Sweden', type: 'country' },
    { name: 'Japan', value: 'Japan', type: 'country' },
    { name: 'China', value: 'China', type: 'country' },
    { name: 'Russia', value: 'Russia', type: 'country' }
];
  return (
    <div className='inquiry-modal'>
    <Modal show={show} onHide={handleClose}>
      <div className="modal-form ">
        <button className='closeButton' onClick={handleClose}><RxCross1/> </button>
      <div className="form">
                            <h4>Fill The Details</h4>
                            <div className='d-flex flex-column'>
                                <label htmlFor="country">Country</label>
                                <SelectSearch
                                    search
                                    options={options}
                                    name="language"
                               />
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" />
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" id="phone" />
                            </div>

                            <button className='form-btn'>Enquire Now</button>
                        </div>
      </div>
    </Modal>
    </div>
  );
}

export default InquiryModal;
