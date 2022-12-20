import React from 'react';

export default function ContestCard(props) {
  const { name, image } = props;

  return (
        <div >
          <div >
            <img src={image} alt={name} />
          </div>
          <div item xs={6}>
            <h2>
              {name}
            </h2>
          </div>
        </div>
  );
}
