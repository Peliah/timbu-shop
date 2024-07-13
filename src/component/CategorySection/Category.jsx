// import React, { useEffect, useState } from 'react';
// import useFurnitureStore from '../../hooks/useFurniture';
// import CategoryItem from './CategoryItem';
// import Loader from '../Loader';
// import Toast from '../Toastie';
// import { useNavigate } from 'react-router-dom';

// const Category = () => {
//     const [toastVisible, setToastVisible] = useState(false);
//     const { furniture,
//         categories,
//         selectedCategory,
//         setSelectedCategory,
//         loading,
//         error,
//         fetchFurniture } = useFurnitureStore();

//     console.log(furniture);

//     useEffect(() => {
//         fetchFurniture();
//     }, [fetchFurniture]);

//     useEffect(() => {
//         if (error) {
//             setToastVisible(true); // Show toast when there's an error
//         }
//     }, [error]);

//     const handleToastClose = () => {
//         setToastVisible(false);
//     };


//     const filteredFurniture = selectedCategory === 'All'
//         ? furniture
//         : furniture.filter(item => item.categories.some(category => category.name === selectedCategory));

//     // const handleItemClick = (id) => {
//     //     navigate(`/product/${id}`);
//     // };

//     return (
//         <div className='w-full py-20 bg-background font-Montserrat flex flex-col min-h-screen' id='listings'>
//             {error && <Toast message={error} isVisible={toastVisible} onClose={handleToastClose} />}
//             <div className='pb-20'>
//                 <h1 className='font-medium md:text-center text-left text-2xl pb-8'>Category</h1>
//                 {loading ? <Loader /> :
//                     <ul className='w-full flex items-center lg:justify-center md:justify-start gap-6 flex-row flex-nowrap overflow-x-scroll no-scrollbar'>
//                         {categories.map((category, index) => (
//                             <li
//                                 className={`px-6 py-2 border rounded-full border-primary text-nowrap cursor-pointer ${selectedCategory === category ? 'bg-primary text-secondary' : ''} hover:scale-x-105`}
//                                 onClick={() => setSelectedCategory(category)}
//                                 key={index}
//                             >
//                                 {category}
//                             </li>
//                         ))}
//                     </ul>}
//             </div>
//             <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2">
//                 {filteredFurniture.map(item => (
//                     <CategoryItem
//                         // key={item.id}
//                         id={item.id}
//                         image={item.photos[0]?.url}
//                         name={item.name}
//                         description={item.description}
//                         price={item.current_price[0]?.XAF[0]}
//                     />
//                 ))}
//             </div>

//         </div>
//     );
// };

// export default Category;

import React, { useEffect, useState } from 'react';
import useFurnitureStore from '../../hooks/useFurniture';
import CategoryItem from './CategoryItem';
import Loader from '../Loader';
import Toast from '../Toastie';

const Category = () => {
    const [toastVisible, setToastVisible] = useState(false);
    const {
        furniture,
        categories,
        selectedCategory,
        setSelectedCategory,
        loading,
        error,
        fetchFurniture,
        currentPage,
        totalPages,
        setPage
    } = useFurnitureStore();

    useEffect(() => {
        fetchFurniture(currentPage);
    }, [fetchFurniture, currentPage]);

    useEffect(() => {
        if (error) {
            setToastVisible(true);
        }
    }, [error]);

    const handleToastClose = () => {
        setToastVisible(false);
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setPage(page);
            fetchFurniture(page);
        }
    };

    const filteredFurniture = selectedCategory === 'All'
        ? furniture
        : furniture.filter(item => item.categories.some(category => category.name === selectedCategory));

    return (
        <div className='w-full py-20 bg-background font-Montserrat flex flex-col min-h-screen' id='listings'>
            {error && <Toast message={error} isVisible={toastVisible} onClose={handleToastClose} />}
            <div className='pb-20'>
                <h1 className='font-medium md:text-center text-left text-2xl pb-8'>Category</h1>
                {loading ? <Loader /> :
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
                    </ul>}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 gap-2">
                {filteredFurniture.map(item => (
                    <CategoryItem
                        key={item.id} // Added key to fix React warnings
                        id={item.id}
                        image={item.photos[0]?.url}
                        name={item.name}
                        description={item.description}
                        price={item.current_price[0]?.XAF[0]}
                    />
                ))}
            </div>
            <div className="flex justify-center gap-4 mt-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-primary rounded-full bg-primary text-white disabled:bg-gray-300"
                >
                    Previous
                </button>
                <span className="text-lg">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-primary rounded-full bg-primary text-white disabled:bg-gray-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Category;
