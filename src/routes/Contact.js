import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Form from '../components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="Hire ME" text="Let's Have a Chat" />
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
