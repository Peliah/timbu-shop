import React from 'react'
import { useCart } from '../../hooks/CartContext/CartProvider'
import InputBox from '../../component/InputBox';

const Cart = () => {
  const { cart } = useCart();
  return (
    <div className='min-h-screen pt-20 px-36 font-Montserrat'>
      <div className='pb-20'>
        <h2 className='font-semibold text-2xl pt-6'>
          My Shopping Cart
        </h2>
        <div>
          <table className="w-full border-separate text-left  border-spacing-y-6">
            <thead>
              <tr>
                <th className="py-2 px-4 w-44"></th>
                <th className="py-2 px-4">Description</th>
                <th className="py-2 px-4">Colour</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Cancel</th>
              </tr>
            </thead>
            <tbody className=''>
              {cart.map((item) => (
                <tr key={item.id} className='shadow-md h-44 rounded-lg'>
                  <td className="py-2 px-4">
                    <img src={item.image} alt={item.name} className="h-32 w-32 object-cover rounded-md" />
                  </td>
                  <td className="py-2 px-4">{item.description}</td>
                  <td className="py-2 px-4">{item.colour ? item.colour : "N/A"}</td>
                  <td className="py-2 px-4">{item.quantity}</td>
                  <td className="py-2 px-4">${item.price},000</td>
                  <td className="py-2 px-4">
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='pb-10 flex flex-col gap-6 w-full mt-10'>
          <div className=' w-[55%] flex flex-row justify-between'>
            <div className='border rounded-md border-primary px-6 py-2 flex gap-6'>
              <h4 className='font-normal text-base opacity-85'>Items</h4>
              <p className='font-normal text-base'>{cart.length}</p>
            </div>
            <div className='border rounded-md border-primary px-6 py-2 flex gap-6'>
              <h4 className='font-normal text-base opacity-85'>Discount</h4>
              <p className='font-normal text-base'>{cart.length}</p>
            </div>
            <div className='border rounded-md border-primary px-6 py-2 flex gap-6'>
              <h4 className='font-normal text-base opacity-85'>Subtotal</h4>
              <p className='font-normal text-base'>{cart.length}</p>
            </div>
            <div className='border rounded-md border-primary px-6 py-2 flex gap-6'>
              <h4 className='font-normal text-base opacity-85'>Total</h4>
              <p className='font-normal text-base'>{cart.length}</p>
            </div>
          </div>
          <div className='w-[55%] flex gap-8 pt-8 '>
            <div className='w-full flex flex-col  gap-4 self-end'>
              <label>If you have a promotion code, please enter it here</label>
              <div className='flex w-full'>
                <InputBox />
                <button className='text-secondary bg-primary h-10 px-6 rounded-lg'>Apply Discount</button>
              </div>
            </div>
            <div className='self-end flex gap-4'>
              <button className='px-6 py-2 text-secondary bg-primary rounded-lg'>Checkout</button>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart