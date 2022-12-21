import React from 'react'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'

export default function SocialMediaIcons() {
  return (
    <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
            <AiFillTwitterCircle className=' hover:text-sky-400 hover:scale-110 hover:-translate-y-1 duration-300 cursor-pointer'/>
            <AiFillLinkedin className=' hover:text-teal-500 hover:scale-110 hover:-translate-y-1 duration-300 cursor-pointer'/>
            <AiFillYoutube className=' hover:text-red-600 hover:scale-110 hover:-translate-y-1 duration-300 cursor-pointer'/>
    </div>
  )
}
