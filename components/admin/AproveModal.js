import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

const AproveModal = ({ showModal, setShowModal }) => {
  setTimeout(() => {
    setShowModal(false);
  }, 4000);
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <h1>שמירה</h1>
        </Modal.Header>
        <h3>השמירה בוצע בהצלחה</h3>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <style jsx>{`
        .modal-header {
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default AproveModal;
