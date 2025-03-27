import React from 'react'
import NavBar from '../components/NavBar'
import '../assets/css/environmental.css'
import AboutEnv from '../assets/image/AboutEnv.png'
import Commitment1 from '../assets/image/sustainable-energy.png'
import Commitment2 from '../assets/image/global-ecology.png'
import Commitment3 from '../assets/image/environmental.png'
import Timer from '../assets/image/timer.png'
import Fectory from '../assets/image/fectory.png'
import Trash from '../assets/image/trash.png'
import Footer from '../components/Footer';
import EnvImg from '../assets/image/envImg.png'
import OtherPageFooter from '../components/OtherPageFooter'
import { Link } from 'react-router-dom'

export default function Env() {
    return (
        <div>
            <NavBar />
            <div className="bgWhite">
                <div className="container">
                    <div className="breadcrumb m-0">
                        <p>
                            <Link to="/">HOME</Link>
                            <span> / </span>
                            <Link to="/" className="ms-2">Environment</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="env-banner bgWhite py-3">
                <div className="container" style={{position:'relative'}}>
                    <img src={EnvImg} alt="" />
                          <div className=" EnvHeader">
                            <div className="container mb-0">
                              <h1>Sustainable Luxury</h1>
                            </div>
                          </div>
                </div>
            </div>
            <div className="SUSTAINABILITY bgWhite">
                <div className="container">
                    <h2>Sustainability Policy</h2>
                    <p>At Crown we believe that luxury should be enjoyed responsibly. Our planet is a sanctuary not only for human beings, but for every species of plant or animal life who live here. All of us have a responsibility to leave behind a clean and habitable planet for future generations. </p>
                </div>
            </div>


            <div className='envoirementabout bgWhite'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-center justify-content-lg-end justify-content-center">
                            <img src={AboutEnv} alt="about env" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h2>Enviroment</h2>
                            <p>We are committed to making the least possible environmental impact, conserving natural resources and ensuring that just as our products are safe for our customers, our production processes are in harmony with the environment. </p>
                            {/* <p>This resilient and awe-inspiring home continuously captivates us, which is why at Crownlam, we are dedicated to ethical business practices and a responsible commitment to fostering a sustainable environment.</p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="strategy bgWhite">
                <div className="container">
                    {/* <h2 className='strategy-heading'>CROWN STRATEGY GROUP </h2> */}
                    {/* <p>At Crown Lam, we envision a world where laminates do more than cover surfaces—they elevate them. We strive to be the go-to choice for architects, designers, and clients worldwide who seek luxury and longevity in every detail. Our commitment is to be a trusted supplier in every sense: delivering excellence in quality, aesthetics, and innovation across all our products.</p> */}
                    <div className="row px-4">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="commitment-card">
                                <img src={Commitment1} alt="Commitment" />
                                <h3>Zero Liquid discharge</h3>
                                <p>100% of waste water discharged during our production process, is recycled & reused, thus conserving a precious resource.  </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="commitment-card">
                                <img src={Commitment2} alt="" />
                                <h3>USE OF RENEWABLE ENERGY</h3>
                                <p>100% of waste water discharged during our production process, is recycled & reused, thus conserving a precious resource.  </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="commitment-card">
                                <img src={Commitment3} alt="" />
                                <h3>WASTE MINIMIZATION & RESOURCE RECOVERY</h3>
                                <p>Minimum 80% of the solid waste from our production process is recycled, reused and repurposed, therefore minimizing environmental impact. 
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="commitment-card">
                                <img src={Commitment3} alt="" />
                                <h3>AFFORESTATION INITIATIVE</h3>
                                <p>In partnership with local communities and other business entities, we regularly undertake extensive afforestation drives around our production facilities, aiming to increase the green cover by minimum 10% each year.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="commitment-card">
                                <img src={Commitment3} alt="" />
                                <h3>RESPONSIBLE SOURCING & MANUFACTURING
                                </h3>
                                <p>Our FSC certification underscores our commitment to ensuring that all our wood based raw materials come from responsibly managed forests that prioritize conservation of bio diversity and natural habitats.
                                     {/* Our ISO 14001:2015, Green Guard, Green Leaf, Green Label, EPD & IGBC certifications highlight our adherence to sustainable manufacturing  */}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="commitment-card">
                                <img src={Commitment3} alt="" />
                                <h3>SAFE, ECO-FRIENDLY PRODUCTS</h3>
                                <p>Crown products are compliant with European Union’s REACH (Registration, Evaluation, Authorisation & Restriction of Chemicals) regulations and are certified to be free of hazardous chemicals or emissions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OtherPageFooter/>
        </div>
    )
}












