"use client"
import React, { useState, createContext, useContext, useEffect } from "react";



const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {

    const [isMounted, setIsMounted] = useState(false);


    let cartLocal = []
    
    if (global?.window !== undefined) {
         cartLocal =  JSON.parse(localStorage.getItem("cart"));
        if (cartLocal === null) {
            cartLocal = [];
        }
    }

    const [cart, SetCart] = useState(cartLocal)


   


    const isInCart = (slug) => cart.find(item => item.slug === slug);

    const addToCart = (producto, quantity) => {
        if (isInCart(producto.slug)) {
            const newCart = cart.map(item => {
                if (item.slug === producto.slug) {
                    return { ...item, quantity: quantity + 1 }
                } else {
                    return item
                }
            })
            SetCart(newCart)
        } else {
            const newProducto = { ...producto, quantity: quantity };
            SetCart([...cart, newProducto])
        }
        
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

     useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }



    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.quantity || 0, 0)

    }


    const totalPrice = () => {
        return cart.reduce((acc, element) => acc + (element.precio * element.quantity), 0)
    }

    const removeItem = (slug) => {
        SetCart(cart.filter(item => item.slug !== slug));
    }


    const emptycart = () => {
        SetCart([])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            emptycart,
            totalQty,
            totalPrice,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )


}

