import React from 'react'
import InputBox from '../../../component/InputBox'
import { countryOptions } from '../../../data/Countries'
import { useCart } from '../../../hooks/CartContext/CartProvider';
import frame from '../../../assets/images/Frame 985.png'
const Payment = () => {
    const { cart } = useCart();

    return (
        <div className='w-full'>
            <h2 className='font-semibold text-2xl py-6'>
                Shipping Information
            </h2>

            <div className='flex flex-col gap-4 '>
                <div>
                    <h3 className='font-normal text-base mb-2'>Full Name</h3>
                    <InputBox placeholder={"Jimmy Frank"} />
                </div>
                <div>
                    <h3 className='font-normal text-base mb-2'>Email</h3>
                    <InputBox placeholder={"jimmyfrank@gmail.com"} />
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-normal text-base mb-2'>Country</h3>
                    {/* <InputBox /> */}
                    <select id="country" name="country" placeholder="Nigeria" className='pl-6 pr-6 border rounded-lg border-primary w-full py-3 bg-transparent'>
                        {countryOptions.map((country, index) => (
                            <option key={index} value={country.value} className='font-Montserrat'>
                                {country.label}
                            </option>
                        ))}
                    </select>

                </div>
                <div className='flex flex-row gap-4 w-full'>
                    <div className='w-1/2'>
                        <h3 className='font-normal text-base mb-2'>State</h3>
                        <InputBox placeholder={'FCT'} />
                    </div>
                    <div className='w-1/2'>
                        <h3 className='font-normal text-base mb-2'>Zip/Postal code</h3>
                        <InputBox placeholder={'900110'} />
                    </div>
                </div>
            </div>
            <h2 className='font-semibold text-2xl py-6'>
                Payment Details
            </h2>
            <div className='flex flex-col gap-4'>
                <div >
                    <h3 className='font-normal text-base mb-2'>Card Information</h3>
                    <InputBox placeholder={'1234 5678 9012 3456'} icon={frame}/>
                </div>
                <div className='flex'>
                    <InputBox rounded='rounded-l-lg' placeholder={'12/26'} />
                    <InputBox rounded='rounded-r-lg' placeholder={'321'} />
                </div>
                <div className='flex gap-2 items-center font-light text-sm'>
                    <input type="checkbox" className='accent-primary'/>
                    <label for="vehicle1"> Billing address is same as shipping</label>
                </div>

            </div>

            <div className='flex justify-between mt-10 gap-8'>
                <button className='rounded-lg w-[30%] border text-primary  p-3'>Back</button>
                <button className='rounded-lg w-[65%] text-secondary bg-primary p-3'>Pay ${cart.length}</button>
            </div>

        </div>
    )
}

export default Payment