import React from 'react';

export default function ContestCard(props) {
  const {  image } = props;

  return (
    <div class="flex flex-col text-right">
        <img class="md:max-w-[200px] max-w-xs self-center" src={image}  />
    </div>
  );
}
