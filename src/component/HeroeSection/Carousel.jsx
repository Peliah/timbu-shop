import React, { useEffect, useState } from 'react'
import arrowleft from '../../assets/images/left-arrow.png'
import arrowright from '../../assets/images/right-arrow.png'
const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
    }

    const next = () => {
        setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
    }

    useEffect(() => {

        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [])

    return (
        <div className='flex justify-end flex-col relative'>
            <div className=' relative overflow-hidden'>
                <figure className='flex transition-transform ease-out duration-500'
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides}
                </figure>

            </div>
            <div className='absolute top-[110%] right-10  flex justify-evenly items-center w-10/12'>
                {/* <button onClick={prev}>prev</button> */}
                <div onClick={prev} className='cursor-pointer'><img src={arrowleft} /></div>
                {slides.map((_, i) => (
                    <h2 key={i} className={`${current === i ? 'font-semibold text-xl' : ''} text-primary`}>{i + 1}</h2>
                ))}
                <div onClick={next} className='cursor-pointer'><img src={arrowright} /></div>
                {/* <button onClick={next}>next</button> */}
            </div>
        </div>
    )
}

export default Carousel

