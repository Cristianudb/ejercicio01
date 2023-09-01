import React, { useState } from 'react';
import productsData from '../productos.json';

const ProductPicker = ({ onAddProduct }) => {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const handleAddToCart = () => {
    const selectedProductData = productsData.find(product => product.nombre === selectedProduct);
    if (selectedProductData) {
      onAddProduct(selectedProductData);
      setSelectedProduct('');
    }
  };

  return (
    <div className="product-picker">
      <select value={selectedProduct} onChange={handleProductChange}>
        <option value="">Seleccionar producto</option>
        {productsData.map(product => (
          <option key={product.nombre} value={product.nombre}>{product.nombre}</option>
        ))}
      </select>
      <button onClick={handleAddToCart}>Agregar a la lista</button>
    </div>
  );
};

export default ProductPicker;
