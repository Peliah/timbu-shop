// useProduct.js
import { useEffect } from 'react';
import create from 'zustand';
import Client from '../api/Client'; // Your Axios instance

const useProductStore = create((set) => ({
    product: null,
    loading: false,
    error: null,
    fetchProduct: async (productId) => {
        set({ loading: true, error: null });
        try {
            const response = await Client.get(`/products/${productId}`, {
                params: {
                    organization_id: import.meta.env.VITE_ORGANISATION_ID,
                },
            });
            set({ product: response.data, loading: false });
        } catch (err) {
            set({ error: 'Error fetching product', loading: false });
        }
    },
    clearProduct: () => set({ product: null, loading: false, error: null }),
}));

const useProduct = (productId) => {
    const { product, loading, error, fetchProduct, clearProduct } = useProductStore();

    useEffect(() => {
        if (productId) {
            fetchProduct(productId);
        }

        return () => {
            clearProduct(); // Clear product data when the component unmounts or productId changes
        };
    }, [productId, fetchProduct, clearProduct]);

    return { product, loading, error };
};

export { useProduct, useProductStore };
