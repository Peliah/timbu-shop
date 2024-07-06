import { PersonIcon } from '@radix-ui/react-icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <nav className={`w-full flex items-center justify-center h-20 bg-transparent z-[999] fixed left-0`}>
            <div className='w-full flex flex-row items-center justify-between h-10 pl-32 pr-32 '>
                <figcaption className='font-Montserrat text-3xl capitalize text-secondary'>Elegant Furnitures</figcaption>
                <ul className=' flex flex-row gap-10'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link>About Us</Link></li>
                    <li>Contact</li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                </ul>
                <p><PersonIcon /></p>
            </div>
        </nav>
    )
}

export default Navbar