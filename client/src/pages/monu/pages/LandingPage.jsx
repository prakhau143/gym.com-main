import React from 'react'
import BigGallery from '../components/BigGallery'
import Choose from '../components/Choose'
import FrontCarousel from '../components/FrontCarousel'

import Girl from '../components/Girl'
import Pricing from '../components/Pricing'
import Trainer from '../components/Trainer'
import Newsletter from '../components/Newsletter'
import Feedback from '../components/Feedback'
import BusinessInfo from '../components/BusinessInfo'
import "../styles/LandingPage.css"
const LandingPage = () => {
  return (
    <div>
        <BusinessInfo />
        <FrontCarousel />
        <Choose />
        <Girl />
        <Pricing />
        <BigGallery />
        <Trainer />
        <Feedback />
        <Newsletter />
    </div>
  )
}

export default LandingPage