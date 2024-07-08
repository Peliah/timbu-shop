// import React from 'react';

// const CategoryItem = ({ image, name, description, price }) => {
//     return (
//         <div className="rounded-md shadow-xl font-Montserrat">
//             <div className="w-full h-96 overflow-hidden rounded-md">
//                 <img src={image} alt={name} className="w-full h-full object-cover" />
//             </div>
//             <div className="px-4 pt-4">
//                 <h2 className="text-lg font-medium">{name}</h2>
//                 <h3 className="text-sm font-normal">{description}</h3>
//                 <h4 className='text-base font-medium pt-3'>${price},000</h4>
//             </div>
//             <div className="flex justify-between p-4">
//                 <button className="px-3 py-1 bg-tetiary text-secondary rounded-lg text-sm font-medium">Add to cart</button>
//                 <button className="px-3 py-1 bg-primary text-secondary rounded-lg text-sm font-medium">View</button>
//             </div>
//         </div>
//     );
// };

// export default CategoryItem;


import React from 'react';
import { useCart } from '../../hooks/CartContext/CartProvider';

const CategoryItem = ({ id, image, name, description, price }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ id, image, name, description, price });
    };

    return (
        <div className="rounded-md shadow-xl font-Montserrat">
            <div className="w-full h-96 overflow-hidden rounded-md">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="px-4 pt-4">
                <h2 className="text-lg font-medium">{name}</h2>
                <h3 className="text-sm font-normal">{description}</h3>
                <h4 className='text-base font-medium pt-3'>${price},000</h4>
            </div>
            <div className="flex justify-between p-4">
                <button
                    className="px-3 py-1 bg-tetiary text-secondary rounded-lg text-sm font-medium"
                    onClick={handleAddToCart}
                >
                    Add to cart
                </button>
                <button className="px-3 py-1 bg-primary text-secondary rounded-lg text-sm font-medium">View</button>
            </div>
        </div>
    );
};

export default CategoryItem;
