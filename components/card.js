import React from 'react'
import Image from "next/legacy/image";
import { useState } from 'react';
export default function Card({image, title,description,tools}) {
  return (
    <div className=' flex text-center flex-col items-center shadow-lg pd-10 bg-gradient-to-b from-teal-700 to-white rounded-xl my-10'>
      <div className='pt-5'>
        <Image src={image} width={100} height={100}/>
      </div>
      <h3 className='text-lg font-medium pt-8 pb-2'>{title}</h3>
      <p className='py-2'>
      {description}
      </p>
      
      <h4 className='py-4 text-teal-600'>Design tools I use</h4>
      {tools.map((toolItem, index)=> {
          return  <p key={index} className=' text-gray-800 py-1'>{toolItem}</p>
      })}
        
    </div>
  )
}
