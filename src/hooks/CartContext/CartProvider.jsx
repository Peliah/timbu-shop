import create from 'zustand';
import { persist } from 'zustand/middleware';

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
            // updateQuantity: (itemId, quantity) => set((state) => ({
            //     cart: state.cart.map(item =>
            //         item.id === itemId ? { ...item, quantity } : item
            //     )
            // })),
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
            }
        }),
        {
            name: 'cart-storage', // unique name for the localStorage key
        }
    )
);

export default useCartStore;
