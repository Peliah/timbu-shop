import React from 'react'
import { furniture } from '../../data/furnitures'
import CategoryItem from './CategoryItem';

const Category = () => {

    const categories = Array.from(
        new Set(furniture.flatMap(furnitur => furnitur.categories))
    );

    return (
        <div className='w-full pt-20 bg-background font-Montserrat flex flex-col'>
            <div className='pb-20'>
                <h1 className='font-medium text-center text-2xl pb-8'>Category</h1>
                <ul className='w-full flex items-center justify-center gap-6 flex-row'>
                    {categories.map((category, index) => (
                        <li className='px-6 py-3 border rounded-full border-primary' key={index}>{category}</li>
                    ))}
                </ul>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {furniture.map(item => (
                    <CategoryItem
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Category