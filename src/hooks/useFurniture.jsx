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

            // const items = response.data.items;
            // const categories = ['All', ...new Set(items.flatMap(item => item.categories.map(category => category.name)))];

            console.log('Response data:', response.data); // Log the response data

            if (response.data && Array.isArray(response.data.items)) {
                const items = response.data.items;
                const categories = ['All', ...new Set(
                    items.map(item => item.categories.map(category => category.name))
                        .reduce((acc, categoryArray) => acc.concat(categoryArray), [])
                )];

                set({
                    furniture: items,
                    categories: categories,
                });
            } else {
                throw new Error('Invalid response structure');
            }

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
