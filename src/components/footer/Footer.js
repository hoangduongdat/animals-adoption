import React from 'react';

import './footer.css'

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <ul className="footer-social__icon">
                <li><a href=""><i className='bx bxl-facebook-circle'></i></a></li>
                <li><a href=""><i className='bx bxl-twitter' ></i></a></li>
                <li><a href=""><i className='bx bxl-linkedin-square' ></i></a></li>
                <li><a href=""><i className='bx bxl-instagram' ></i></a></li>
            </ul>
            <ul className="footer-social__menu">
                <li ><a href="#intro">Home</a> </li>
                <li><a href="#about">About</a> </li>
                <li><a href="#contact">Contact</a> </li>
            </ul>
            <p>@2022 Hoang Dat | All Rights Reserved</p>
        </div>
    );
};

export default Footer;