import React, { children, useEffect, useContext, createContext, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {


  const getCartFromLocalStorage = () => {
  try {
    const stored = localStorage.getItem('cart');
    if (!stored || stored === 'undefined') return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to parse cart from localStorage:', error);
    return [];
  }
}

    const [cart, setCart] = useState(getCartFromLocalStorage)

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const handleAddToCart =(product) =>{
        setCart(prevcart => {
          // console.log(prevcart);
          const productExist = prevcart.find(item => item.id === product.id)
          if(productExist){
            return prevcart.map(item => (
              product.id === item.id ? {...item, quantity:item.quantity + 1} : item
              
            ))
          }
          else {
            return [...prevcart, {...product, quantity: 1}]
          }

          
          
        })

    }

    const decreaseQuantity = (id) => {
      setCart(prevcart => 
        prevcart.map(item => {
            if(item.id === id && item.quantity > 1){
               return {...item, quantity:item.quantity - 1}
            }
           return item
      })
      )
    }

    const removeCart = (id) => {
      setCart(prevcart => prevcart.filter(item => item.id !== id))
    }

  return (
    <CartContext.Provider value={{handleAddToCart, removeCart, cart, decreaseQuantity}} >
        {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext);
};