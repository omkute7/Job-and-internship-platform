"use client"
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process'
import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../lotties/scooter.json';

import infocardanimation1 from '../lotties/infocardanimation1.json'
import infocardanimation2 from '../lotties/infocardanimation2.json'
import infocardanimation3 from '../lotties/infocardanimation3.json'

const animationMap = {
  'infocardanimation1': infocardanimation1,
  'infocardanimation2': infocardanimation2,
  'infocardanimation3': infocardanimation3
} 




const Data = [
  {
    id:1,
    title: "Get Compressive Carrier Guidance, Get Compressive Carrier Guidance",
    description: 'By guidance new first year students are unawares about new trends that are used in corporate Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, cupiditate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eveniet quos ratione porro corporis adipisci impedit optio iusto fugit, nostrum quae est soluta, nisi quit end',
    animation:'infocardanimation1',
    link: "/guidence"
  }, 
  {
    id:2,
    title: "Build Your Resume",
    description: 'By guidance new first year students are unawares about new trends that are used in corporate Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, cupiditate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, praesentium?',
    animation:'infocardanimation2',
    link: "/resume"

    
  },
 {
    id:3,
    title: "Find a Job/Internship",
    description: 'By guidance new first year students are unawares about new trends that are used in corporate Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, cupiditate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, praesentium?',
    animation:'infocardanimation3',
    link: "/jobs"
  }
]


function InfoCards({FlexReverse}) {
  
  const LimitText = (text, limit) =>{
    const words= text.split(' ');
    if(words.length > limit){
      return words.slice(0, limit).join(' ') + '...';
    }
    return text
  }
  
  return (
    <>
    {Data.map((job,index)=>(

    <section key={index}  className={`w-full  p-4 `}>
     <div className={` rounded-lg bg-gray-300 p-5 md:max-h-[70vh] dark:bg-neutral-700 md:flex flex flex-col-reverse md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse':''} `}>
      {/* Div 1 Left SIide */}
      <div  className=' md:max-w-[50vw] items-center md:flex md:flex-col md:justify-center md:items-start'>
        <p className=' font-bold text-2xl'>{job.title}</p>
        
        <p className=' dark:text-gray-300'> {job.description}</p>
         <Link className=' text-blue-500' href={job.link}>See More</Link>
      </div>
      {/* Div 2 Right SIide */}
      <div className='md:max-w-[50vw] w-full flex justify-center'>
         <Lottie
        animationData={animationMap[job.animation]}
        width={400}
        height={400}
        // loop={true}
      />  
      </div>
     </div>
    </section>
    ))}
    </>
  ) 
}

export default InfoCards

