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
  Typography,
} from "@mui/material";
import { getUnownedPokemons } from "../services/services";

const UnownedPokemonTable = () => {
  const [unownedPokemons, setUnownedPokemons] = useState([]);

  useEffect(() => {
    getUnownedPokemons(setUnownedPokemons);
  }, []);

  return (
    <>
      {unownedPokemons.length > 0 ? (
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
                    <Typography sx={{ fontWeight: "bold" }}>
                      Has Owner
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {unownedPokemons.map((poke) => (
                  <TableRow
                    key={poke.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {poke.name}
                    </TableCell>
                    <TableCell align="right">
                      {poke.owner ? "Yes" : "No"}
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
            You own all the pokemons! Impressive!
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default UnownedPokemonTable;
