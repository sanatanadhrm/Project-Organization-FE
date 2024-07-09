import React from 'react'
import { Button, Plus } from '@/components/constants';

export default function Navbar() {
  return (
    <section className="flex items-center justify-between w-full h-16 sm:h-24 sm:px-14 p-4 border-b-[0.5px] border-gray-200 bg-white z-10 fixed">
      <h1 className="text-[#FE853A] font-bold text-lg sm:text-3xl">OrgControl</h1>
      <div>
        <Button variant="outline" className="group font-semibold bg-[#FE853A] text-white hover:text-black">
          <Plus className="text-white mr-1 group-hover:text-black" />
          <span className="hidden sm:inline">Create Your Own Organization</span>
          <span className="inline sm:hidden">Create Org</span>
        </Button>
      </div>
    </section>
  )
}


