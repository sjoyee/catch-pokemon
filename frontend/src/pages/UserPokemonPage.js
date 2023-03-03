import {
  Button,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import theme from "../components/Theme";
import { getOwnedPokemons, releasePokemon } from "../services/services";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import UnownedPokemonTable from "../components/UnownedPokemonTable";

const UserPokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);

  const [showUnowned, setShowUnowned] = useState(false);

  const releaseMyPokemon = (id) => {
    if (releasePokemon(id)) {
      getOwnedPokemons(setPokemons);
    }
  };

  useEffect(() => {
    getOwnedPokemons(setPokemons);
  }, []);

  return (
    <div>
      <Navbar />
      <Toolbar />
      <ThemeProvider theme={theme}>
        <Grid container>
          {pokemons.length > 0 ? (
            <Grid container sx={{ m: 4 }}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography sx={{ fontWeight: "bold" }}>
                          Pokemon Name
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography sx={{ fontWeight: "bold" }}>HP</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Attack
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Defense
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Type
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Level
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Release
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pokemons.map((poke) => (
                      <TableRow
                        key={poke.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {poke.name}
                        </TableCell>
                        <TableCell align="right">{poke.hp}</TableCell>
                        <TableCell align="right">{poke.attack}</TableCell>
                        <TableCell align="right">{poke.defense}</TableCell>
                        <TableCell align="right">{poke.type}</TableCell>
                        <TableCell align="right">{poke.level}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            onClick={() => {
                              releaseMyPokemon(poke.id);
                            }}
                          >
                            <CloseIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          ) : (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ m: 4 }}
            >
              <Typography variant="h6">
                You do not own any pokemon. Go catch some now!
              </Typography>
            </Grid>
          )}
          {showUnowned ? (
            <Grid container>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                // sx={{ m: 2 }}
              >
                <Typography fontStyle="italic">
                  Hide Pokemons You Do Not Own
                </Typography>
                <IconButton
                  variant="text"
                  onClick={() => {
                    setShowUnowned(false);
                  }}
                >
                  <KeyboardArrowDownIcon />
                </IconButton>
              </Grid>
              <UnownedPokemonTable />
            </Grid>
          ) : (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              // sx={{ m: 2 }}
            >
              <Typography fontStyle="italic">
                Show Pokemons You Do Not Own
              </Typography>
              <IconButton
                variant="text"
                onClick={() => {
                  setShowUnowned(true);
                }}
              >
                <KeyboardArrowUpIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default UserPokemonPage;
