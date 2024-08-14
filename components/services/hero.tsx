import Image from 'next/image'
import React from 'react'
import heroImage from "/public/services/heroImage.png"

function Hero() {
	return (
		<div className=" -mt-[20rem]">
      <div className="bg-gradient-to-b from-white/70 from-10% via-white/50 to-70% to-white/50  w-full h-[53rem] bg-cover bg-center relative flex flex-col items-center justify-center">
        <Image
          src={heroImage}
          alt="hero image"
          className="w-full h-full object-cover absolute -z-10"
        />
			<h1 className='md:text-6xl text-5xl font-medium mt-40'>Our Services</h1>
      </div>
    </div>
	)
}

export default Hero