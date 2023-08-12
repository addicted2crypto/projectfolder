import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constance'

const navbar = () => {
  return (
    <nav className='flex-between py-5'>
      <div className='flex-1 flexStart gap-10'>
        <Link href="/">
          <Image 
          src ="/btc.png" 
          width={115}
          height={43}
          alt="Crypto Markets"
          />
          </Link>
          <ul className='xl:flex hidden text-small gap-14'>
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        
      </div>
      </nav>
  )
}

export default navbar
