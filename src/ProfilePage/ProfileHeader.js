
import React from 'react';

function ProfileHeader(props) {

  const { displayName, image, email } = props;

  return (
    <div class="flex flex-col items-center justify-center pb-5">
      <p class="font-yerkItalic text-white text-5xl drop-shadow-[6px_6px_0_rgba(0,0,0,1)]">
        Hello {displayName}!
      </p>
      <p >
        {email}
      </p>
    </div>
  );
}

export default ProfileHeader;
