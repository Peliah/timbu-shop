// import { PersonIcon } from '@radix-ui/react-icons';
// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import cartImg from '../assets/images/mynaui_cart.png';

// const Navbar = () => {
//     const location = useLocation();
//     const [bgColor, setBgColor] = useState('bg-transparent');

//     useEffect(() => {
//         const handleScroll = () => {
//             if (location.pathname === '/') {
//                 if (window.scrollY > 100) {
//                     setBgColor('bg-secondary');
//                 } else {
//                     setBgColor('bg-transparent');
//                 }
//             } else {
//                 setBgColor('bg-secondary');
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         // Clean up the event listener on component unmount
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [location.pathname]);

//     return (
//         <nav className={`w-full flex items-center justify-center h-20 ${bgColor} lg:bg-transparent  z-[999] fixed left-0 font-Montserrat`}>
//             <div className='w-full flex flex-row items-center justify-between h-10 lg:px-36 sm:px-10 px-4'>
//                 <figcaption className={`text-3xl capitalize ${location.pathname === '/' && bgColor === 'bg-transparent' ? 'lg:text-secondary text-primary' : 'text-primary'}`}>
//                     Elegant Furnitures
//                 </figcaption>
//                 <ul className='flex flex-row gap-10'>
//                     <li><Link to={'/'}>Home</Link></li>
//                     <li><Link to={'/about'}>About Us</Link></li>
//                     <li>Contact</li>
//                     <li><Link to={'/cart'}><img src={cartImg} alt="Cart" /></Link></li>
//                 </ul>
//                 <p><PersonIcon /></p>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


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

            <nav className={`w-full flex items-center justify-between h-20 ${bgColor} z-[999] fixed left-0 font-Montserrat`}>
                {/* <nav className={`w-full flex items-center justify-between h-20 ${bgColor} lg:bg-transparent z-[999] fixed left-0 font-Montserrat`}> */}
                <div className='w-full flex flex-row items-center justify-between h-10 lg:px-36 sm:px-10 px-4'>
                    <figcaption className={`text-3xl capitalize ${location.pathname === '/' && bgColor === 'bg-transparent' ? ' md:text-secondary text-primary' : 'text-primary'}`}>
                        Elegant Furnitures
                    </figcaption>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <Cross1Icon size={24} /> : <RowsIcon size={24} />}
                        </button>
                    </div>
                    <ul className={`flex flex-col md:flex-row md:gap-10 md:items-center ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
                        {
                            location.pathname === '/' ? <li><a href='#listings'>Listings</a></li> : <li><Link to={'/'}>Listings</Link></li>
                        }
                        {/* <li><Link to={'/about'}>About Us</Link></li> */}
                        <li><a href='#about'>About us</a></li>
                        <li><a href='#contact'>Contact</a></li>
                        {/* <li>Contact</li> */}
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
