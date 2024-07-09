import React from 'react'
import { useCart } from '../../../hooks/CartContext/CartProvider'

const Order = () => {
    const { cart } = useCart();
    return (
        <div>
            <h2 className='font-semibold text-2xl pt-6'>
                My Shopping Cart
            </h2>
            <div>
                {cart.map((item) => (
                    <div className='w-full '>
                        <div>
                            <img src={item.image} alt={item.name} className="h-32 w-32 object-cover rounded-md" />
                        </div>
                        <div></div>
                        <h4>${item.price},000</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Order