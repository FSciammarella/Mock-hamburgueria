import './ProductDescription.css';

import React from 'react';

export default function ProductDescription(props) {
  return (
    <div className="flex justify-between flex-start  py-6 flex-col flex-grow-0 lg:w-1/2">
      <img src={props.product?.url_image} className="" alt="" />
      <h2 className="product-title">{props.product.nm_product}</h2>
      <p className="product-description">{props.product.description}</p>
      <p className="preco">
        {props.product.vl_discount ? (
          <span className="preco-desconto">R${props.product.vl_discount} </span>
        ) : (
          ''
        )}
        <span
          className={'' + (props.product.vl_discount ? 'line-through' : '')}
        >
          R${props.product.vl_price}
        </span>
      </p>
    </div>
  );
}
