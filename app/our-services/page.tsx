import CarouselSlider from '@/components/carouselSlider'
import Hero from '@/components/services/hero'
import PersonalAssistant from '@/components/services/personalAssistant'
import Services from '@/components/services/services'
import { slider } from '@/constants/sliderData'
import React from 'react'

function OurServices() {
  return (
    <div>
      <Hero/>
      <Services/>
      <PersonalAssistant/>
      <CarouselSlider slider={slider}/>
    </div>
  )
}

export default OurServices