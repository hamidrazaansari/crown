import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function HoverDropdown() {
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <Dropdown
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      show={show} 
      className='navDropdown'
    >
      <Dropdown.Toggle id="dropdown-basic" className='bg-transparent border-0 text-dark'>
        MENU
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to={'/about'}>About Us </Link> </Dropdown.Item>
        <Dropdown.Item ><Link to={'/blog'}>Blog </Link></Dropdown.Item>
        <Dropdown.Item ><Link to={'/environmental'}>ENVIRONMENT </Link></Dropdown.Item>
        <Dropdown.Item ><Link to={'/certification'}>CERTIFICATIONS </Link></Dropdown.Item>
        <Dropdown.Item ><Link to={'/catalouge'}>Catalogue </Link></Dropdown.Item>
        <Dropdown.Item ><Link to={'/contact'}>Contact Us </Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default HoverDropdown;
