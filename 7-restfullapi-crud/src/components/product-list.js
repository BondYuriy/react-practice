import React from 'react';
import ProductCard from './product-card';

const ProductList = ({ items, onDelete, onShowMoreInfo }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <ProductCard
          image={item.image}
          name={item.name}
          price={item.price}
          onDelete={() => onDelete(item.id)}
          onShowMoreInfo={() => onShowMoreInfo(item.id)}
        />
      </li>
    ))}
  </ul>
);

export default ProductList;
