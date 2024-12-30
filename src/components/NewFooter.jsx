import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../assets/css/footer.css";
import { Link } from "react-router-dom";

function NewFooter() {
  return (
    <div>
      {/* Section that triggers the effect */}
      <div className="pos mt-5">
        <div className="crown">
          <h2>Crown</h2>
        </div>
      </div>

      {/* Footer Section */}
      <div className="newFooter" style={{ backgroundColor: "#000" }}>
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
  );
}

export default NewFooter;
