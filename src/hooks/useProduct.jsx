// import { ClientProduct } from "../api/Client";


// import create from 'zustand';
// import { Client } from '../api/Client';

// const useProductStore = create((set) => ({
//     product: null,
//     loading: false,
//     error: null,
//     fetchProduct: async (productId) => {
//         set({ loading: true, error: null });
//         try {
//             const response = await ClientProduct.get(`${productId}`);

//             const product = response.data;

//             set({
//                 product: product,
//                 loading: false,
//                 error: null,
//             });
//         } catch (error) {
//             set({
//                 loading: false,
//                 error: error.response?.data?.message || error.message,
//             });
//         }
//     },
// }));

// export default useProductStore;


import { ClientProduct } from "../api/Client";
import create from 'zustand';
import useFurnitureStore from './useFurniture'; // Ensure you have the correct path

const useProductStore = create((set, get) => ({
    product: null,
    loading: false,
    error: null,
    fetchProduct: async (productId) => {
        set({ loading: true, error: null });
        try {
            const response = await ClientProduct.get(`${productId}`);
            const product = response.data;

            // Access the furniture store to get the furniture data
            const { furniture } = useFurnitureStore.getState();

            // Find the matching furniture item
            const matchingFurniture = furniture.find(item => item.id === product.id);

            // If matching furniture is found and the product price is null, use the furniture price
            if (matchingFurniture && !product.price) {
                product.price = matchingFurniture.current_price[0]?.XAF[0] || null;
            }

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
