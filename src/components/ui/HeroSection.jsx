import React from 'react'
import { Input } from './input'
import { Button } from './button'

function HeroSection() {
  return (
    <div className='w-full  flex flex-col  '>
      {/* Hero Tag Line */}
      <div className=' mt-32'>
         <div
          className=' text-4xl md:text-8xl'
        >Find
          <span className='text-blue-500 font-bold'>Jobs</span> and
          <span className='text-blue-500 font-bold'>Internships</span><br />Easy And Fast</div> 
      </div>
      {/* Hero tagline description 1 line */}
      <div className=' md:px-2'>
        <p>Internsip Oppurtunities for College Students</p>
      </div >
      {/* Input Box for searchin Jobs [chadCn element] */}
      <div className=' md:flex  mt-10  space-x-7 '>
        <div className="flex w-full max-w-sm items-center space-x-2">
        
          <Input className=" focus-visible:bg-none" type="text" placeholder="Search Job Here" />
          <Button type="submit">Search</Button>
        </div>
        {/* <Button className="m-3 " >Find Jobs</Button> */}
      </div>


    </div>
  )
}

export default HeroSection