import React, { useState } from 'react'

const Carousel = ({ children: slides }) => {
    const [current, setCurrent] = useState(0)
    return (
        <div className='flex justify-end '>
            <div className=' relative '>
                <figure className='relative bg-primary-opacity w-[662px] h-[596px] flex'>
                    {slides}
                </figure>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Carousel