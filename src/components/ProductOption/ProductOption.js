import React, { useCallback, useEffect, useRef, useState } from 'react';
import Plus from '../../assets/plus.svg';

import './ProductOption.css';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

import { clamp } from '../../util/math_utils';

export default function ProductOption(props) {
  const [quantity, setQuantity] = useState(100);
  const [caret, setCaret] = useState(0);
  const [dirty, setDirty] = useState(false);
  const ref = useRef();

  const updateCaret = (ref, pos) => {
    let range = new Range();
    ref.current.childNodes[0].innerText = quantity;
    range.setStart(ref.current.childNodes[0], pos);
    range.setEnd(ref.current.childNodes[0], pos);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
  };

  useEffect(() => {
    if (ref.current && document.activeElement === ref.current) {
      updateCaret(ref, clamp(caret, quantity.toString().length, 0));
    }
  }, [quantity]);

  useEffect(() => {
    if (ref.current) {
      if (dirty) {
        setDirty(false);
        updateCaret(ref, clamp(caret - 1, quantity.toString().length, 0));
      }
    }
  }, [dirty]);

  const handleIncrease = useCallback(
    () => setQuantity((quant) => clamp(quant + 1, 200, 0)),
    []
  );
  const handleDecrease = useCallback(
    () => setQuantity((quant) => clamp(quant - 1, 200, 0)),
    []
  );
  const handleInput = useCallback(
    (e) => {
      let offset = window.getSelection().anchorOffset;
      setCaret(offset);
      if (/^\d+$/g.test(e.target.innerText)) {
        if (quantity !== clamp(parseInt(e.target.innerText), 200, 0))
          setQuantity(clamp(parseInt(e.target.innerText), 200, 0));
      } else {
        setDirty(true);
      }
      e.target.innerText = quantity;
    },
    [quantity]
  );

  return (
    <div className="p-2 m-2">
      <h4 className="option-description">{props.description}</h4>
      <div className="flex flex-row justify-end">
        {props.type === 'boolean' ? (
          <div className="option-selector">
            <img src={Plus} alt="" />
          </div>
        ) : (
          <div className="flex flex-shrink-1 h-8 align-stretch">
            <QuantitySelector
              innerRef={ref}
              onInput={handleInput}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={quantity}
            />
          </div>
        )}
      </div>
      {props.price ? (
        <p className="option-price">
          + <span>R${props.price.toFixed(2)}</span>
        </p>
      ) : (
        ''
      )}
    </div>
  );
}
