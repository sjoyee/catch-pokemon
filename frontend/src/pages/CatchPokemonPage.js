import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import bgVideo from "../videos/sky.mp4";
import theme from "../components/Theme";
import { addPokemon, getWildPokemon } from "../services/services";
import PokeBall from "../images/pokeball.png";

const CatchPokemonPage = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getWildPokemon(setPokemon);
    generateRandomNumber();
  }, []);

  const [randNumber, setRandNumber] = useState(0);
  const [guessedNumber, setGuessedNumber] = useState(null);
  const [counter, setCounter] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [check, setCheck] = useState(false);

  // generate random number from 1 to 10
  const generateRandomNumber = () => {
    setRandNumber(Math.floor(Math.random() * 10) + 1);
  };

  const guess = () => {
    setCheck(true);
    if (parseInt(guessedNumber) === randNumber) {
      setCorrect(true);
      addPokemon(pokemon.id);
    }
    if (counter + 1 >= 3) {
      setGuessedNumber(0);
    }
    setCounter(counter + 1);
  };

  const searchNewPokemon = () => {
    //refresh page
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <video
        autoPlay
        muted
        loop
        id="bg-video"
        style={{
          opacity: 0.8,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <a
        href="https://www.vecteezy.com/video/7010363-evening-sky-shining-bright-there-were-many-stars-in-the-sky-and-a-number-of-white-clouds-passed-by-natural-scenery-meadows-and-mountains-at-night-3d-rendering"
        style={{ position: "absolute", bottom: 0, left: 0, fontSize: "8px" }}
      >
        3D rendering Stock Videos by Vecteezy
      </a>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Card sx={{ p: 8 }} style={{ backgroundColor: "#D7E1EC" }}>
            <CardContent>
              {pokemon ? (
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <Typography variant="h4" component="div">
                      Pokemon Found!
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="div">
                      Name: {pokemon.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="div">
                      HP: {pokemon.hp}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="div">
                      Attack: {pokemon.attack}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="div">
                      Defense: {pokemon.defense}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="div">
                      Type: {pokemon.type}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      spacing={2}
                      sx={{ py: 2 }}
                    >
                      <Grid item>
                        <TextField
                          type="number"
                          label="Number"
                          min="1"
                          max="10"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          required
                          onChange={(e) => {
                            setGuessedNumber(e.target.value);
                          }}
                        ></TextField>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          onClick={guess}
                          disabled={!guessedNumber || correct}
                        >
                          Catch
                        </Button>
                      </Grid>
                      <Grid item>
                        {check ? (
                          correct ? (
                            <div>
                              <Typography>
                                You caught the pokemon! Congratulations.
                              </Typography>
                              <Button
                                variant="contained"
                                sx={{ m: 2 }}
                                onClick={searchNewPokemon}
                              >
                                Search New Pokemon
                              </Button>
                              <Button
                                variant="contained"
                                sx={{ m: 2 }}
                                href="/mypokemon"
                                color="success"
                              >
                                Check Owned Pokemons
                              </Button>
                            </div>
                          ) : counter >= 3 ? (
                            <div>
                              <Typography>
                                The pokemon escaped! Please search for another
                                pokemon.
                              </Typography>
                              <Button
                                variant="contained"
                                sx={{ my: 2 }}
                                onClick={searchNewPokemon}
                              >
                                Search New Pokemon
                              </Button>
                            </div>
                          ) : (
                            <Typography>Missed! Please Try Again.</Typography>
                          )
                        ) : (
                          <Typography>Guess Any Number from 1 to 10</Typography>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <img
                      src={PokeBall}
                      alt="pokeball-loader"
                      height="100"
                      width="100"
                    />
                  </Grid>
                  <Grid item>
                    <Typography>Wild pokemon is not found...</Typography>
                  </Grid>
                </Grid>
              )}
            </CardContent>
          </Card>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default CatchPokemonPage;
