import React, { FC, MouseEvent } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ModalComponentProp } from "./model";

const ModalComponent: FC<ModalComponentProp> = ({
  open,
  handleCloseModal,
  modalImage,
  selectedRow,
}) => {
  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClick={handleModalClick}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxWidth: "50%",
          maxHeight: "90%",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={modalImage}
            alt="Modal"
            style={{ maxWidth: "50%", maxHeight: "50%", margin: "auto" }}
          />
          <div>
            <p>ID: {selectedRow?.id}</p>
            <p>DESCRIPTION: {selectedRow?.description}</p>
            <p>DATA: {selectedRow?.date}</p>
            <p>NUMBERS: {selectedRow?.numbers}</p>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
