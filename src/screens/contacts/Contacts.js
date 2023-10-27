import * as React from "react";
import Box from "@mui/material/Box";
import ContactTop from "./ContactTop";
import ContactsTable from "./ContactsTable";
import initialContacts from "../../data/contactsData";

const Contacts = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <ContactTop sx={{ flex: 1 }} />
      <ContactsTable
        sx={{ flex: 1, height: "100%" }}
        initialContacts={initialContacts}
      />
    </Box>
  );
};

export default Contacts;
