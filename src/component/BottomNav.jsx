import React from 'react'

export const BottomNav = () => {
    return (
        <div className='flex w-full bg-secondary mt-10 h-10 items-center justify-evenly font-Montserrat text-primary md:hidden fixed bottom-0 '>
            <p>Home</p>
            <p>Cart</p>
            <p>Order</p>
            <p>Account</p>
        </div>
    )
}
