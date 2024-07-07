import React, { useState } from 'react'

const Carousel = ({ children: slides }) => {
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
    }

    const next = () => {
        setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
    }

    return (
        <div className='flex justify-end flex-col relative'>
            <div className=' relative overflow-hidden'>
                <figure className='flex transition-transform ease-out duration-500'
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides}
                </figure>

            </div>
            <div className='absolute top-[110%] right-1/2 left-0  flex justify-evenly w-full'>
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    )
}

export default Carousel

