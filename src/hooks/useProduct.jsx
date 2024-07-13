// // useProduct.js
// import { useEffect } from 'react';
// import create from 'zustand';
// import { ClientProduct } from '../api/Client'; // Your Axios instance

import { ClientProduct } from "../api/Client";

// const useProductStore = create((set) => ({
//     product: null,
//     loading: false,
//     error: null,
//     fetchProduct: async (productId) => {
//         set({ loading: true, error: null });
//         try {
//             const response = await ClientProduct.get(`${productId}`, {
//                 params: {
//                     organization_id: import.meta.env.VITE_ORGANISATION_ID,
//                 },
//             });
//             set({ product: response.data, loading: false });
//         } catch (err) {
//             set({ error: 'Error fetching product', loading: false });
//         }
//     },
//     clearProduct: () => set({ product: null, loading: false, error: null }),
// }));

// const useProduct = (productId) => {
//     const { product, loading, error, fetchProduct, clearProduct } = useProductStore();

//     useEffect(() => {
//         if (productId) {
//             fetchProduct(productId);
//         }

//         return () => {
//             clearProduct();
//         };
//     }, [productId, fetchProduct, clearProduct]);

//     return { product, loading, error };
// };

// export { useProduct, useProductStore };


import create from 'zustand';
import { Client } from '../api/Client';

const useProductStore = create((set) => ({
    product: null,
    loading: false,
    error: null,
    fetchProduct: async (productId) => {
        set({ loading: true, error: null });
        try {
            const response = await ClientProduct.get(`${productId}`);

            const product = response.data;

            set({
                product: product,
                loading: false,
                error: null,
            });
        } catch (error) {
            set({
                loading: false,
                error: error.response?.data?.message || error.message,
            });
        }
    },
}));

export default useProductStore;
