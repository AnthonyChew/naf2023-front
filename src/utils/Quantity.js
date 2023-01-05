import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

const Quantity = (props) => {
  const { quantity, changeRedux, changeState } = props;
  const [newQuantity, setQuantity] = useState(quantity);

  const parentCallback = (type) => {
    if (typeof changeRedux !== 'undefined') {
      changeRedux(type);
    } else if (typeof changeState !== 'undefined') {
      if (type === 'INCREASE') {
        changeState(quantity + 1);
      } else {
        if (quantity - 1 >= 1) {
          changeState(quantity - 1);
        }
      }
    }
  };

  return (
      <div class="flex flex-row justify-center gap-5  pl-5 pr-5">
      {

        <button
          disabled = {quantity - 1 < 1 ? true : false}
          class = {quantity - 1 < 1 ? "opacity-50" : ""}
          onClick={() => {
            setQuantity(newQuantity - 1);
            parentCallback('DECREASE');
          }}>
          <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      }
      <p class="text-center text-2xl font-syne">
        {quantity}
      </p>
      <button
        onClick={() => {
          setQuantity(newQuantity + 1);
          parentCallback('INCREASE');
        }}
      >
        <svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="#000" stroke-width="2" d="M12,22 L12,2 M2,12 L22,12" />
        </svg>

      </button>
    </div>
  );
};

export default Quantity;
