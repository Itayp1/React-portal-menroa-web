import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

const AproveModal = ({ showModal, setShowModal }) => {
  setTimeout(() => {
    setShowModal(false);
  }, 4000);
  return (
    <>
      <Modal style={{ display: "inline -block" }} show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header bsPrefix="modalcenter">
          <h1>שמירה</h1>
        </Modal.Header>
        <Modal.Footer bsPrefix="modalcenter">
          <h3>השמירה בוצע בהצלחה</h3>
        </Modal.Footer>
      </Modal>
      <style jsx>{`
        .modalcenter {
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default AproveModal;
