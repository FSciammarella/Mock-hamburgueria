import React, { useEffect, useRef, useState } from 'react';
import Arrow from '../../assets/arrow.svg';
import './DeliveryAddress.css';

export default function DeliveryAddress(props) {
  const dropdown = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    let listener = null;
    if (dropdown.current) {
      listener = document.addEventListener('click', (e) => {
        if (dropdown.current) setExpanded(false);
      });
    }
    return () => document.removeEventListener(listener);
  }, [dropdown]);

  return (
    <div
      ref={dropdown}
      className="relative flex w-1/3 flex-row px-2 py-1 h-12 bg-white justify-between dropdown"
      onClick={(e) => {
        e.stopPropagation();
        setExpanded((exp) => !exp);
      }}
    >
      <div className="flex flex-col">
        <div className="dropdown-description">Entrega:</div>
        <div className="dropdown-selected">
          {props.options ? props.options[selected] : ''}
        </div>
      </div>
      <img
        src={Arrow}
        alt=""
        className={
          'dropdown-arrow transition-transform transform ' +
          (expanded ? 'rotate-180' : '')
        }
      />
      <div
        className={
          'absolute  dropdown-options top-14 z-50 transform -translate-x-2 p-2 w-full' +
          (!expanded ? ' inactive' : ' active')
        }
      >
        {props.options?.map((opt, idx) => (
          <>
            <div className="text-lg my-2" onClick={() => setSelected(idx)}>
              {opt}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
