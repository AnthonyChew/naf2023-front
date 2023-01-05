import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

export default function WaitlistedWorkshops(props) {
  const [select, setSelect] = useState(0);
  const selectWorkshop = (index) => {
    setSelect(index);
  };

  const { workshops, parentCallback } = props;

  const handleClose = (toBump) => {
    if (toBump) {
      parentCallback(workshops[select]._id);
    } else {
      parentCallback(null);
    }
  };

  useEffect(() => {
    Modal.setAppElement('body');
  }, [])

  return (
    <Modal
      open={true}
      onRequestClose={handleClose(false)}
    >
      <div class="w-full h-full" onClick={handleClose(false)}>
        <h3 id="title">
          Do you wish to bump up any of these waitlisted workshops? (Subjected
          to vacancy)
        </h3>
        <p></p>

        {workshops &&
          workshops.map((workshop, i) => (
            <>
              <button
                disabled={
                  workshop.numRegistered >= workshop.maxParticipants
                }
                selected={i === select}
                onClick={() => selectWorkshop(i)}
              >
                <h5>{workshop.name}</h5>
                <p>{workshop.numRegistered} + {workshop.maxParticipants}</p>
              </button>
            </>
          ))}
        <button onClick={() => handleClose(true)}>Yes</button>
        <button onClick={() => handleClose(false)}>No</button>
      </div>
    </Modal>
  );
}
