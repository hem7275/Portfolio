import { Link } from "react-router-dom"
import "./AboutContentStyle.css"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a react front-en developer and do competitive programming for fun</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  )
}

export default AboutContent
