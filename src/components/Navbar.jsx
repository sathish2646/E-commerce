import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../useContext/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {cart} = useCart()

  return (
    <nav className="navbar">
      <div className="navbar__logo">Logo</div>

      <div
        className={`navbar__toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar__menu ${menuOpen ? 'active' : ''}`}>
       <li> <Link to='/'>Home</Link></li>
        <li> <Link to='/addtocart'>Cart<span className='cart-count'>{cart.length}</span></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
