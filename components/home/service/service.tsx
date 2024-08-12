import Image from 'next/image'
import React from 'react'
import serviceImage from "/public/home/service.png"
import icon1 from "/public/home/icon1.png"
import icon2 from "/public/home/icon2.png"
import icon3 from "/public/home/icon3.png"

function Service() {
  return (
    <div className='mx-16'>
      <div className="bg-white/80">
        <Image
          src={serviceImage}
          alt="hero image"
          className="w-full h-full object-cover -z-20 absolute left-0 px-16"
        />
        <div className="z-10 lg:flex">
          <div>
            <Image src={icon1} alt='icon 1'/>
            <h1 className='uppercase text-xl font-semibold text-center '>DECLUTTER</h1>
            <p><strong>Step One:</strong> Explore and separate essential, wanted, and excess items while identifying target areas for functional placement</p>
          </div>
          <div>
            <Image src={icon2} alt='icon 1'/>
            <h1 className='uppercase text-xl font-semibold text-center '>Direction</h1>
            <p><strong>Step Two:</strong> Guided placement that aligns and maximizes the potential flow of your day-to-day lifestyle and routine</p>
          </div>
          <div>
            <Image src={icon3} alt='icon 1'/>
            <h1 className='uppercase text-xl font-semibold text-center '>Donate & Discard</h1>
            <p><strong>Step Three:</strong> Let go of the things that create clutter and don’t add to  productivity or convenience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service