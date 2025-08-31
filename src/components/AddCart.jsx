import React from 'react'
import { useCart } from '../useContext/CartContext'

const AddCart = () => {

  const {cart, removeCart, handleAddToCart, decreaseQuantity} = useCart()

  return (
    <div className='product-grid'>
       
      {cart.map((pro )=>(
        <div className='products' key={pro.id}>
        <img className='img' src={pro.image} alt="" />
        <h1>{pro.name}</h1>
        <span>₹{pro.price * pro.quantity}</span>
        <p>{pro.description}</p>
        <h4>{pro.category}</h4>
        <h5>{pro.rating}</h5>
        
        <div>
          <button onClick={() => handleAddToCart(pro)}>+</button>
          <span> Quantity : {pro.quantity}</span>
          <button onClick={() => decreaseQuantity(pro.id)}>-</button>
        </div>
        <button onClick={() =>removeCart(pro.id)}>Remove</button>
       
        </div>
      ))}
       {cart.length === 0 && (
          <p>No products found.</p>
        )}
    </div>
  )
}

export default AddCart
