import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image"/>
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p>Price: ${item.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
          <input 
            type="number" 
            value={item.quantity} 
            onChange={(e) => handleQuantityChange(Number(e.target.value) || 1)}
            min="1"
          />
          <button onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
        </div>
        <button onClick={() => removeFromCart(item.id)} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;