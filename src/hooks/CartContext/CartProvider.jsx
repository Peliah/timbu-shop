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

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
