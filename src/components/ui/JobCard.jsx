import React from 'react'

export default function JobCard() {
  return (
    <div className='h-sceen'>
    {/* Card compo */}
        <div className=' p-4 border-white border-2 m-4 overflow-hidden rounded-md cursor-pointer '>
            <div className=' ' >
                <p>Java Full Stack Developer</p>
                <p>TCS pvt Ltd</p>
                <p>Pune, Maharashtra, India</p>
                <section className='flex flex-wrap   items-center'>
                    <p className=' bg-foreground mr-2 mt-1 text-white dark:text-black px-2 rounded-sm w-max '>8L-15L ayear</p>
                    <p className=' bg-foreground mr-2 mt-1 text-white dark:text-black px-2 rounded-sm w-max '>Fresher</p>
                    <p className=' bg-foreground mr-2 mt-1 text-white dark:text-black px-2 rounded-sm w-max '>Fulltime</p>
                    <p className=' bg-foreground mr-2 mt-1 text-white dark:text-black px-2 rounded-sm w-max '>Work form Home</p>
                </section>
                <hr className='my-2 text-black' />
                <p>Kayana is looking for a Full-stack developers who be required to manage a project from
                 conception to final product, requiring good organisational skills and attention to details.</p>

            </div>
        </div>
    </div>
  )
}
