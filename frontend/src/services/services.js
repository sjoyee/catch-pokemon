import api from "./api";

export const getWildPokemon = async (setPokemon) => {
  await api.get("/pokemon/wildpokemon/").then((response) => {
    setPokemon(response.data);
  });
};

export const getAllPokemons = async (setAllPokemons) => {
  await api.get("/pokemon/allpokemon/").then((response) => {
    setAllPokemons(response.data);
  });
};

export const getOwnedPokemons = async (setPokemons) => {
  await api.get("/pokemon/mypokemon/").then((response) => {
    setPokemons(response.data);
  });
};

export const getUnownedPokemons = async (setUnownedPokemons) => {
  await api.get("/pokemon/unownedpokemon/").then((response) => {
    setUnownedPokemons(response.data);
  });
};

export const addPokemon = async (pokemon_id) => {
  let success = false;
  await api
    .post("/pokemon/addpokemon/", {
      id: pokemon_id,
    })
    .then((res) => {
      success = true;
    })
    .catch((res) => {
      console.log(res);
    });
  return success;
};

export const releasePokemon = async (pokemon_id) => {
  let success = false;
  await api
    .post("/pokemon/releasepokemon/", {
      id: pokemon_id,
    })
    .then((res) => {
      success = true;
    })
    .catch((res) => {
      console.log(res);
    });
  return success;
};
