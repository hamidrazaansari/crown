import NavBar from "../components/NavBar";
import AboutCompany from "../components/AboutCompany";
import OurHeritage from "../components/OurHeritage";
import Vison from "../components/Vison";
import { FaArrowRight } from "react-icons/fa";
import GlobeComponent from "../components/GlobeComponent";
import OtherPageFooter from "../components/OtherPageFooter";

function About() {
  return (
    <div>
      <NavBar />
      <AboutCompany />
      {/* <OurHeritage /> */}
      <Vison />
      <div className="crownSection">
        <div className="container">
          <div className="crownSpecialize">
            <h3>
              Crown specializes in production of varities kind of Laminates
            </h3>
            <button className="crownBtn">
              <span>Learn More</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="crowLaminationSection">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h1>Why Crown Laminates?</h1>
            </div>
            <div className="col-8">
              <div className="row g-3">
                <div className="col-4">
                  <div className="crownBox">
                    <h3>Range</h3>
                    <p>2000 SKUs</p>
                    <p>1000 Textures</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="crownBox">
                    <h3>Distribution</h3>
                    <p>1500+ dealships pan india and abroad</p>
                    <p>1500+product showrooms</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="crownBox">
                    <h3>Quality</h3>
                    <p>1500+ dealships pan india and abroad</p>
                    <p>1500+product showrooms</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="crownBox">
                    <h3>Sizes</h3>
                    <p>wide range of dimension available</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="crownBox">
                    <h3>Presesnce</h3>
                    <p>Available in 60+ countries</p>
                    <p>Global Warehousing</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="crownBox">
                    <h3>Sustainable</h3>
                    <p>Wind and solar power usage to reduce our carbon footprint</p>
                    <p>Member of FSC, Greenguard etc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <GlobeComponent />
      <OtherPageFooter />

    </div>
  );
}

export default About;
