import ThreadComponent from '@/components/ui/ThreadComponent'
import React from 'react'

function Thread() {
  return (

    

    <div className=' w-full px-9 py-2 '>
    <div className=' w-full lg:flex justify-center xl:w-80vw'>

      <div className=' w-full '>
        <div className='  '>
          <ThreadComponent />
          <ThreadComponent />
          <ThreadComponent />
          <ThreadComponent />
        </div>
        <div className='lg:block hidden'>
          <p>sidebar</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Thread