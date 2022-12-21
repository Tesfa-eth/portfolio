import React from 'react'
import Image from "next/legacy/image";

export default function PortfolioCard({image}) {
  return (
    <div className='basis-1/3 flex-1 bg-slate-600 rounded-lg '>
        
        <Image src={image} className='object-cover rounded-lg' width={'100%'} height={'100%'} layout='responsive'/>
        <div className='flex text-center flex-col items-center'>
            <h3 className=''>Project name</h3>
            <h5 className=''>Project description</h5>
            <p>Used tools: </p>
        </div>
    </div>
  )
}
