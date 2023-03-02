import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import theme from "./Theme";
import { logout } from "../services/authService";

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const appTitle = "Gotta Catch 'em All";

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logOutAccount = () => {
    logout();
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {appTitle}
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} href="/">
            <ListItemText primary="Catch Pokemon" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} href="/all">
            <ListItemText primary="All Pokemons" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} href="/mypokemon">
            <ListItemText primary="My Pokemons" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} onClick={logOutAccount}>
            <ListItemText primary="LOGOUT" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // let theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#181818",
  //     },
  //   },
  // });

  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={theme}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton style={{ backgroundColor: "transparent" }}>
              <Typography
                variant="h6"
                component="div"
                style={{ color: "#fff" }}
              >
                {appTitle}
              </Typography>
              <CatchingPokemonIcon sx={{ px: 2 }} style={{ color: "#fff" }} />
            </IconButton>
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                right: "0",
                px: 2,
              }}
            >
              <Button href="/" style={{ color: "#fff" }}>
                Catch Pokemon
              </Button>
              <Button href="/all" style={{ color: "#fff" }}>
                All Pokemons
              </Button>
              <Button href="/mypokemon" style={{ color: "#fff" }}>
                My Pokemons
              </Button>
              <Button style={{ color: "#fff" }} onClick={logOutAccount}>
                LOGOUT
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
