import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Pokeball from "../images/pokeball.png";
import theme from "../components/Theme";
import { login } from "../services/authService";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginAcct = () => {
    login(username, password);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
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
              sx={{ m: 1, width: "30ch" }}
              variant="outlined"
              label="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Button variant="contained" sx={{ my: 2 }} onClick={loginAcct}>
            Login
          </Button>
          <Button
            sx={{ my: 2 }}
            style={{ textDecoration: "underline" }}
            href="/create"
          >
            Create Account
          </Button>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default LoginPage;
