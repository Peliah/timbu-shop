import React from 'react'
import Order from './Order'
import Payment from './Payment'

const Checkout = () => {
    return (
        <div className='py-40 xl:px-36 lg:px-24 md:px-10 px-4 font-Montserrat min-h-screen flex flex-col'>
        {/* <div className='py-40 flex md:flex-row flex-col w-full gap-20 justify-between xl:px-36 lg:px-24 sm:px-10 px-4 font-Montserrat min-h-fit'> */}
            <div className='flex md:flex-row flex-col w-full gap-20 justify-between h-full'>
                <div className='md:border-r border-none md:border-primary w-full h-full'>
                    <Order />
                </div>
                <div className='md:border-l border-none border-primary w-full h-full'>
                    <Payment />
                </div>
            </div>
            <div className='mt-auto w-full flex gap-6 pt-20 items-center md:justify-start justify-center '>
                <span>Powered by <span className='font-bold'>Stripe</span></span>
                <span>Terms</span>
                <span>Policy</span>
            </div>
        </div>
    )
}

export default Checkout