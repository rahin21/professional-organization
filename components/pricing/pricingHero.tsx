import React from 'react'
import heroImage from "/public/pricing/heroImage.png"
import Image from 'next/image'

function PricingHero() {
	return (
		<div className=" -mt-[20rem]">
      <div className="bg-gradient-to-b from-white/70 from-10% via-black/5 to-70% to-black/5 w-full h-[58rem] bg-cover bg-center relative flex flex-col items-center justify-center">
        <Image
          src={heroImage}
          alt="hero image"
          className="w-full h-full object-cover absolute -z-10"
        />
			<h1 className='md:text-6xl text-5xl font-medium mt-40 text-white'>Our Pricing</h1>
      </div>
    </div>
	)
}

export default PricingHero