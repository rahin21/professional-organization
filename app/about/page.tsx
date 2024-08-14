import React from 'react'
import CarouselSlider from '@/components/carouselSlider'
import { slider } from '@/constants/sliderData'
import ClientInfo from '@/components/about/clientInfo'
import FAQ from '@/components/about/faq'

function AboutPage() {
  return (
    <main>
      <ClientInfo/>
       <FAQ/>
      <CarouselSlider slider={slider}/> 
    </main>

  )
}

export default AboutPage