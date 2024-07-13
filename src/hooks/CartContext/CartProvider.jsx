import create from 'zustand';
import { persist } from 'zustand/middleware';
import { sales } from '../../api/Client';

const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (item) => set((state) => {
                const itemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);
                if (itemIndex > -1) {
                    const newCart = [...state.cart];
                    newCart[itemIndex].quantity += 1;
                    return { cart: newCart };
                }
                return { cart: [...state.cart, { ...item, quantity: 1 }] };
            }),
            removeFromCart: (itemId) => set((state) => ({
                cart: state.cart.filter(item => item.id !== itemId)
            })),
            updateQuantity: (itemId, quantity) => set((state) => ({
                cart: state.cart.map(item =>
                    item.id === itemId && quantity >= 1 ? { ...item, quantity } : item
                )
            })),
            clearCart: () => set({ cart: [] }),
            totalItems: () => {
                const { cart } = get();
                return cart.reduce((acc, item) => acc + item.quantity, 0);
            },
            totalPrice: () => {
                const { cart } = get();
                return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            },

            checkout: async (customerInfo) => {
                const { cart } = get();
                const productsSold = cart.map(item => ({
                    product_id: item.id,
                    amount: item.price,
                    quantity: item.quantity,
                    currency_code: "XAF" // Adjust currency code if needed
                }));

                const data = {
                    organization_id: import.meta.env.VITE_ORGANISATION_ID, // Ensure the correct organization ID
                    products_sold: productsSold,
                    currency_code: "XAF",
                    ...customerInfo,
                    mode_of_payment: "bank transfer",
                    sales_status: "pending",
                    description: `Sold furniture items to ${customerInfo.first_name} ${customerInfo.last_name}`
                };

                try {
                    const response = await sales.post("/sales", data);
                    console.log('Checkout successful:', response.data);
                    set({ cart: [] }); // Clear cart on successful checkout
                    return response.data;
                } catch (error) {
                    console.error('Checkout failed:', error.response ? error.response.data : error.message);
                    throw error;
                }
            }
        }),
        {
            name: 'cart-storage', // unique name for the localStorage key
        }
    )
);

export default useCartStore;
