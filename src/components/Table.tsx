import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../data/data";
import { columns } from "./ColumnConfiguration";
import ModalComponent from "./Modal";
import { StateType } from "./model";

const TableComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [selectedRow, setSelectedRow] = useState<StateType | null>(null);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleTableClick = () => {
    if (selectedRow && selectedRow.image) {
      setModalImage(selectedRow.image);
      setOpenModal(true);
    }
  };

  return (
    <Box
      sx={{ width: "90%", margin: "auto" }}
      onContextMenu={(event) => event.preventDefault()}
    >
      <DataGrid
        onCellClick={handleTableClick}
        rows={rows}
        columns={columns}
        onRowClick={(params) => {
          setSelectedRow(params.row);
        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableColumnMenu
        autoHeight
        rowHeight={100}
      />
      <ModalComponent
        open={openModal}
        handleCloseModal={handleCloseModal}
        modalImage={modalImage}
        selectedRow={selectedRow}
      />
    </Box>
  );
};

export default TableComponent;
