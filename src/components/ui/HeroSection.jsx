import React from 'react'
import { Input } from './input'
import { Button } from './button'

function HeroSection() {
  return (
    <div className='w-full h-screen flex flex-col  items-center'>
        {/* Hero Tag Line */}
        <div className=' mt-32'>
            <p
             className=' text-8xl'
             >Find 
             <span className='text-blue-500 font-bold'>Jobs</span> and
             <span className='text-blue-500 font-bold'>Internships</span><br/>Easy And Fast</p>
        </div>
        {/* Hero tagline description 1 line */}
        <div className=' items-start'>
            <p>Internsip Oppurtunities for College Students</p>
        </div >
        {/* Input Box for searchin Jobs [chadCn element] */}
        <div className='flex w-[60vh] mt-10 items-center space-x-3'>
        <Input lablep />
        <Button>Find Jobs</Button>
        </div>
       

    </div>
  )
}

export default HeroSection