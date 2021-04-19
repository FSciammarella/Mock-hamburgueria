import React, { useEffect, useRef, useState } from 'react';
import Arrow from '../../assets/arrow.svg';
import './DeliveryAddress.css';

export default function DeliveryAddress(props) {
  const dropdown = useRef(null);
  const selectedOpt = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (expanded) {
      selectedOpt.current.focus();
    }
  }, [selected, expanded]);

  return (
    <div
      ref={dropdown}
      role="listbox"
      tabIndex={expanded ? null : 0}
      className="relative flex w-1/3 flex-row px-2 py-1 h-12 bg-white justify-between dropdown"
      onFocus={(e) => {
        e.stopPropagation();
        setExpanded(true);
      }}
      onBlur={(e) => {
        setExpanded(false);
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelected((sel) => (sel < props.options.length - 1 ? sel + 1 : 0));
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelected((sel) => (sel ? sel - 1 : props.options.length - 1));
        }
      }}
      onMouseDown={(e) => e.preventDefault()}
      onMouseUp={(e) => {
        // e.preventDefault();
        if (expanded) {
          setExpanded(false);
        } else {
          dropdown.current.focus();
        }
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
        tabIndex="-1"
        className={
          'absolute  dropdown-options top-14 z-50 transform -translate-x-2 p-2 w-full ' +
          (!expanded ? ' inactive' : ' active')
        }
      >
        {props.options?.map((opt, idx) => (
          <div
            key={opt}
            ref={selected === idx ? selectedOpt : null}
            role="option"
            aria-selected={opt}
            className="text-lg my-2 option"
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                setSelected(idx);
                setExpanded(false);
              }
            }}
            tabIndex={selected === idx ? -1 : ''}
            onClick={() => {
              setSelected(idx);
              setExpanded(false);
            }}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}
