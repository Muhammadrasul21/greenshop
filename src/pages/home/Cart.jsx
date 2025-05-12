import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Savatchadagi Mahsulotlar</h2>
      
      {cartItems.length === 0 ? (
        <p>Savatcha hozircha bo'sh.</p>
      ) : (
        <ul className="space-y-2">
          {cartItems.map((item, index) => (
            <li key={index} className="border p-3 rounded shadow-sm">
              <p><strong>{item.name}</strong></p>
              <p>Narxi: ${item.price}</p>
              <p>Miqdori: {item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
