import { Cross1Icon, PersonIcon, RowsIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import cartImg from '../assets/images/mynaui_cart.png';

const Navbar = () => {
    const location = useLocation();
    const [bgColor, setBgColor] = useState('bg-transparent');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                if (window.scrollY > 100) {
                    setBgColor('bg-secondary');
                } else {
                    setBgColor('bg-transparent');
                }
            } else {
                setBgColor('bg-secondary');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    return (
        <div>

            <nav className={`w-full flex items-center justify-between h-20 ${bgColor} z-[999] fixed font-Montserrat`}>
                <div className='w-full flex flex-row items-center justify-between h-10  sm:px-10 px-4  max-w-[1440px] mx-auto'>
                    <figcaption className={`md:text-3xl text-2xl capitalize ${location.pathname === '/' && bgColor === 'bg-transparent' ? ' md:text-secondary text-primary' : 'text-primary'}`}>
                        Elegant Furnitures
                    </figcaption>
                    <ul className={`hidden flex-col md:flex-row md:gap-10 md:items-center md:flex`}>
                        {
                            location.pathname === '/' ? <li><a href='#listings'>Listings</a></li> : <li><Link to={'/'}>Listings</Link></li>
                        }
                        <li><a href='#about'>About us</a></li>
                        <li><a href='#contact'>Contact</a></li>
                        <li><Link to={'/cart'}><img src={cartImg} alt="Cart" /></Link></li>
                    </ul>
                    <p className='hidden lg:block'><PersonIcon /></p>
                </div>
            </nav>
            <Outlet />
        </div>
    );
};

export default Navbar;
