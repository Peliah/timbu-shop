import create from 'zustand';
import Client from '../api/Client';

const useFurnitureStore = create((set) => ({
    furniture: [],
    categories: [],
    selectedCategory: 'All',
    loading: false, // Add loading state
    error: null, // Add error state
    setSelectedCategory: (category) => set({ selectedCategory: category }),
    fetchFurniture: async () => {
        set({ loading: true, error: null }); // Set loading to true at the start
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
                loading: false, // Set loading to false when data is fetched
                error: null, // Clear any previous errors
            });
        } catch (error) {
            set({
                loading: false,
                error: error.response?.data?.message || error.message
            }); // Set loading to false and save the error
            console.error('Error fetching furniture:', error);
        }
    },
}));

export default useFurnitureStore;
