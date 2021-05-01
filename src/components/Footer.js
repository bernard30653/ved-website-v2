import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom'; 
function Footer() {
    return (
        <>
        <div className="footer">
            <div className="footer-container">
                <div className="footer-header">
                    <Link to="/contact"><h2 id="contact-text">聯絡我們</h2></Link>
                </div>
                
                <div className="social-icons">
                    <a href="mailto:ved@veducation.org"><i className="fas fa-envelope-square circle-icon"></i></a>
                    <a href="https://www.facebook.com/VolunteeringEDU"><i className="fab fa-facebook circle-icon"></i></a>
                    <a href="https://www.instagram.com/volunteeringedu/"><i className="fab fa-instagram-square circle-icon"></i></a>
                    <a href="https://www.youtube.com/channel/UCqVN21LBrDUNYtqkYwZZXGw"><i className="fab fa-youtube circle-icon"></i></a>
                </div>
            </div>
        </div>
        <div className="copyright">
            Copyright © 2021 All Right Reserved. VED.
        </div>
        </>
    )
}

export default Footer;
