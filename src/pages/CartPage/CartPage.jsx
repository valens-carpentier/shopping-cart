import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem'; 
import './CartPage.css';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    const itemQuantity = parseInt(item.quantity) || 0;
    return acc + itemPrice * itemQuantity;
  }, 0);

  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item}/>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="checkout-btn" onClick={() => {/* Handle checkout navigation */}}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
