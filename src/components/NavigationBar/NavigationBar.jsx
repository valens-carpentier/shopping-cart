import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './NavigationBar.css';

const NavBar = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Amazona</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
      <div className="navbar-cart">
        <Link to="/cart">
          🛒 {totalItems}
        </Link>
        <button onClick={() => {/* Navigate to checkout */}}>
          Checkout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;