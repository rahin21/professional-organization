import Link from 'next/link'
import React from 'react'


function Footer() {
  return (
    
      <div className="flex justify-between md:items-center items-end md:text-base text-sm lg:mx-16 mx-8 my-20 font-medium">
        <div>
          <h1 className='capitalize font-bold text-2xl pb-7'>All Things in place</h1>
          <p className='md:w-full w-[50%]'>Home Organizer & Personal Assistant</p>
          <p>DFW Metroplex </p>
        </div>
        <div className='underline flex flex-col lg:w-56'>
          <Link href={'/our-services'}>Services</Link>
          <Link href={'/our-pricing'}>Pricing</Link>
          <Link href={'/contact'}>Contact</Link>
        </div>
      </div>
 
  )
}

export default Footer