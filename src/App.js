import React, { useState } from 'react';
import ProductPicker from './components/ProductPicker';
import ShoppingList from './components/ShoppingList';
import './App.css';
import productsData from './productos.json';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const existingItem = cartItems.find(item => item.nombre === product.nombre);
    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.nombre === product.nombre ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, cantidad: 1 }]);
    }
  };

  const handleRemoveItem = (itemName) => {
    const updatedCart = cartItems.filter(item => item.nombre !== itemName);
    setCartItems(updatedCart);
  };

  const handleUpdateQuantity = (itemName, quantity) => {
    const updatedCart = cartItems.map(item =>
      item.nombre === itemName ? { ...item, cantidad: parseInt(quantity, 10) } : item
    );
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <ProductPicker onAddProduct={handleAddProduct} />
      <ShoppingList
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
};

export default App;
