// // import React, { useEffect, useState } from 'react'
// // import { useParams } from 'react-router-dom';
// // import { useProduct } from '../../hooks/useProduct';
// // import Loader from '../../component/Loader';
// // import Toast from '../../component/Toastie';

// // const ProductPage = () => {
// //     const [toastVisible, setToastVisible] = useState(false);
// //     const { product_id } = useParams();
// //     const { product, loading, error } = useProduct(product_id);
// //     console.log(product_id);
// //     console.log(product);

// //     useEffect(() => {
// //         if (error) {
// //             setToastVisible(true); // Show toast when there's an error
// //         }
// //     }, [error]);

// //     const handleToastClose = () => {
// //         setToastVisible(false);
// //     };


// //     return (
// //         <div className='w-full  min-h-screen max-w-[1440px] mx-auto font-Montserrat pt-20'>
// //             {error && <Toast message={error} isVisible={toastVisible} onClose={handleToastClose} />}
// //             <div className='py-6'>
// //                 <h2 className='font-semibold text-2xl pt-6'>Product Page</h2>
// //             </div>

// //             {
// //                 !loading ? <Loader /> :

// //                     <div className='w-full flex flex-col gap-5 p-2'>
// //                         <div className='w-full flex gap-4'>
// //                             <div className='w-1/3 '>
// //                                 <img src={import.meta.env.VITE_OLD_BASE_URL + '/images/' + product?.photos[0]?.url} alt={product?.name} className='shadow-lg' />
// //                             </div>
// //                             <div className='py-6 flex flex-col'>
// //                                 <h1 className='font-semibold text-2xl'>{product?.name}</h1>

// //                                 <div className='mt-auto'>
// //                                     <div className='mb-10'>
// //                                         <h2>{ }</h2>
// //                                     </div>
// //                                     <div className='flex gap-4'>
// //                                         {product.photos.map((photo, index) => (
// //                                             <img key={index} src={import.meta.env.VITE_OLD_BASE_URL + '/images/' + photo.url} alt={`Product ${index + 1}`} className='w-20 shadow-md' />
// //                                         ))}
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                         <div>

// //                         </div>
// //                     </div>
// //             }
// //         </div>
// //     )
// // }

// // export default ProductPage


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import useProductStore from '../../hooks/useProduct'; // Import your Zustand store
// import Loader from '../../component/Loader';
// import Toast from '../../component/Toastie';

// // Custom hook using Zustand store
// const useProduct = (productId) => {
//     const { product, loading, error, fetchProduct } = useProductStore();

//     useEffect(() => {
//         if (productId) {
//             fetchProduct(productId);
//         }
//     }, [productId, fetchProduct]);

//     return { product, loading, error };
// };

// // ProductPage component
// const ProductPage = () => {
//     const [toastVisible, setToastVisible] = useState(false);
//     const { product_id } = useParams();
//     const { product, loading, error } = useProduct(product_id);

//     console.log(product);

//     useEffect(() => {
//         if (error) {
//             setToastVisible(true);
//         }
//     }, [error]);

//     const handleToastClose = () => {
//         setToastVisible(false);
//     };

//     return (
//         <div className='w-full min-h-screen pt-20 max-w-[1440px] sm:px-10 px-4 mx-auto font-Montserrat flex flex-col pb-10'>
//             {error && <Toast message={error} isVisible={toastVisible} onClose={handleToastClose} />}
//             <div className='py-6'>
//                 <h2 className='font-semibold text-2xl pt-6'>Product Page</h2>
//             </div>
//             {loading ? (
//                 <Loader />
//             ) : (
//                 product && (
//                     <div className='w-full flex flex-col gap-5 p-2'>
//                         <div className='w-full flex gap-4'>
//                             <div className='w-1/3'>
//                                 <img
//                                     src={`${import.meta.env.VITE_OLD_BASE_URL}/images/${product.photos[0]?.url}`}
//                                     alt={product.name}
//                                     className='shadow-lg'
//                                 />
//                             </div>
//                             <div className='py-6 flex flex-col'>
//                                 <h1 className='font-semibold text-2xl'>{product.name}</h1>
//                                 <div className='mt-auto'>
//                                     <div className='mb-10'>
//                                         <h2>{product.description}</h2>
//                                         <h2></h2>
//                                     </div>
//                                     <div className='flex gap-4'>
//                                         {product.photos.map((photo, index) => (
//                                             <img
//                                                 key={index}
//                                                 src={`${import.meta.env.VITE_OLD_BASE_URL}/images/${photo.url}`}
//                                                 alt={`Product ${index + 1}`}
//                                                 className='w-20 shadow-md'
//                                             />
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             )}
//         </div>
//     );
// };

// export default ProductPage;



import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProductStore from '../../hooks/useProduct'; // Import your Zustand store
import Loader from '../../component/Loader';
import Toast from '../../component/Toastie';
import arrowleft from '../../assets/images/left-arrow.png'

// Custom hook using Zustand store
const useProduct = (productId) => {
    const { product, loading, error, fetchProduct } = useProductStore();

    useEffect(() => {
        if (productId) {
            fetchProduct(productId);
        }
    }, [productId, fetchProduct]);

    return { product, loading, error };
};

// ProductPage component
const ProductPage = () => {
    const [toastVisible, setToastVisible] = useState(false);
    const { product_id } = useParams();
    const { product, loading, error } = useProduct(product_id);
    const navigate = useNavigate()

    useEffect(() => {
        if (error) {
            setToastVisible(true);
        }
    }, [error]);

    const handleToastClose = () => {
        setToastVisible(false);
    };

    return (
        <div className='w-full min-h-screen pt-20 max-w-[1440px] mx-auto font-Montserrat flex flex-col pb-16 px-4 sm:px-10 pb-'>
            {error && <Toast message={error} isVisible={toastVisible} onClose={handleToastClose} />}
            <div className='pb-6 pt-4'>
                <div onClick={() => { navigate(-1) }} className='cursor-pointer md:hidden mb-4'><img src={arrowleft} /></div>
                <h2 className='font-semibold text-2xl'>Product Page</h2>
            </div>
            {loading ? (
                <Loader />
            ) : (
                product && (
                    <div className='w-full flex flex-col gap-5 p-2'>
                        <div className='w-full flex flex-col md:flex-row gap-4'>
                            <div className='flex-shrink-0 md:w-1/3'>
                                <img
                                    src={`${import.meta.env.VITE_OLD_BASE_URL}/images/${product.photos[0]?.url}`}
                                    alt={product.name}
                                    className='w-full h-auto shadow-lg object-cover'
                                />
                            </div>
                            <div className='flex-1 py-6'>
                                <h1 className='font-semibold text-2xl mb-2'>{product.name}</h1>
                                <div className='mt-4'>
                                    <div className='mb-4'>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className='flex flex-wrap gap-4'>
                                        {product.photos.map((photo, index) => (
                                            <img
                                                key={index}
                                                src={`${import.meta.env.VITE_OLD_BASE_URL}/images/${photo.url}`}
                                                alt={`Product ${index + 1}`}
                                                className='w-20 h-20 object-cover shadow-md'
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default ProductPage;
