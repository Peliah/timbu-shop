import React from 'react'
import homeLight from '../assets/images/homeLight.png'
import homeDark from '../assets/images/homeDark.png'
import trolleyLight from '../assets/images/trolleyLight.png'
import trolleyDark from '../assets/images/trolleyDark.png'
import emailLight from '../assets/images/emailLight.png'
import emailDark from '../assets/images/emailDark.png'
import avatarDark from '../assets/images/avatarDark.png'
import avatarLight from '../assets/images/avatarLight.png'
import { Link, useLocation } from 'react-router-dom'

export const BottomNav = () => {
    const location = useLocation()
    return (
        <div className='flex w-full bg-secondary mt-10 p-6 items-center justify-between font-Montserrat text-primary md:hidden fixed bottom-0 '>
            <Link to={'/'}>
                <img src={location.pathname === '/' ? homeDark : homeLight} />
            </Link>
            <Link to={'/cart'}>
                <img src={location.pathname === '/cart' ? trolleyDark : trolleyLight} />
            </Link>
            <Link to={'/'}>
                <img src={location.pathname === '/order' ? emailDark : emailLight} />
            </Link>
            <Link to={'/'}>
                <img src={location.pathname === '/profile' ? avatarDark : avatarLight} />
            </Link>
            {/* <p>Order</p> */}
            {/* <p>Account</p> */}
        </div>
    )
}
