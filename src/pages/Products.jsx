import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div className="page">
      <h1>Products</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div>
              <h2>{product.name}</h2>
              <p>${product.price.toFixed(2)}</p>
            </div>
            <button type="button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
