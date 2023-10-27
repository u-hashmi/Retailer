import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Toolbar from "./Toolbar";
import { DataGrid } from "@mui/x-data-grid";

function ContactsTable({ initialContacts }) {
  const [checkboxSelection, setCheckboxSelection] = React.useState(true);
  const [selected, setSelected] = useState([]);
  const [contactsData, setContactsData] = useState(initialContacts);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(contactsData);
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);

  const columns = [
    { field: "id", headerName: "Id", width: 70 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "address", headerName: "Address", sortable: false, flex: 1 }
  ];

  const handleSearch = () => {
    const results = contactsData.filter((contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery.trim() === "") {
      setSearchResults(contactsData);
    } else {
      setSearchResults(results);
    }
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults(contactsData);
    } else {
      handleSearch();
    }
  };

  const handleDeleteSelectedRows = () => {
    const updatedRows = contactsData.filter(
      (contact) => !rowSelectionModel.includes(contact.id)
    );

    setContactsData(updatedRows);
    setSearchResults(updatedRows);
    setSelected([]); // Clear the selected items after deletion
    setRowSelectionModel([]); // Clear the rowSelectionModel
  };

  return (
    <Paper elevation={0} style={{ flexGrow: 1, height: "65vh" }}>
      <Toolbar
        handleSearchInputChange={handleSearchInputChange}
        handleSearch={handleSearch}
        handleDeleteSelectedRows={handleDeleteSelectedRows}
      />
      <DataGrid
        rows={searchResults}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 25 }
          }
        }}
        pageSizeOptions={[5, 10, 25]}
        rowSelectionModel={rowSelectionModel}
        checkboxSelection={checkboxSelection}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
      />
    </Paper>
  );
}

export default ContactsTable;
