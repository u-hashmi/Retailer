import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ContactsTable from "./ContactsTable";

function AddContactsPopup() {
  const [open, setOpen] = React.useState(false);
  const [newContact, setNewContact] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact({
      ...newContact,
      [name]: value
    });
  };

  const handleAddContact = () => {
    // Add the new contact to your data store or state.
    // You can use Redux, context, or other state management.
    // For this example, let's assume there's a function to add a new contact.
    // Replace this with your actual data handling logic.
    // addNewContact(newContact);

    // After adding the new contact, close the dialog.
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Contact
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Contact</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              name="name"
              label="Name"
              value={newContact.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="email"
              label="Email"
              value={newContact.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="phone"
              label="Phone"
              value={newContact.phone}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="address"
              label="Address"
              value={newContact.address}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </form>
        </DialogContent>
        <Button onClick={handleAddContact} color="primary">
          Add
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
      </Dialog>
      <ContactsTable /> {/* This assumes you have a ContactsTable component. */}
    </div>
  );
}

export default AddContactsPopup;
