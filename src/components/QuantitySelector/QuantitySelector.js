import './QuantitySelector.css';
import React from 'react';
import Plus from '../../assets/plus.svg';
import Minus from '../../assets/minus.svg';

export default function QuantitySelector(props) {
  return (
    <div
      className={
        'quantity-selector flex flex-shrink items-stretch min-w-0 flex-row rounded ' +
        props.className
      }
    >
      <div onClick={props.onDecrease}>
        <img src={Minus} alt="" />
      </div>
      <span
        ref={props.innerRef}
        onInput={props.onInput}
        contentEditable
        suppressContentEditableWarning
      >
        {props.quantity}
      </span>
      <div onClick={props.onIncrease}>
        <img src={Plus} alt="" />
      </div>
    </div>
  );
}
