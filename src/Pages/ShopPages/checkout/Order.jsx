import React from 'react'
import { useCart } from '../../../hooks/CartContext/CartProvider'
import { CaretDownIcon } from '@radix-ui/react-icons';

const Order = () => {
    const { cart, totalItems, totalPrice } = useCart();
    return (
        <div className='w-full'>
            <h2 className='font-semibold text-2xl py-6'>
                Order Summary
            </h2>
            <div>
                {cart.map((item) => (
                    <div className='w-full flex gap-4 p-2 shadow-md rounded-lg mb-4'>
                        <div>
                            <img src={item.image} alt={item.name} className="h-32 w-32 object-cover rounded-md" />
                        </div>
                        <div className='flex justify-between w-full py-2 pr-4'>
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <h4 className='font-medium'>
                                        {item.description}
                                    </h4>
                                </div>
                                <h4 className='flex gap-1 text-sm'>Qty {item.quantity} <CaretDownIcon /></h4>
                            </div>
                            <h4 className='text-primary'>${item.price},000</h4>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full flex justify-end'>
                <div className='w-[calc(100%-128px)] p-4 '>
                    <div className='flex justify-between items-start border-b pb-2 mb-4'>
                        <h2 className='text-lg font-medium'>Subtotal</h2>
                        <h2 className='text-lg font-medium  text-primary'>${totalPrice * 1000}</h2>
                    </div>
                    <div className='flex justify-between items-start border-b pb-6 mb-4 opacity-55'>
                        <div>
                            <h2 className='text-lg font-medium'>Shipping</h2>
                            <h2 className='text-base font-normal'>Express Shipping (3-5 business days)</h2>

                        </div>
                        <h2 className='text-lg font-medium text-primary'>${10}</h2>
                    </div>
                    <div className='flex justify-between items-start mt-4 py-2 mb-4'>
                        <h2 className='text-lg font-medium'>Subtotal</h2>
                        <h2 className='text-lg font-medium text-primary'>${(totalPrice * 1000) + 10}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order