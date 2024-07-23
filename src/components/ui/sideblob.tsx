import React from 'react'
import Image from 'next/image'
import { blob } from '@/public/images'


export default function SideBlob() {
  return (
    <section className='w-3/5 hidden lg:block relative'>
      <div className='relative w-full h-screen'>
        <Image
          src={blob}
          alt="blob"
          className="absolute top-0 left-0 object-cover"
          fill
        />
      </div>
      <div className='w-full absolute top-0 left-0 h-screen flex flex-col justify-center px-14'>
        <p className='w-fit font-bold text-6xl text-white'>OrgControl</p>
        <p className='w-[500px] font-medium text-xl mt-5 text-white'>Our vision is to provide convenience and help increase your sales business.</p>
      </div>
    </section>
  )
}
