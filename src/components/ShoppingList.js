import React from 'react';

const ShoppingList = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <div className="shopping-list">
      <ul>
        {cartItems.map(item => (
          <li key={item.nombre}>
            <p>{item.nombre}</p>
            ${item.precio}
            <input
              type="number"
              value={item.cantidad}
              onChange={(e) => onUpdateQuantity(item.nombre, e.target.value)}
            />
            <button onClick={() => onRemoveItem(item.nombre)}>X</button>
          </li>
        ))}
      </ul>
      <p>Total a pagar: {totalPrice.toFixed(2)} €</p>
    </div>
  );
};

export default ShoppingList;
