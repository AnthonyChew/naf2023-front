import React, { useState, useEffect } from 'react';
import SocialLogin from './SocialLogin';
import Modal from 'react-modal';

function UserLogin(props) {

  const { parentCallback } = props;

  const [modalIsOpen, setIsOpen] = useState(props.isOpen);

  function closeModal() {
    setIsOpen(false);
    parentCallback();
  }

  useEffect(() => {
    Modal.setAppElement('body');
  }, [])

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={parentCallback}
      >
        <SocialLogin />
      </Modal>
    </>
  );
}

export default UserLogin;
