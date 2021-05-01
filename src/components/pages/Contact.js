import React from 'react';
import BackgroundImage from '../BackgroundImage';
import coverPhoto from '../../images/網站照片/歷年計畫/history_3_2.jpg';
import './Contact.css';
function Contact() {
    return (
        <div>
            <BackgroundImage text={"聯絡我們"} image={coverPhoto} />
            <div className="icons-outer">
            <div className="icons-container">
                <div id="email-box">
                    <i className="fas fa-envelope-square fa-3x"></i>
                    <a href="mailto:ved@veducation.org" id="email-text">ved@veducation.org</a>
                </div>
                <div id="facebook-box">

                    <i class="fab fa-facebook fa-3x"></i>
                    <a href="https://www.facebook.com/VolunteeringEDU" id="facebook-text">VolunteeringEDU</a>
                </div>
                <div id="instagram-box">
                    <i className="fab fa-instagram-square fa-3x"></i>
                    <a href="https://www.instagram.com/volunteeringedu/" id="instagram-text">volunteeringedu</a>
                </div>

                <div id="youtube-box">
                    <i className="fab fa-youtube fa-3x"></i>
                    <a href="https://www.youtube.com/channel/UCqVN21LBrDUNYtqkYwZZXGw" id="youtube-text">VED Education</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;
