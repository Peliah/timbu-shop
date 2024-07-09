import React from 'react'
import Order from './Order'
import Payment from './Payment'

const Checkout = () => {
    return (
        <div className='py-40 flex md:flex-row flex-col w-full justify-between lg:px-36 sm:px-10 px-4 font-Montserrat'>
            <div className='md:border-r border-none md:border-primary w-full'>
                <Order />
            </div>
            <div className='md:border-l border-none border-primary w-full'>
                <Payment />
            </div>
        </div>
    )
}

export default Checkout