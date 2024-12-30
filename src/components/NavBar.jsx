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



function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);


  return (
    <>
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
                <Link onClick={openModal}>English</Link>
              </Nav.Item>

              <Nav.Item href="/">
                <Link onClick={openModal}>Products</Link>
              </Nav.Item>

              <Nav.Item href="/">
                <Link onClick={openModal}>Menu</Link>
              </Nav.Item>

              <Cart />
            </div>
          </div>
        </Container>
      </Navbar>
    </>

  );
}

export default NavBar;