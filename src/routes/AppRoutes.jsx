import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import HomePage from '../pages/HomePage/HomePage';
import ShopPage from '../pages/ShopPage/ShopPage';
import CartPage from '../pages/CartPage/CartPage';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const AppRoutes = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;