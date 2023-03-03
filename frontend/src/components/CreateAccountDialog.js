import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const CreateAccountDialog = ({ status, errors, open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        {status ? (
          <div>
            <DialogTitle>{"Create Account Success"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                You successfully created an account.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} href="/login">
                Login
              </Button>
            </DialogActions>
          </div>
        ) : (
          <div>
            <DialogTitle>{"Create Account Fail"}</DialogTitle>
            <DialogContent>
              <ul>
                {Object.values(errors).map((err, idx) => (
                  <li key={idx}>{err}</li>
                ))}
              </ul>
              Please try again.
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Retry
              </Button>
            </DialogActions>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default CreateAccountDialog;
