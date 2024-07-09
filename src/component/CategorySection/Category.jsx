import React from 'react'
import { furniture } from '../../data/furnitures'
import CategoryItem from './CategoryItem';

const Category = () => {

    const categories = Array.from(
        new Set(furniture.flatMap(furnitur => furnitur.categories))
    );

    return (
        <div className='w-full py-20 bg-background font-Montserrat flex flex-col' id='listings'>
            <div className='pb-20'>
                <h1 className='font-medium md:text-center text-left text-2xl pb-8'>Category</h1>
                <ul className='w-full flex items-center lg:justify-center md:justify-start gap-6 flex-row flex-nowrap overflow-x-scroll no-scrollbar'>
                    {categories.map((category, index) => (
                        <li className='px-6 py-2 border rounded-full border-primary text-nowrap ' key={index}>{category}</li>
                    ))}
                </ul>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2">
                {furniture.map(item => (
                    <CategoryItem
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Category