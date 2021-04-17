import React, { useState } from 'react';
import Plus from '../../assets/plus.svg';
import Minus from '../../assets/minus.svg';

import './ProductOption.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

export default function ProductOption(props) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="p-2 m-2">
      <h4 className="option-description">{props.description}</h4>
      <div className="flex flex-row justify-end">
        {props.type === 'option' ? (
          <div className="option-selector">
            <img src={Plus} alt="" />
          </div>
        ) : (
          <QuantitySelector
            onIncrease={() => setQuantity((quant) => quant + 1)}
            onDecrease={() =>
              setQuantity((quant) => (quant ? quant - 1 : quant))
            }
            quantity={quantity}
          />
        )}
      </div>
      <p className="option-price">
        + <span>{props.price}</span>
      </p>
    </div>
  );
}
