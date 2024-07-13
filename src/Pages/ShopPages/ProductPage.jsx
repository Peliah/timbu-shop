import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProductStore from '../../hooks/useProduct'; // Import your Zustand store
import Loader from '../../component/Loader';
import Toast from '../../component/Toastie';
import arrowleft from '../../assets/images/left-arrow.png'
import trolley from '../../assets/images/trolley.png'
import useCartStore from '../../hooks/CartContext/CartProvider';

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
    const addToCart = useCartStore(state => state.addToCart);
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

    const handleAddToCart = () => {
        addToCart({ product });
        setToastVisible(true);
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
                        <div className='w-full flex flex-col md:flex-row gap-6'>
                            <div className='flex-shrink-0 md:w-1/3'>
                                <img
                                    src={`${import.meta.env.VITE_OLD_BASE_URL}/images/${product.photos[0]?.url}`}
                                    alt={product.name}
                                    className='w-full h-auto shadow-lg object-cover'
                                />
                            </div>
                            <div className='flex flex-col pt-20'>
                                <h1 className='font-semibold text-2xl mb-2'>{product.name}</h1>
                                <p> This is a {product.name}</p>
                                <div className='mt-auto'>
                                    <div className='mb-4'>
                                        <p> ${20000}</p>
                                        <button
                                            className="px-3 py-1 bg-tetiary text-secondary rounded-lg text-sm font-medium hover:scale-110"
                                            onClick={handleAddToCart}
                                        >
                                            <div className='md:block hidden'>Add to cart</div>
                                            <img className='md:hidden block w-4' src={trolley} />
                                        </button>

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
            <Toast message="Item added to cart successfully." isVisible={toastVisible} onClose={handleToastClose} />

        </div>
    );
};

export default ProductPage;
