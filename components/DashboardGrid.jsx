"use client";

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import AlertBar from "./AlertBar";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { ButtonGroup } from "@mui/material";

const Input = styled("input")({
  display: "none",
});

export default function DataTable() {
  const [rows, setRows] = React.useState([]); // State for rows
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/feeds");
      const data = await response.json();

      const mappedData = data.map((item) => ({
        ...item,
        id: item._id,
        title: item.title,
        article: item.article,
      }));
      console.log(mappedData);
      setRows(mappedData);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    setIsLoading(true);
    const response = await fetch(`/api/feeds/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    } else {
      console.error("Failed to delete the item.");
      isLoading(false);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "article", headerName: "Article", width: 250 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <ButtonGroup>
          <Button
            variant="contained"
            color="primary"
            disabled={isLoading}
            onClick={() => console.log("Edit", params.id)} // Replace with actual edit logic
          >
            Düzenle
          </Button>
          <Button
            variant="contained"
            color="error"
            disabled={isLoading}
            onClick={() => handleDelete(params.id)}
          >
            Sil
          </Button>
        </ButtonGroup>
      ),
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
