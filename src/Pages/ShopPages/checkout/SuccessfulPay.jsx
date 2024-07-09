import React from 'react'
import paySuccess from '../../../assets/images/pana.png'
import { Link } from 'react-router-dom'

const SuccessfulPay = () => {
    return (
        <div className='min-h-screen flex flex-col font-Montserrat gap-4 items-center  justify-center '>
            <img src={paySuccess} className='md:w-1/3 w-44' />
            <h2 className='text-lg font-medium'>Your Payment is Successful!!</h2>
            <p className='text-base font-base text-center'>Thank you for your patronage. An automated payment reciept would be sent to your registered email</p>
            <h2 className='text-xl font-medium underline'><Link to={'/'}>Back to home</Link></h2>
        </div>
    )
}

export default SuccessfulPay