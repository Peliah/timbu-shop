import React from 'react'

const Footer = () => {
    return (
        <div className="w-full h-[487px] px-[100px] pt-[60px] pb-8 bg-primary justify-center items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-10 inline-flex">
                <div className="flex-col justify-start items-start gap-[60px] flex">
                    <div className="w-[1240px] justify-between items-start inline-flex">
                        <div className="flex-col justify-start items-start gap-10 inline-flex">
                            <div className="flex-col justify-start items-start gap-6 flex">
                                <div className="text-secondary text-2xl font-medium font-Montserrat">Contact</div>
                                <div className="flex-col justify-start items-start gap-4 flex">
                                    <div className="text-secondary text-base font-normal font-Montserrat">For your orders contact us on</div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-8 flex">
                                <div className="flex-col justify-start items-start gap-4 flex">
                                    <div className="flex-col justify-start items-start gap-8 flex">
                                        <div className="text-secondary text-base font-normal font-Montserrat">elegantfurnitures@gmail.com</div>
                                    </div>
                                    <div className="text-secondary text-base font-normal font-Montserrat">+2347013781800</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-center gap-[60px] inline-flex">
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <div className="w-[296px] text-center text-secondary text-[32px] font-normal font-Montserrat">Elegant Furnitures</div>
                                <div className="self-stretch text-center text-secondary text-base font-normal font-Montserrat">We speak your personality!</div>
                            </div>
                            <div className="justify-start items-start gap-10 inline-flex">
                                <div className="text-secondary text-base font-normal font-Montserrat">Home</div>
                                <div className="text-secondary text-base font-normal font-Montserrat">Specials</div>
                                <div className="text-secondary text-base font-normal font-Montserrat">About</div>
                                <div className="text-secondary text-base font-normal font-Montserrat">Contact Us</div>
                            </div>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <div className="justify-start items-start gap-10 inline-flex">
                                    <div className="w-7 h-7 relative">
                                        <div className="w-7 h-7 left-0 top-0 absolute bg-primary/opacity-80 rounded-[5px]" />
                                        <div className="w-6 h-6 left-[2px] top-[2px] absolute" />
                                    </div>
                                    <div className="w-7 h-7 relative">
                                        <div className="w-7 h-7 left-0 top-0 absolute bg-primary/opacity-80 rounded-[5px]" />
                                    </div>
                                    <div className="w-7 h-7 relative">
                                        <div className="w-7 h-7 left-0 top-0 absolute bg-primary/opacity-80 rounded-[5px]" />
                                        <div className="w-6 h-6 left-[2px] top-[2px] absolute" />
                                    </div>
                                    <div className="w-7 h-7 relative">
                                        <div className="w-7 h-7 left-0 top-0 absolute bg-primary/opacity-80 rounded-[5px]" />
                                        <div className="w-6 h-6 left-[2px] top-[2px] absolute" />
                                    </div>
                                    <div className="w-7 h-7 relative">
                                        <div className="w-7 h-7 left-0 top-0 absolute bg-primary/opacity-80 rounded-[5px]" />
                                        <div className="w-6 h-6 left-[2px] top-[2px] absolute" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-8 inline-flex">
                            <div className="text-secondary text-2xl font-medium font-Montserrat">Our Office</div>
                            <div className="flex-col justify-start items-start gap-8 flex">
                                <div className="w-[265px] text-secondary text-base font-normal font-Montserrat">Visit us at any of our offices</div>
                                <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
                                    <div className="self-stretch text-secondary text-base font-medium font-Montserrat">Head office</div>
                                    <div className="self-stretch text-secondary text-base font-normal font-Montserrat">10, Adetokunbo Ademola Cresent, maitama, Abuja.</div>
                                </div>
                                <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
                                    <div className="self-stretch text-secondary text-base font-medium font-Montserrat">Branch office</div>
                                    <div className="self-stretch text-secondary text-base font-normal font-Montserrat">20, Lamil Adeoya Cresent, Ikeja, Lagos.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1240px] h-0.5 bg-red-50/opacity-20" />
                </div>
                <div className="w-[1240px] justify-between items-start inline-flex">
                    <div className="text-secondary text-base font-normal font-Montserrat">Copyright 2023. All Rights Reserved</div>
                    <div className="text-secondary text-base font-normal font-Montserrat">Privacy policy</div>
                    <div className="text-secondary text-base font-normal font-Montserrat">Terms of service</div>
                </div>
            </div>
        </div>
    )
}

export default Footer