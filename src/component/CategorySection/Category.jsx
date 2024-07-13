// import React, { useState } from 'react'
// import { furniture } from '../../data/furnitures'
// import CategoryItem from './CategoryItem';

// const Category = () => {

//     const [selectedCategory, setSelectedCategory] = useState('All');

//     const categories = ['All', ...Array.from(new Set(furniture.flatMap(item => item.categories)))];

//     const filteredFurniture = selectedCategory === 'All'
//         ? furniture
//         : furniture.filter(item => item.categories.includes(selectedCategory));

//     return (
//         <div className='w-full py-20 bg-background font-Montserrat flex flex-col' id='listings'>
//             <div className='pb-20'>
//                 <h1 className='font-medium md:text-center text-left text-2xl pb-8'>Category</h1>
//                 <ul className='w-full flex items-center lg:justify-center md:justify-start gap-6 flex-row flex-nowrap overflow-x-scroll no-scrollbar'>
//                     {categories.map((category, index) => (
//                         <li className={`px-6 py-2 border rounded-full border-primary text-nowrap cursor-pointer ${selectedCategory === category ? 'bg-primary text-secondary' : ''} hover:scale-x-105`} onClick={() => setSelectedCategory(category)} key={index}>{category}</li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2">
//                 {filteredFurniture.map(item => (
//                     <CategoryItem
//                         id={item.id}
//                         image={item.image}
//                         name={item.name}
//                         description={item.description}
//                         price={item.price}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Category

// Category.js
import React, { useEffect } from 'react';
import useFurnitureStore from '../../hooks/useFurniture';
import CategoryItem from './CategoryItem';

const Category = () => {
    const { furniture, categories, selectedCategory, setSelectedCategory, fetchFurniture } = useFurnitureStore();
    console.log();
    useEffect(() => {
        fetchFurniture();
    }, [fetchFurniture]);

    const filteredFurniture = selectedCategory === 'All'
        ? furniture
        : furniture.filter(item => item.categories.some(category => category.name === selectedCategory));

    return (
        <div className='w-full py-20 bg-background font-Montserrat flex flex-col' id='listings'>
            <div className='pb-20'>
                <h1 className='font-medium md:text-center text-left text-2xl pb-8'>Category</h1>
                <ul className='w-full flex items-center lg:justify-center md:justify-start gap-6 flex-row flex-nowrap overflow-x-scroll no-scrollbar'>
                    {categories.map((category, index) => (
                        <li
                            className={`px-6 py-2 border rounded-full border-primary text-nowrap cursor-pointer ${selectedCategory === category ? 'bg-primary text-secondary' : ''} hover:scale-x-105`}
                            onClick={() => setSelectedCategory(category)}
                            key={index}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2">
                {filteredFurniture.map(item => (
                    <CategoryItem
                        // key={item.id}
                        id={item.id}
                        image={item.photos[0]?.url}
                        name={item.name}
                        description={item.description}
                        price={item.current_price[0]?.XAF[0]}
                    />
                ))}
            </div>
        </div>
    );
};

export default Category;
