import './QuantitySelector.css';
import React from 'react';
import Plus from '../../assets/plus.svg';
import Minus from '../../assets/minus.svg';

export default function QuantitySelector(props) {
  return (
    <div
      className={'quantity-selector flex flex-row rounded ' + props.className}
    >
      <img onClick={props.onDecrease} src={Minus} alt="" />
      <span>{props.quantity}</span>
      <img onClick={props.onIncrease} src={Plus} alt="" />
    </div>
  );
}
