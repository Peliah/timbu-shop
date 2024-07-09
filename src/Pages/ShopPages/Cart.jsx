import React from 'react'
import { useCart } from '../../hooks/CartContext/CartProvider'
import InputBox from '../../component/InputBox';
import { Cross1Icon, MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import cartFilled from '../../assets/images/fluent_cart-20-filled.png'
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useCart();
  return (
    <div className='min-h-screen pt-20 lg:px-36 md:px-10 px-3 font-Montserrat flex flex-col'>
      <div className='pb-20 relative'>
        <h2 className='font-semibold text-2xl pt-6'>
          My Shopping Cart
        </h2>
        <div className='sm:block hidden'>
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
                  <td className="py-2 px-4">
                    <div className='flex '>
                      <button className='bg-primary rounded-l-md px-3 p-2'><PlusIcon color='#fff' /></button>
                      <h4 className='px-3 p-2'>{item.quantity}</h4>
                      <button className=' bg-secondary rounded-r-md px-3 p-2'> <MinusIcon color='#254D4D' /></button>
                    </div>
                  </td>
                  <td className="py-2 px-4">${item.price},000</td>
                  <td className="py-2 px-4">
                    <button className="bg-red-500 text-white p-2 rounded border border-primary"><Cross1Icon /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {
          cart.map((item) => (
            <div className='flex w-full p-2 shadow-md rounded-lg gap-3 justify-between sm:hidden'>
              <div>
                <img src={item.image} alt={item.name} className="h-32 w-32 object-cover rounded-md" />
              </div>
              <div className='flex flex-col'>
                <div>{item.description}</div>
                <h4>${item.price},000</h4>
                <div className='flex gap-6 mt-auto'>
                  <div>{item.colour ? item.colour : "N/A"}</div>
                  <div className='flex '>
                    <button className='bg-primary rounded-l-md  px-1'><PlusIcon color='#fff' /></button>
                    <h4 className=' px-1'>{item.quantity}</h4>
                    <button className=' bg-secondary rounded-r-md  px-1'> <MinusIcon color='#254D4D' /></button>
                  </div>
                </div>
              </div>
              <button className="bg-red-500 text-white p-2 rounded border h-fit border-primary"><Cross1Icon /></button>
            </div>
          ))
        }
      </div>
      <div className='pb-10 flex flex-col gap-6 w-full mt-auto'>
        <div className=' md:w-[55%] w-full flex flex-row gap-6 md:flex-nowrap flex-wrap '>
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
        <div className='lg:w-[55%] w-full flex gap-8 md:pt-8 pt-4 lg:flex-nowrap flex-wrap'>
          <div className='w-full flex flex-col  gap-4 self-end'>
            <label>If you have a promotion code, please enter it here</label>
            <div className='flex w-full'>
              <InputBox />
              <button className='text-secondary bg-primary md:px-6 px-3 py-3 rounded-lg text-nowrap'>Apply Discount</button>
            </div>
          </div>
          <div className='self-end flex gap-4'>
            <button className='px-6 py-2 text-secondary bg-primary rounded-lg'><Link to={'/checkout'}>Checkout</Link></button>
            <button className='bg-primary rounded-lg p-6'></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart