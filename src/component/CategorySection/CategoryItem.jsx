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

const CategoryItem = ({ image, name, description }) => {
    return (
        <div className="p-4 border border-gray-300 rounded-md shadow-sm">
            <div className="w-full h-96 overflow-hidden rounded-t-md">
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold">{name}</h2>
                <h3 className="text-sm text-gray-600">{description}</h3>
            </div>
            <div className="flex justify-between mt-4">
                <button className="px-4 py-2 bg-primary text-white rounded">Add to cart</button>
                <button className="px-4 py-2 bg-secondary text-white rounded">View</button>
            </div>
        </div>
    );
};

export default CategoryItem;
