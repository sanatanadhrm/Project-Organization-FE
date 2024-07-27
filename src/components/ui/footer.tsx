import React from 'react'

export default function Footer() {
  return (
    <footer className='mt-16 mb-10 w-full'>
      <div className='py-10 sm:px-7 md:grid md:grid-cols-2'>
        <div className='w-3/5 lg:w-2/5'>
          <p className='text-[#FE853A] text-2xl font-bold'>OrgControl</p>
          <p className='mt-4 text-sm font-medium text-[#90A3BF]'>Our vision is to provide convenience and help increase your sales business.</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 md:mt-0 gap-3 mt-14'>
          <div className='flex flex-col gap-2'>
            <p className='font-semibold text-xl text-[#1A202C]'>About</p>
            <p className='font-medium text-sm text-[#90A3BF]'>How it works</p>
            <p className='font-medium text-sm text-[#90A3BF]'>Featured</p>
            <p className='font-medium text-sm text-[#90A3BF]'>Partnership</p>
            <p className='font-medium text-sm text-[#90A3BF]'>Bussiness Relation</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-semibold text-xl text-[#1A202C]'>Socials</p>
            <p className='font-medium text-sm text-[#90A3BF]'>Discord</p>
            <p className='font-medium text-sm text-[#90A3BF]'>Instagram</p>
            <p className='font-medium text-sm text-[#90A3BF]'>Twitter</p>
            <p className='font-medium text-sm text-[#90A3BF]'>Facebook</p>
          </div>
          <div className='flex flex-col gap-2 mt-10 md:mt-0'>
            <p className='font-semibold text-xl text-[#1A202C]'>Community</p>
            <p className='font-medium text-sm text-[#90A3BF]'>Events</p>
            <p className='font-medium text-sm text-[#90A3BF]'>Blog</p>
            <p className='font-medium text-sm text-[#90A3BF]'>Podcast</p>
            <p className='font-medium text-sm text-[#90A3BF]'>Invite a Friend</p>
          </div>
        </div>
      </div>
      <div className='sm:px-7 w-full'>
        <div className='mt-5 md:grid md:grid-cols-2 flex flex-col md:flex-row-reverse md:items-center'>
          <p className='font-semibold text-sm text-[#1A202C] order-last md:order-first mt-5 md:mt-0'>&copy;2022 OrgControl. All rights reserved</p>
          <div className='grid grid-cols-2 md:w-full gap-3 text-[#1A202C]'>
            <p className='font-semibold text-sm'>Privacy & Policy</p>
            <p className='font-semibold text-sm'>Terms & Condition</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
