
import React from 'react';

function ProfileHeader(props) {

  const { displayName, image, email } = props;

  return (
    <div class="flex flex-col items-center justify-center mt-32">
      <p class="font-yerkItalic text-white text-5xl ">
        Hello {displayName}!
      </p>
      <p >
        {email}
      </p>
    </div>
  );
}

export default ProfileHeader;
