import React from 'react'
import logoFb from '../assets/images/facebook-app-symbol.png'
import logoGoogle from '../assets/images/google-plus-logo.png'
import logoIG from '../assets/images/instagram.png'
import logoIn from '../assets/images/linkedin.png'
import logoTwitter from '../assets/images/twitter.png'
// import logoIn from '../assets/images/facebook-app-symbol.png'
const Footer = () => {
    return (
        // <div className="w-full h-[487px] px-[100px] pt-[60px] pb-8 bg-primary justify-center items-center inline-flex">
        //     <div className="self-stretch flex-col justify-start items-center gap-10 inline-flex">
        //         <div className="flex-col justify-start items-start gap-[60px] flex">
        //             <div className="w-[1240px] justify-between items-start inline-flex">
        //                 <div className="flex-col justify-start items-start gap-10 inline-flex">
        //                     <div className="flex-col justify-start items-start gap-6 flex">
        //                         <div className="text-secondary text-2xl font-medium font-Montserrat">Contact</div>
        //                         <div className="flex-col justify-start items-start gap-4 flex">
        //                             <div className="text-secondary text-base font-normal font-Montserrat">For your orders contact us on</div>
        //                         </div>
        //                     </div>
        //                     <div className="flex-col justify-start items-start gap-8 flex">
        //                         <div className="flex-col justify-start items-start gap-4 flex">
        //                             <div className="flex-col justify-start items-start gap-8 flex">
        //                                 <div className="text-secondary text-base font-normal font-Montserrat">elegantfurnitures@gmail.com</div>
        //                             </div>
        //                             <div className="text-secondary text-base font-normal font-Montserrat">+2347013781800</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex-col justify-start items-center gap-[60px] inline-flex">
        //                     <div className="flex-col justify-start items-start gap-4 flex">
        //                         <div className="w-[296px] text-center text-secondary text-[32px] font-normal font-Montserrat">Elegant Furnitures</div>
        //                         <div className="self-stretch text-center text-secondary text-base font-normal font-Montserrat">We speak your personality!</div>
        //                     </div>
        //                     <div className="justify-start items-start gap-10 inline-flex">
        //                         <div className="text-secondary text-base font-normal font-Montserrat">Home</div>
        //                         <div className="text-secondary text-base font-normal font-Montserrat">Specials</div>
        //                         <div className="text-secondary text-base font-normal font-Montserrat">About</div>
        //                         <div className="text-secondary text-base font-normal font-Montserrat">Contact Us</div>
        //                     </div>
        //                     <div className="flex-col justify-start items-start gap-4 flex">
        //                         <div className="justify-start items-start gap-10 inline-flex">
        //                             <div className="w-7 h-7 relative">
        //                                 <div className="w-7 h-7 left-0 top-0 absolute bg-primary/opacity-80 rounded-[5px]" />
        //                                 <div className="w-6 h-6 left-[2px] top-[2px] absolute" />
        //                             </div>
        //                             <div className="w-7 h-7 relative">
        //                                 <div className="w-7 h-7 left-0 top-0 absolute bg-primary/opacity-80 rounded-[5px]" />
        //                             </div>
        //                             <div className="w-7 h-7 relative">
        //                                 <div className="w-7 h-7 left-0 top-0 absolute bg-primary/opacity-80 rounded-[5px]" />
        //                                 <div className="w-6 h-6 left-[2px] top-[2px] absolute" />
        //                             </div>
        //                             <div className="w-7 h-7 relative">
        //                                 <div className="w-7 h-7 left-0 top-0 absolute bg-primary/opacity-80 rounded-[5px]" />
        //                                 <div className="w-6 h-6 left-[2px] top-[2px] absolute" />
        //                             </div>
        //                             <div className="w-7 h-7 relative">
        //                                 <div className="w-7 h-7 left-0 top-0 absolute bg-primary/opacity-80 rounded-[5px]" />
        //                                 <div className="w-6 h-6 left-[2px] top-[2px] absolute" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="flex-col justify-start items-start gap-8 inline-flex">
        //                     <div className="text-secondary text-2xl font-medium font-Montserrat">Our Office</div>
        //                     <div className="flex-col justify-start items-start gap-8 flex">
        //                         <div className="w-[265px] text-secondary text-base font-normal font-Montserrat">Visit us at any of our offices</div>
        //                         <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
        //                             <div className="self-stretch text-secondary text-base font-medium font-Montserrat">Head office</div>
        //                             <div className="self-stretch text-secondary text-base font-normal font-Montserrat">10, Adetokunbo Ademola Cresent, maitama, Abuja.</div>
        //                         </div>
        //                         <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
        //                             <div className="self-stretch text-secondary text-base font-medium font-Montserrat">Branch office</div>
        //                             <div className="self-stretch text-secondary text-base font-normal font-Montserrat">20, Lamil Adeoya Cresent, Ikeja, Lagos.</div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="w-[1240px] h-0.5 bg-red-50/opacity-20" />
        //         </div>
        //         <div className="w-[1240px] justify-between items-start inline-flex">
        //             <div className="text-secondary text-base font-normal font-Montserrat">Copyright 2023. All Rights Reserved</div>
        //             <div className="text-secondary text-base font-normal font-Montserrat">Privacy policy</div>
        //             <div className="text-secondary text-base font-normal font-Montserrat">Terms of service</div>
        //         </div>
        //     </div>
        // </div>

        <div className='w-full bg-primary lg:px-36 px-10 text-secondary font-Montserrat md:block hidden'>
            <div className='flex justify-between  w-full py-10'>
                <div className='flex flex-col w-1/3  gap-2' id='contact'>
                    <h1 className='font-medium text-2xl'>Contacts</h1>
                    <p className='font-thin text-base '>For your orders contact us on</p>
                    <p className='font-thin text-base pt-4'>elegantfurnitures@gmail.com</p>
                    <p className='font-thin text-base '>+2347013781800</p>
                </div>
                <div className='flex flex-col w-1/3 items-center gap-4'>
                    <h1 className=' font-medium text-2xl'>Elegant Furnitures</h1>
                    <p className=' font-light text-base '>We speak your personality!</p>
                    <div className='flex flex-col gap-10 pt-6'>

                        <ul className='flex flex-row justify-between font-light text-base w-96'>
                            <li><a href='#listings'>Listings</a></li>
                            <li><a href='#about'>About us</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                        <ul className='flex flex-row justify-evenly font-light text-base w-96'>
                            <li>
                                <img src={logoFb} width={16} />
                            </li>
                            <li>
                                <img src={logoIn} width={16} />
                            </li>
                            <li>
                                <img src={logoIG} width={16} />
                            </li>
                            <li>
                                <img src={logoTwitter} width={16} />
                            </li>
                            <li>
                                <img src={logoGoogle} width={16} />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-1/3 flex justify-end' id='about'>
                    <div className='flex flex-col w-72 gap-4 font-light'>
                        <h1 className=' font-medium text-2xl'>Our Office</h1>
                        <p className=' font-normal text-base '>Visit us at any of our offices</p>
                        <div>
                            <h3 className='font-medium'>Head office</h3>
                            <p>10, Adetokumbo Ademola Cresent, maitama, Abuja</p>
                        </div>
                        <div>
                            <h3 className='font-medium'>Branch office</h3>
                            <p>20, Lamil Adeoya Cresent, Ikeja, Lagos</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-between font-light border-t text-secondary text-base py-6'>
                <h4>Copyright 2023. All Rights Reserved</h4>
                <h4>Privacy policy</h4>
                <h4>Terms of Service</h4>
            </div>
        </div>
    )
}

export default Footer