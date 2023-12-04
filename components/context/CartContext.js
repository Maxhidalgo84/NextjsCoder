"use client"
import React, { useState, createContext, useContext, useEffect } from "react";



const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {



    const [cart, SetCart] = useState([])

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

