import { Button } from './ui/button'
import Image from 'next/image'
import React from 'react'



function InfoCards({FlexReverse}) {
  return (
    <section className={`w-full mt-14 md:flex justify-center ${FlexReverse} space-y-2 md:space-x-3 p-2 rounded-xl `}>
      <div className='flex flex-col md:max-w-[40vw] md:justify-even space-y-2'>

        <div className=' p-5 border-[0.5px] rounded-2xl  dark:bg-[#202124] dark:text-white  bg-slate-50 text-black '>
          <h3 className=' font-bold text-xl'>Get Compressive
            Carrier Guidance, Get Compressive
            Carrier Guidance </h3>
          <p className='text-lg'>By guidance new first year
            students are unawares about
            new trends that are used in
            corporate
          </p>
        </div>
        <Button>Build Resume</Button>
      </div>
      <div className=' items-center flex justify-center'>
        <Image
          className=' md:w-[80%] rounded-xl '
          src="/laptop.jpg"
          alt='InfoImage'
          height={0}
          width={300}
        />
      </div>
    </section>
  ) 
}

export default InfoCards

