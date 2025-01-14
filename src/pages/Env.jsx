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
            <div className="SUSTAINABILITY bgWhite">
                <div className="container">
                    <h2>BEAUTY WITH SUSTAINABILITY</h2>
                    <p>At Crown Lam, we envision a world where laminates do more than cover surfaces—they elevate them. We strive to be the go-to choice for architects, designers, and clients worldwide who seek luxury and longevity in every detail. Our commitment is to be a trusted supplier in every sense: delivering excellence in quality, aesthetics, and innovation across all our products.</p>
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
                            <p>The world is more than just our planet; it's our sanctuary. Here, hope is expressed through love, emotions are embodied in relationships, magic intertwines with creativity, and strength is synonymous with beauty.</p>
                            <p>This resilient and awe-inspiring home continuously captivates us, which is why at Crownlam, we are dedicated to ethical business practices and a responsible commitment to fostering a sustainable environment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="strategy bgWhite">
                <div className="container">
                    <h2 className='strategy-heading'>CROWN STRATEGY GROUP </h2>
                    <p>At Crown Lam, we envision a world where laminates do more than cover surfaces—they elevate them. We strive to be the go-to choice for architects, designers, and clients worldwide who seek luxury and longevity in every detail. Our commitment is to be a trusted supplier in every sense: delivering excellence in quality, aesthetics, and innovation across all our products.</p>
                    <div className="row px-4 mt-5">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="commitment-card">
                                <img src={Commitment1} alt="Commitment" />
                                <h3>Zero Liquid discharge</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="commitment-card">
                                <img src={Commitment2} alt="" />
                                <h3>RESPONSIBLE FORESTRY</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="commitment-card">
                                <img src={Commitment3} alt="" />
                                <h3>SAFE AND NON-HAZARDOUS PRODUCTS</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OtherPageFooter/>
        </div>
    )
}












