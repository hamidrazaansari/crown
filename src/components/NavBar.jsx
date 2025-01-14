import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/css/navbar.css'
import Logo from '../assets/image/logo.png'
import Bar from '../assets/image/bar.png'
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Cart from './Cart';
import SearchBar from './SearchBar';
import NavModal from './NavModal';
import { Nav } from 'react-bootstrap';
import IndianFlag from '../assets/image/indian-flag.png'
import JapanFlag from '../assets/image/japan-flag.png'
import UsFlag from '../assets/image/us-flag.png'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import HoverDropdown from './HoverDropdown';



function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);


  return (
    <>
      {/* sidebar for country language select  */}
      <Offcanvas show={show} placement={'end'} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Select Your Language</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='countries'>
            <li>
              <img src={IndianFlag} alt="Indian Flag" />
              Hindi
            </li>
            <li>
              <img src={JapanFlag} alt="Japan Flag" />
              Japani
            </li>
            <li>
              <img src={UsFlag} alt="US Flag" />

              English US
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {showModal && <NavModal onClose={closeModal} />}

      <Navbar expand="lg" className="navbar sticky-top">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Crown logo" />
          </Navbar.Brand>
          <div className="d-flex justify-content-between align-items-center " style={{ width: "80%", position: "relative" }}>
            <SearchBar />
            <div className='d-flex align-items-center'>

              <Nav.Item href="/">
                {/* <Link onMouseEnter={openModal}>Products</Link> */}
                <NavModal/>
              </Nav.Item>

              <Nav.Item href="/">
                <HoverDropdown/>
              </Nav.Item>

              <Cart />

              <Nav.Item href="/">
                <Link onClick={handleShow}>
                  <img src={IndianFlag} alt="Indian  Flag" className='flagImg' />
                </Link>
              </Nav.Item>
            </div>
          </div>
        </Container>
      </Navbar>
    </>

  );
}

export default NavBar;