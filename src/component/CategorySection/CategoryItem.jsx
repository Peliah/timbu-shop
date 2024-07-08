import React from 'react';

const CategoryItem = ({ image, name, description }) => {
    return (
        <div className="border p-4 bg-white shadow-md rounded-md">
            <div className="mb-4">
                <img src={image} alt={name} className="w-full h-auto object-cover rounded-md" />
            </div>
            <div className="mb-4">
                <h2 className="text-lg font-bold">{name}</h2>
                <h3 className="text-gray-600">{description}</h3>
            </div>
            <div className="flex justify-between">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Add to cart</button>
                <button className="px-4 py-2 bg-gray-200 rounded-md">View</button>
            </div>
        </div>
    );
};

export default CategoryItem;