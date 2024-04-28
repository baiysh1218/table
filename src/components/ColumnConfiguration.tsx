import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "image",
    headerName: "Image",
    width: 150,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Image"
        width={70}
        height={70}
        style={{
          objectPosition: "center",
          objectFit: "contain",
          marginTop: "15px",
        }}
      />
    ),
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
    editable: true,
    renderCell: (params) => (
      <div style={{ fontWeight: "bold" }}>{params.value}</div>
    ),
  },
  {
    field: "numbers",
    headerName: "Numbers",
    type: "number",
    width: 110,
    editable: true,
    renderCell: (params) => (
      <div style={{ fontStyle: "italic" }}>{params.value}</div>
    ),
  },
];
