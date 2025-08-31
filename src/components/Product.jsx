import React, { useState } from 'react'
import { products } from '../data/Data'
import { useCart } from '../useContext/CartContext'

const product = () => {
    const[search,setSearch] = useState('')

    const {handleAddToCart} = useCart()
    
      const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
    
  return (
    <>
     <input onChange={e => setSearch(e.target.value)} className='in'  type="text" placeholder='search products'/>
    <div className='product-grid'>
       
      {filteredProducts.map((pro )=>(
        <div className='products' key={pro.id}>
        <img className='img' src={pro.image} alt="" />
        <h1>{pro.name}</h1>
        <span>₹{pro.price}</span>
        <p>{pro.description}</p>
        <h4>{pro.category}</h4>
        <h5>{pro.rating}</h5>
        <button onClick={() => handleAddToCart(pro) }>Add to cart</button>
       
        </div>
      ))}
       {filteredProducts.length === 0 && (
          <p>No products found.</p>
        )}
    </div>
    
    </>
  )
}

export default product
