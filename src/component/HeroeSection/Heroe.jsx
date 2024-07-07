import React from 'react'
import Carousel from './Carousel'
import { slides } from '../../data/CarouseSlides'

const Heroe = () => {
    return (
        <div className='w-full min-h-screen bg-secondary bg-gradient-to-r from-primary from-50% to-secondary to-50% relative flex flex-row items-center justify-between pr-28 pl-28'>
            {/* <div className='absolute w-1/2 bg-primary top-0 left-0 h-full z-0'></div> */}
            {/* <div className=' w-full z-10'> */}
            <div className='flex flex-col w-1/4 gap-10 text-secondary'>
                <h1 className='font-Montserrat text-6xl font-bold'>
                    Furniture that speaks your personality
                </h1>
                <p className='font-Montserrat font-normal text-2xl'>
                    Discover the embodiment of your unique style today
                </p>
                <button className='bg-secondary'>
                    Explore Now
                </button>
            </div>
            <div className='w-3/4 '>
                <Carousel>
                    {slides.map((s) => (
                        <img className='absolute w-full h-full top-2 left-[-8px] object-cover' src={s} />
                    ))}
                </Carousel>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Heroe
