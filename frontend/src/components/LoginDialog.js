import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Login Fail</DialogTitle>
      <DialogContent>
        <DialogContentText>
          No active account found with the given credentials. Please try again.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Retry
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
