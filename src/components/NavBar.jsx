import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../assets/css/navbar.css'
import Logo from '../assets/image/logo.png'
import Bar from '../assets/image/bar.png'
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Cart from './Cart';




function NavBar() {


  return (
    <>
      <Navbar expand="lg" className="navbar sticky-top">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Crown logo" />
          </Navbar.Brand>
          <div className="d-flex justify-content-between align-items-center " style={{width:"80%"}}>
            <div className='search-product'>
              <input type="text" className='search-input' placeholder='search products' />
              <button className='search-btn'> <IoSearchOutline /> </button>
            </div>
            <div className='d-flex align-items-center'>
              <NavDropdown title={<>English <FaChevronDown /></>} id="basic-nav-dropdown" className='d-md-block d-none'>
                <NavDropdown.Item href="/">
                  Spanih
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  French
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Hindi
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<>Product <FaChevronDown /> </>} id="basic-nav-dropdown" className='d-md-block d-none'>
                <NavDropdown.Item href="/">
                  DECORATIVE

                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  INTERIOR
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  EXTERIOR
                </NavDropdown.Item>
              </NavDropdown>
              <Cart/>

              <NavDropdown title={<img src={Bar} />} id="basic-nav-dropdown">
                <NavDropdown.Item href="/">
                <Link to={'/about'}>
                  About
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to={'/blog'}>
                    Blog
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <Link to={'/environmental'}>
                    Environmental
                  </Link>
                </NavDropdown.Item>
                <NavDropdown title={<>English <FaChevronDown /></>} id="basic-nav-dropdown" className='d-md-none d-block'>
                <NavDropdown.Item href="/">
                  Spanih
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  French
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  Hindi
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={<>Product <FaChevronDown /> </>} id="basic-nav-dropdown" className='d-md-none d-block'>
                <NavDropdown.Item href="/">
                  Decorative

                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  INTERIOR
                </NavDropdown.Item>
                <NavDropdown.Item href="/">
                  EXTERIOR
                </NavDropdown.Item>
              </NavDropdown>

              </NavDropdown>
            </div>
          </div>
        </Container>
      </Navbar>
    </>

  );
}

export default NavBar;