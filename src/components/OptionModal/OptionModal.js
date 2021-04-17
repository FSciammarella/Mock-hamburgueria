import './OptionModal.css';
import React from 'react';

export default function OptionModal(props) {
  return (
    <div className="modal-warning px-4 py-2">
      <h4>{props.title}</h4>
      <p>{props.subtitle}</p>
    </div>
  );
}
