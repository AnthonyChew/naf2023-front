
import React from 'react';

function ProfileHeader(props) {

  const { displayName, image, email } = props;

  return (
    <div >
      <img src={image} alt={displayName} height="100" />
      <p >
        {displayName}
      </p>
      <p >
        {email}
      </p>
    </div>
  );
}

export default ProfileHeader;
