import React, { useState } from 'react';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const deleteFech = async () => {
    try {
      const res = await fetch('https://dummyjson.com/carts/1', {
        method: 'DELETE',
      });
      console.log('DELETE Success');
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-4 container">
        <h2 className="text-xl font-bold mb-4">Savatchadagi Mahsulotlar</h2>
        <p>Savatcha hozircha bo'sh.</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4 container">
      <h2 className="text-xl font-bold mb-4">Savatchadagi Mahsulotlar</h2>
      {cartItems.map((item, index) => {
        const [count, setCount] = useState(item.quantity);
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-2xl shadow space-y-4 md:space-y-0"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-xl"
              />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-500 text-sm">Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <p>${item.price.toFixed(2)}</p>
              <div className="w-[90px] flex gap-[10px]">
                <button
                  onClick={() => setCount(count === 0 ? 0 : count - 1)}
                  className="text-white font-bold bg-[#46A358] rounded-full h-[25px] w-[25px]"
                >
                  -
                </button>
                <p>{count}</p>
                <button
                  onClick={() => setCount(count + 1)}
                  className="text-white font-bold bg-[#46A358] rounded-full h-[25px] w-[25px]"
                >
                  +
                </button>
              </div>
              <p className="text-green-600 font-bold">${(item.price * count).toFixed(2)}</p>
              <Button
                onClick={deleteFech}
                danger
                icon={<DeleteOutlined />}
                className="!h-[30px] !w-[30px]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
