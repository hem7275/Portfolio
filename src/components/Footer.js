import "./FooterStyle.css";

import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaLinkedin, FaTwitter} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                <div>
                    <p>Noida Sector 62</p>
                    <p>India</p>
                </div>
            </div>
            <div className="phone">
                <h4>
                    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    +91 8920046248
                </h4>
            </div>
            <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    hemkishan12@gmail.com
                </h4>
            </div>
        </div>
        <div className="right">
            <h4 >
                About Me
            </h4>
            <p>
                Hem kishan this side. Who loves problem solving in Data structure
                and algoritms and building web applications.
            </p>
            <div className="soical">
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}} />
                <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}} />
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
