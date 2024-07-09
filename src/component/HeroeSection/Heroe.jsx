import React from 'react'
import Carousel from './Carousel'
import { slides } from '../../data/CarouseSlides'
import arrow from "../../assets/images/right-arrow-white.png"

const Heroe = () => {
    return (
        <div className='w-full lg:min-h-screen min-h-fit py-44 bg-secondary bg-gradient-to-r from-primary from-60% to-secondary to-40% md:flex hidden flex-row items-center justify-between lg:px-36 sm:px-10 px-4 '>
            <div className='flex flex-col lg:w-1/4 w-3/6 gap-10 text-secondary justify-end '>
                <h1 className='font-Montserrat lg:text-6xl text-5xl font-bold'>
                    Furniture that speaks your personality
                </h1>
                <p className='font-Montserrat font-normal text-2xl'>
                    Discover the embodiment of your unique style today
                </p>
                <button className='bg-secondary text-nowrap  w-fit flex px-2 py-3 items-center font-Montserrat font-semibold lg:text-xl text-lg text-primary rounded-xl gap-4 hover:scale-110'>
                    Explore Now
                    <div className='bg-primary rounded-lg px-2  w-full'><img cl src={arrow} /></div>
                </button>
            </div>


            <div className='w-3/6  flex items-center justify-center'>
                <div className='relative w-[550px]'>
                    <div className='absolute h-full w-full top-[-16px] right-[-16px] bg-primary-opacity'></div>
                    <Carousel autoSlide={true}>
                        {slides.map((s) => (
                            <img className='w-[550px] object-cover' src={s} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Heroe
