import React from 'react'
import mainLogo from '/public/main-logo.png'
import Image from 'next/image'
import Link from 'next/link'

function Nav() {
  return (
    <nav>
        <ul>
            <li><Link href={'/our-services'}>Our Services</Link></li>
            <li><Link href={'/about'}> About </Link></li>
            <Image src={mainLogo} alt='main logo'/>
        </ul>
    </nav>
  )
}

export default Nav