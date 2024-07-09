import React from 'react'
import InputBox from '../../../component/InputBox'
import { countryOptions } from '../../../data/Countries'

const Payment = () => {
    return (
        <div className='w-full'>
            <h2 className='font-semibold text-2xl py-6'>
                Shipping Information
            </h2>
            <div className='flex flex-col gap-4 '>
                <div>
                    <label>Full Name</label>
                    <InputBox />
                </div>
                <div>
                    <label>Email</label>
                    <InputBox />
                </div>
                <div>
                    <label>Country</label>
                    {/* <InputBox /> */}
                    <select id="country" name="country">
                        {countryOptions.map((country, index) => (
                            <option key={index} value={country.value}>
                                {country.label}
                            </option>
                        ))}
                    </select>

                </div>
                <div className='flex flex-col gap-4 '>
                    <div>
                        <label>State</label>
                        <InputBox />
                    </div>
                    <div>
                        <label>Zip/Postal code</label>
                        <InputBox />
                    </div>
                </div>
            </div>
            <h2 className='font-semibold text-2xl py-6'>
                Payment Details
            </h2>
            <div>
                <div>
                    <label>Card Information</label>
                    <InputBox />
                </div>
                <div>
                    <InputBox />
                    <InputBox />
                </div>

            </div>

        </div>
    )
}

export default Payment