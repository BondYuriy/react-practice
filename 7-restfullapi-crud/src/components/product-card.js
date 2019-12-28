import React from 'react';

const ProductCard = ({ image, name, price, onShowMoreInfo, onDelete }) => (
  <div>
    <img src={image} alt={name} width={320} height={240} />
    <h2>{name}</h2>
    <span>{price}</span>
    <div>
      <button type="button" onClick={onShowMoreInfo}>
        Информация
      </button>
      <button type="button" onClick={onDelete}>
        Удалить
      </button>
    </div>
  </div>
);

export default ProductCard;
