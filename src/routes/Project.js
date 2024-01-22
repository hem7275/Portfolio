import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Work from '../components/work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="PROJECTS" text="Some of my recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project
