import React from 'react';
import { useCart } from '../../hooks/CartContext/CartProvider';
import trolley from '../../assets/images/trolley.png'
const CategoryItem = ({ id, image, name, description, price }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ id, image, name, description, price });
    };

    return (
        <div className="rounded-md shadow-xl font-Montserrat flex flex-col hover:scale-105">
            <div className="w-full md:h-96 h-36 overflow-hidden rounded-md">
                <img src={image} alt={name} className="w-full h-full object-cover " />
            </div>
            <div className="px-4 pt-4">
                <h2 className="md:text-lg text-base font-medium">{name}</h2>
                <h3 className="text-sm font-normal">{description}</h3>
                <h4 className='text-base font-medium pt-3'>${price},000</h4>
            </div>
            <div className="flex justify-between p-4 mt-auto">
                <button
                    className="px-3 py-1 bg-tetiary text-secondary rounded-lg text-sm font-medium hover:scale-110"
                    onClick={handleAddToCart}
                >
                    <div className='md:block hidden'>Add to cart</div>
                    <img className='md:hidden block w-4' src={trolley} />
                </button>
                <button className="px-3 py-1 bg-primary text-secondary rounded-lg text-sm font-medium hover:scale-110">View</button>
            </div>
        </div>
    );
};

export default CategoryItem;
