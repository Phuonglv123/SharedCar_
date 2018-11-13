import React from 'react';
import './footer.scss'

const Footer = () => {
    return (
        <div id="Footer">
            <div className="container">
                <ul className="list-unstyled d-flex justify-content-center linkFooter m-0">
                    <li><small>Contact Us</small></li><span className="lineFooter">|</span>
                    <li><small>Privacy Policy</small></li><span className="lineFooter">|</span>
                    <li><small>Terms of Use</small></li>
                </ul>

                <div className="contentFooter text-center mt-2">
                    <small>CYBERGO Vietnam Joint Stock Company. © 2018 CYBERGO. ALL RIGHTS RESERVED</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;