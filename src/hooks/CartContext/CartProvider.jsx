import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            console.log(item);
            const itemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
            console.log(itemIndex);
            if (itemIndex > -1) {
                const newCart = [...prevCart];
                newCart[itemIndex].quantity += 1;
                return newCart;
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
    };

    const incrementQuantity = (itemId) => {
        setCart((prevCart) => {
            return prevCart.map(item =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            );
        });
    };

    const decrementQuantity = (itemId) => {
        setCart((prevCart) => {
            return prevCart.map(item =>
                item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    };

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
