import React from 'react'
import { useCart } from '../../hooks/CartContext/CartProvider'

const Cart = () => {
  const { cart } = useCart();
  return (
    <div className='min-h-screen pt-20 px-36 font-Montserrat'>
      <div className=''>
        <h2 className='font-semibold text-2xl'>
          My Shopping Cart
        </h2>
        <div>
          {/* <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border py-2 px-4"></th>
                <th className="border py-2 px-4">Description</th>
                <th className="border py-2 px-4">Quantity</th>
                <th className="border py-2 px-4">Price</th>
                <th className="border py-2 px-4">Cancel</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <td className="border py-2 px-4">
                    <img src={item.image} alt={item.name} className="h-16 w-16 object-cover" />
                  </td>
                  <td className="border py-2 px-4">{item.description}</td>
                  <td className="border py-2 px-4">{item.quantity}</td>
                  <td className="border py-2 px-4">${item.price}</td>
                  <td className="border py-2 px-4">
                    <button className="bg-red-500 text-white py-1 px-2 rounded">Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
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
        <div>
          <div>
            <div>
              <h4>Items</h4>
              <p>{cart.length}</p>
            </div>
            <div>
              <h4>Discount</h4>
              <p>{cart.length}</p>
            </div>
            <div>
              <h4>Subtotal</h4>
              <p>{cart.length}</p>
            </div>
            <div>
              <h4>Total</h4>
              <p>{cart.length}</p>
            </div>
          </div>
          <div>
            <div><label>If you have a promotion code, please enter it here</label></div>
            <div>
              <button>Checkout</button>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart