import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const ResultDialog = (props) => {
  const [open, setOpen] = useState(false);

  const handleGoBack = () => {
    // setOpen(false);
    props.open = false;
    props.correct = false;
    props.counter = 0;
    return <Navigate to="/catch" replace />;
  };

  const handleClose = () => {
    props.open = false;
  };
  return (
    <div>
      <Dialog open={props.open}>
        {props.correct ? (
          <div>
            <DialogTitle>{"Congratulations!"}</DialogTitle>
            <DialogContent>
              <DialogContentText>You caught the pokemon!</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleGoBack}>Close</Button>
            </DialogActions>
          </div>
        ) : props.counter >= 3 ? (
          <div>
            <DialogTitle>{"Oh no!"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                The pokemon escaped! Please capture another pokemon.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleGoBack}>Close</Button>
            </DialogActions>
          </div>
        ) : (
          <div>
            <DialogTitle>{"Oops!"}</DialogTitle>
            <DialogContent>
              <DialogContentText>Too bad. Please try again!</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleGoBack}>Go Back</Button>
              <Button onClick={handleClose}>Retry</Button>
            </DialogActions>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default ResultDialog;
