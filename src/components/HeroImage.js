import "./HeroImgStyle.css";
import React from 'react'
import IntroImg from "../assets/heroimg.jpg"
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>Hi I'M Hem Kishan</p>
        <h1>Frontend Developer</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
            
        </div>
      </div>
    </div>
  )
}

export default HeroImage
