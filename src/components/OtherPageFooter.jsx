import React, { useEffect, useRef } from "react";
import "../assets/css/footer.css";
import { Link } from "react-router-dom";
import FooterImg from '../assets/image/aqua-wall.jpg'
import { GoArrowUpRight } from "react-icons/go";

function OtherPageFooter() {
  return (
    <div>
            <div>
                <div className="explore">
                    <h2>Are you ready to explore our wonderful laminates</h2>
                    <p>we are always working hard and trying to make the best for you</p>
                    <button>Request a Quote <GoArrowUpRight/></button>
                </div>
                <div className="footer-background">
                    <img src={FooterImg} alt="footer image" />
                </div>
        
              {/* Footer Section */}
              <div className="newFooter m-0" style={{ backgroundColor: "#000" }}>
                <div className="container" >
                  <div className="d-flex align-items-center justify-content-center mt-5">
                    <Link>
                      <h2>About</h2>
                    </Link>
                    <Link>
                      <h2>Contacts</h2>
                    </Link>
                    <Link>
                      <h2>Privacy Policy</h2>
                    </Link>
                    <Link>
                      <h2>Blog</h2>
                    </Link>
                  </div>
                  <p>
                    <a href="mailto:crownlaminates@gmail.com" style={{ color: "#fff" }}>
                      crownlaminates@gmail.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+918564758228" style={{ color: "#fff" }}>
                      +(91) 8564758228
                    </a>
                  </p>
                </div>
                <div className="line" style={{ backgroundColor: "#fff" }}></div>
                <div className="container">
                  <div className="d-flex align-items-center justify-content-center">
                    <Link>
                      <h2>Facebook</h2>
                    </Link>
                    <Link>
                      <h2>Instagram</h2>
                    </Link>
                    <Link>
                      <h2>Pinterest</h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default OtherPageFooter