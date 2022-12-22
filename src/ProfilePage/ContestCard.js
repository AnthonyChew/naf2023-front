import React from 'react';

export default function ContestCard(props) {
  const { name, image } = props;

  return (
    <div class="flex flex-col text-right">
        <img class="max-w-sm" src={image} alt={name} />
      <h2>
        {name}
      </h2>
    </div>
  );
}
