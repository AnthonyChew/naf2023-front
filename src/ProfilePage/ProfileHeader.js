
import React from 'react';

function ProfileHeader(props) {

  const { displayName } = props;

  return (
    <div class="flex flex-col items-center justify-center pb-5">
      <p class="font-syneBold text-white text-5xl drop-shadow-[0_5.2px_1.2px_rgba(0,0,0,1)]">
        Hello {displayName}!
      </p>
    </div>
  );
}

export default ProfileHeader;
