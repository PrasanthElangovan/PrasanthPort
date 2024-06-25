import React from "react";
import "./index.css"

const Footer = () =>{
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Prasanth Elangovan</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.facebook.com/siva.prasanthsp.1/" className="footer__social-link link__bg1" target="_blank" rel="noopener noreferrer">
                        <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/prasanth_elangovan/" className="footer__social-link link__bg2" target="_blank" rel="noopener noreferrer">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/prasanthelangovanprofile/" className="footer__social-link link__bg3" target="_blank" rel="noopener noreferrer">
                        <i class="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; PrasanthElangovan. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer