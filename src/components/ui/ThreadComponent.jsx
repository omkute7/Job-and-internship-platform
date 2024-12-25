import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ThreadComponent() {
    return (
        <div className=' my-3 lg: w-[80%]'>
            <Link href="#">
                <div className=' border-2 border-white rounded-lg p-4 '>

                    {/* Title */}
                    <h2 className=' font-bold text-lg'>What are Basics required to Learn React</h2>

                    {/* description */}
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat tenetur libero asperiores, itaque reiciendis dignissimos, accusamus fuga aliquid nihil rerum accusantium cumque magni omnis facilis architecto vitae, voluptatum minus.
                    </p>
                    {/* Time */}
                    <div className=' flex justify-between'>
                        <p>12 hrs ago</p>
                        <p>120 Likes</p>

                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ThreadComponent