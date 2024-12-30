import React from 'react'
import NavBar from '../components/NavBar'
import '../assets/css/environmental.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import AboutEnv from '../assets/image/AboutEnv.png'
import Commitment1 from '../assets/image/envcommit1.png'
import Commitment2 from '../assets/image/envcommit2.png'
import Commitment3 from '../assets/image/envcommit3.png'
import Timer from '../assets/image/timer.png'
import Fectory from '../assets/image/fectory.png'
import Trash from '../assets/image/trash.png'
import Footer from '../components/Footer';
import EnvImg from '../assets/image/envImg.png'

export default function Env() {
    return (
        <div>
            <NavBar />
            <div className="bgWhite">
                <div className="container">
                    <div className="breadcrumb m-0">
                        <p>
                            <a href="/">HOME</a>
                            <span> / </span>
                            <a href="/" className="ms-2">Environment</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="env-banner bgWhite py-3">
                <div className="container">
                    <img src={EnvImg} alt="" />
                </div>
            </div>
            <div className="SUSTAINABILITY">
                <div className="container">
                    <h2>BEAUTY WITH SUSTAINABILITY</h2>
                    <p>At Crown Lam, we envision a world where laminates do more than cover surfaces—they elevate them. We strive to be the go-to choice for architects, designers, and clients worldwide who seek luxury and longevity in every detail. Our commitment is to be a trusted supplier in every sense: delivering excellence in quality, aesthetics, and innovation across all our products.</p>
                </div>
            </div>


            <div className='envoirementabout'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-center justify-content-lg-end justify-content-center">
                            <img src={AboutEnv} alt="about env" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <h2>Enviroment</h2>
                            <p>The world is more than just our planet; it's our sanctuary. Here, hope is expressed through love, emotions are embodied in relationships, magic intertwines with creativity, and strength is synonymous with beauty.</p>
                            <p>This resilient and awe-inspiring home continuously captivates us, which is why at Crownlam, we are dedicated to ethical business practices and a responsible commitment to fostering a sustainable environment. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="commitment">
                <div className="container">
                    <h2 className='commit-heading'>Crown Commitiments To A Better Future</h2>
                    <div className="row px-4 mt-5">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="commitment-card">
                                <img src={Commitment1} alt="Commitment" />
                                <h3>Smarter Production</h3>
                                <p>Wheather its`s increasing energy efficiency in manufacturing or sourcing natural resources responsibly and economically we strive to make smart descisions that lead to smarter susutainability</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="commitment-card">
                                <img src={Commitment2} alt="" />
                                <h3>Smarter Use</h3>
                                <p>We develop our products to ensure the health and safety of evryone who comes into contact with them.We work on continuous improvements to keep the environmental impacts as low as possible</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="commitment-card">
                                <img src={Commitment3} alt="" />
                                <h3>Smarter Disposal</h3>
                                <p>Our environmentally friendly waste management concept is designed to provide you with robust solutions to optimize the disposal of our products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="passports">
                <div className="container">
                    <h2>Environmental Passports</h2>
                    <p>Our environmental passports have been developed as an integral part of our transparent, global approach to sustainability to help you meet the environmental requirements of your projects.</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center">
                            <button className='button'>Comfort and health</button>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center">
                            <button className='button' style={{ background: "#6E9661" }}>Natural Raw materials</button>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center">
                            <button className='button' style={{ background: "#D4D177" }}>optimiized life cycle</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center">
                            <div className="optmization-box">
                                <img src={Timer} alt="Life" />
                                <p>Life</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center">
                            <div className="optmization-box">
                                <img src={Fectory} alt="Fectory" />
                                <p>Energy Recovery</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center justify-content-center">
                            <div className="optmization-box">
                                <img src={Trash} alt="Trash" />
                                <p>Waste Recycle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="csr">
                <div className="container">
                    <h2>CSR</h2>
                    <p>As the saying goes, “A single step for man is a giant leap for mankind.”</p>
                    <p>Balance is the crux of our responsibilities. We strive to do our best for the coexistence of
                        all communities we inhabit. Our initiatives towards health and education since the beginning
                        have remain unchanged as we believe that this is the least which we can do to better life
                        and existence.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}












