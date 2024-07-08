import React from 'react'
import Order from './Order'
import Payment from './Payment'

const Checkout = () => {
    return (
        <div className='py-40 flex w-full justify-between px-36 font-Montserrat'>
            <div className='w-1/2 shadow-[.5px 0 0 #000]'>
                <Order />
            </div>
            <div className='w-1/2 shadow-[-.5px 0 0 #000]'>
                <Payment />
            </div>
        </div>
    )
}

export default Checkout