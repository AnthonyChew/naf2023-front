import React from 'react';

export default function ContestCard(props) {
  const { name, image } = props;

  return (
    <div class="flex flex-col text-right">
        <img class="md:max-w-sm max-w-xs" src={image} alt={name} />
      <p class='text-2xl font-syne underline decoration-solid mb-2'>
        {name}
      </p>
    </div>
  );
}
