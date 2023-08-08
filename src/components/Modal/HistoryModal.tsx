import React, { useState } from 'react';
import Modal from '@components/Modal/Modal';

function HistoryModal({ date, setHistoryModalOpen }: any) {
  return (
    <>
      <Modal
        closeModal={() => {
          setHistoryModalOpen(false);
        }}
        width={90}
      >
        <h1>{`${date.toString()} 가계부 내역`}</h1>
      </Modal>
    </>
  );
}

export default HistoryModal;
