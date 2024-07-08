import React from 'react'
import Carousel from './Carousel'
import { slides } from '../../data/CarouseSlides'
import arrow from "../../assets/images/right-arrow-white.png"

const Heroe = () => {
    return (
        <div className='w-full min-h-screen bg-secondary bg-gradient-to-r from-primary from-60% to-secondary to-40% flex flex-row items-center justify-between pr-28 pl-28'>
            <div className='flex flex-col w-1/4 gap-10 text-secondary justify-end '>
                <h1 className='font-Montserrat text-6xl font-bold'>
                    Furniture that speaks your personality
                </h1>
                <p className='font-Montserrat font-normal text-2xl'>
                    Discover the embodiment of your unique style today
                </p>
                <button className='bg-secondary w-fit flex px-6 py-3 font-Montserrat font-semibold text-xl text-primary rounded-xl gap-4 '>
                    Explore Now
                    <div className='bg-primary rounded-lg px-3'><img src={arrow} /></div>
                </button>
            </div>


            <div className='w-3/6  flex items-center justify-center'>
                <div className='relative w-[550px]'>
                    <div className='absolute h-full w-full top-[-16px] right-[-16px] bg-primary-opacity'></div>
                    <Carousel autoSlide={true}>
                        {slides.map((s) => (
                            <img className='w-full top-2 left-[-8px] object-cover' src={s} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Heroe
