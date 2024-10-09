import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { fetchProducts } from '../../api/fakeStoreApi';
import './ShopPage.css';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading">Loading products...</p>;

  return (
    <div className="shop-page">
      <h2>Shop Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
