import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constance'
import AuthProviders from './AuthProviders'
import { getCurrentUser } from '@/lib/session'

const navbar = async() => {
  const session = await getCurrentUser(user);//null with let us have auth providers link


  return (
    <nav className='flex-between navbar'>
      <div className='flex-1 flexStart gap-10'>
        
        
          
          
     
     
          
          
          <ul className='xl:flex text-small gap-7'>
            {NavLinks.map((link) => (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            ))}
          </ul>
        
      </div>
      <div className='flexCenter gap-4'>
        {session?.user ? (
          <>
          {session?.user?.image && (<Image 
            src={session.user.image}
            width={40}
            height={40}
            className='rounded-full'
            alt={'session.user.name'}
           />
          )}
          
          <p>Login with ?</p>
          
          <Link href="/create-project">
          <p>Share New Software</p>
          <p>Wallet Connect</p>
          <p>UserWallet</p>
          </Link>
          
          </>
         
          
          
        )  : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default navbar
