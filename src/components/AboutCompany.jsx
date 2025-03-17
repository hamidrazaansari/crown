import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom';

const AboutCompany = () => {
  return (
    <div className="about-company-section pt-4">
    <div className="container ">
      <div className="breadcrumb">
        <p>
          <Link href="/">HOME</Link>
          <span> / </span>{" "}
          <Link href="/" className="ms-2">
            About Us
          </Link>{" "}
        </p>
      </div>
      <div className="row about-company">
        <div className="col-lg-4">
          {/* <h1>ABOUT THE COMPANY</h1> */}
          <img src={logo} alt="crown logo" />
        </div>
        <div className="col-lg-8">
          <p>
          Whether for joinery or furniture production, laminates for interior/exterior use or any other advanced application, our versatile range offers elegant solutions for every design concept. 
          </p>
          <p>
          Our curated collections inspired by the five elements — earth, water, fire, air, and aether — invite you into a realm of boundless creativity. At Crown Décor, innovation is at the heart of everything we do. Challenging conventions daily, we create exclusive, trend setting designs that redefine the essence of luxury.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutCompany;
