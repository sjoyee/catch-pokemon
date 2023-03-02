import React, { useEffect, useState } from "react";
import {
  Grid,
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
import { getAllPokemons } from "../services/services";
import Navbar from "../components/Navbar";
import theme from "../components/Theme";

const AllPokemonPage = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons(setAllPokemons);
  }, []);

  return (
    <div>
      <Navbar />
      <Toolbar />
      <ThemeProvider theme={theme}>
        <Grid container>
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
                      <Typography sx={{ fontWeight: "bold" }}>Type</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography sx={{ fontWeight: "bold" }}>
                        Has Owner
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allPokemons.map((poke) => (
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
                      <TableCell align="right">
                        {poke.owner ? "Yes" : "No"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default AllPokemonPage;
