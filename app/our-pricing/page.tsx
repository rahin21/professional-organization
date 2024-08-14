import Pricing from '@/components/pricing/pricing'
import PricingHero from '@/components/pricing/pricingHero'
import React from 'react'

function OurPricingPage() {
	return (
		<div>
			<PricingHero/>
			<Pricing/>
			<div className='md:py-56 py-36 text-lg italic bg-secondary text-center px-10'>
				<p>″[Visualize] the ideal lifestyle you dream of . . . Think in concrete terms so that you can vividly picture what it would be like to live in a clutter-free space . . . ” - Marie Kondo</p>
			</div>
		</div>
	)
}

export default OurPricingPage