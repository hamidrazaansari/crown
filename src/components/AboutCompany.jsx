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
          <h2>KNOW US BETTER</h2>
          <p>Whether for interiors, exteriors, joinery, furniture production or any other advanced application - our versatile range of laminates and compacts offer elegant, durable solutions for every surface.</p>
          <p>Crown’s 10 advanced production lines produce over 30 million square meters of high-pressure laminates (HPL) annually. We offer laminated sheets and compacts in 6 sizes, with thicknesses ranging from 0.6 mm to 25 mm. Featuring 1200+ captivating decors and 120+ distinctive textures, our collection ensures an ideal match to complement every decorative surface you envision.</p>
          <p>Our uncompromising commitment to quality is validated by our certifications including EN-438, CE, NEMA-LD3-2005, BIS, Green Label, Green Guard, Green Building, and FSC. Fully compliant with stringent European health, safety, and environmental regulations, our laminates embody sustainable excellence.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutCompany;
