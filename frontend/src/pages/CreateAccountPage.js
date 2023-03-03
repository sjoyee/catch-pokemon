import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Pokeball from "../images/pokeball.png";
import theme from "../components/Theme";
import { createAccount } from "../services/authService";
import CreateAccountDialog from "../components/CreateAccountDialog";

const CreateAccountPage = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [status, setStatus] = useState(false);
  const [errors, setErrors] = useState([]);
  const [open, setOpen] = useState(false);

  const createAcct = () => {
    createAccount(
      username,
      firstName,
      lastName,
      password,
      password2,
      setStatus,
      setErrors
    );
    setOpen(true);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CreateAccountDialog
          status={status}
          errors={errors}
          open={open}
          setOpen={setOpen}
        />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <img src={Pokeball} alt="pokeball" height="100" width="100" />
          <Typography variant="h2" sx={{ my: 2 }}>
            Gotta Catch 'em All
          </Typography>

          <Grid
            container
            direction="column"
            sx={{ my: 4 }}
            alignItems="center"
            justifyContent="center"
          >
            <TextField
              sx={{ m: 1, width: "50ch" }}
              variant="outlined"
              label="Username"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
            <TextField
              sx={{ m: 1, width: "50ch" }}
              variant="outlined"
              label="First Name"
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
            <TextField
              sx={{ m: 1, width: "50ch" }}
              variant="outlined"
              label="Last Name"
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
            <TextField
              sx={{ m: 1, width: "50ch" }}
              required
              variant="outlined"
              label="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <TextField
              sx={{ m: 1, width: "50ch" }}
              required
              variant="outlined"
              label="Confirm Password"
              type="password"
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
          </Grid>
          <Button variant="contained" sx={{ my: 2 }} onClick={createAcct}>
            Create Account
          </Button>
          <Button
            sx={{ my: 2 }}
            style={{ textDecoration: "underline" }}
            href="/login"
          >
            Login
          </Button>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default CreateAccountPage;
