import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../features/cart/cartSlice';

const products = [
  { id: 1, name: 'Bánh ngọt', price: 100000 },
  { id: 2, name: 'Kẹo', price: 50000 },
];

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div>
      <h2>Giỏ hàng</h2>

      <div style={{ marginBottom: '20px' }}>
        {products.map(product => (
          <div
            key={product.id}
          >
            <span style={{ flex: 1 }}>{product.name} - {product.price.toLocaleString()}₫</span>
            <button onClick={() => dispatch(addItem(product))}>
              Thêm
            </button>
          </div>
        ))}
      </div>

      <ul>
        {cart.map(item => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            {item.name} - {item.quantity} x {item.price.toLocaleString()}₫
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))
              }
              style={{ width: '50px', margin: '0 10px' }}
            />
            <button onClick={() => dispatch(removeItem(item.id))}>Xóa</button>
          </li>
        ))}
      </ul>

      <p><strong>Tổng số lượng:</strong> {totalQuantity}</p>
      <p><strong>Tổng tiền:</strong> {totalPrice.toLocaleString()}₫</p>
    </div>
  );
};

export default Cart;
