import React, { useState } from 'react';
import AddIcon from './svgs/Quantity/add-svgrepo-com.svg';
import RemoveIcon from './svgs/Quantity/minus-svgrepo-com.svg';


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
    <div>
      <div >
        <p>
          Quantity:
        </p>
        <button
          onClick={() => {
            setQuantity(newQuantity - 1);
            parentCallback('DECREASE');
          }}
        >
          <RemoveIcon />
        </button>
        <p>
          {quantity}
        </p>
        <button
          onClick={() => {
            setQuantity(newQuantity + 1);
            parentCallback('INCREASE');
          }}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
