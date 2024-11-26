import React from 'react'
import NavBar from '../components/NavBar'
import DetailsForm from '../components/DetailsForm'
import Footer from '../components/Footer'
import Certificate1 from '../assets/image/certificate1.png'
import company1 from '../assets/image/company1.png'
import company2 from '../assets/image/company2.png'
import company3 from '../assets/image/company3.png'
import company4 from '../assets/image/company4.png'
import company5 from '../assets/image/company5.png'
import company6 from '../assets/image/company6.png'
import company7 from '../assets/image/company7.png'
import company8 from '../assets/image/company8.png'
import '../assets/css/certificate.css'

function Certificate() {
    return (
        <div>
            <NavBar />
            <div className="container mt-5">
                <div className="breadcrumb">
                    <p><a href="/">HOME</a><span> / </span> <a href="/" className='ms-2'>Certification</a> </p>
                </div>
            </div>
            <div className="certificate-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="certificate d-flex align-items-center justify-content-end">
                                <img src={Certificate1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="certificate d-flex align-items-center justify-content-center">
                                <img src={Certificate1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="certificate d-flex align-items-center justify-content-start">
                                <img src={Certificate1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="companies">
                <div className="container">
                    <div className="company-box">
                        <div className="row">
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <img src={company1} alt="" />
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <img src={company2} alt="" />
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <img src={company3} alt="" />
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <img src={company4} alt="" />
                            </div>
                        </div>
                            <div className="line"></div>
                        <div className="row">
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <img src={company5} alt="" />
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <img src={company6} alt="" />
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <img src={company7} alt="" />
                            </div>
                            <div className="col-3 d-flex align-items-center justify-content-center">
                                <img src={company8} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DetailsForm />
            <Footer />
        </div>
    )
}

export default Certificate