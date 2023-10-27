import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { alpha } from "@mui/material/styles";

const EnhancedTableToolbar = ({
  searchQuery,
  handleSearchInputChange,
  handleDeleteSelectedRows
}) => {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 }
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Contacts
      </Typography>

      <Tooltip title="Delete selected rows">
        <IconButton onClick={handleDeleteSelectedRows}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchInputChange}
        size="small"
      />
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
