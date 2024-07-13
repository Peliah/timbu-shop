// useFurnitureStore.js
import create from 'zustand';
import Client from '../api/Client';

// const ORGANIZATION_ID = import.meta.env.VITE_ORGANIZATION_ID;

const useFurnitureStore = create((set) => ({
    furniture: [],
    categories: [],
    selectedCategory: 'All',
    setSelectedCategory: (category) => set({ selectedCategory: category }),
    fetchFurniture: async () => {
        try {
            const response = await Client.get('/products', {
                params: {
                    organization_id: import.meta.env.VITE_ORGANISATION_ID,
                },
            });

            const items = response.data.items;
            const categories = ['All', ...new Set(items.flatMap(item => item.categories.map(category => category.name)))];

            set({
                furniture: items,
                categories: categories,
            });
        } catch (error) {
            console.error('Error fetching furniture:', error);
        }
    },
}));

export default useFurnitureStore;
