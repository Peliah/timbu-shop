// import React from 'react';

// const CategoryItem = ({ image, name, description }) => {
//     return (
//         <div className="border p-4 bg-white shadow-md rounded-md h-[575px]">
//             <div className="mb-4">
//                 <img src={image} alt={name} className="w-full h-auto object-cover rounded-md" />
//             </div>
//             <div className="mb-4">
//                 <h2 className="text-lg font-bold">{name}</h2>
//                 <h3 className="text-gray-600">{description}</h3>
//             </div>
//             <div className="flex justify-between">
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Add to cart</button>
//                 <button className="px-4 py-2 bg-gray-200 rounded-md">View</button>
//             </div>
//         </div>
//     );
// };

// export default CategoryItem;


import React from 'react';

const CategoryItem = ({ image, name, description, price }) => {
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
                <button className="px-3 py-1 bg-tetiary text-secondary rounded-lg text-sm font-medium">Add to cart</button>
                <button className="px-3 py-1 bg-primary text-secondary rounded-lg text-sm font-medium">View</button>
            </div>
        </div>
    );
};

export default CategoryItem;
