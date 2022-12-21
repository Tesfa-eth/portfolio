import React from 'react'
import Image from "next/legacy/image";
import avatarbg from '../public/avatar-nobg.png';

export default function Avatar() {
  return (
    <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96'>
        <Image src={avatarbg} />
    </div>
    
  )
}
