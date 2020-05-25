export const FIND_POKEMONS = 'FIND_POKEMONS';
export const FIND_POKEMONS_ERROR = 'FIND_POKEMONS_ERROR';

export const doFindPokemon = (payload) => {
  return {
    type: FIND_POKEMONS,
    payload,
  };
};

export const doFindPokemonErr = (payload) => {
  return {
    type: FIND_POKEMONS_ERROR,
    payload,
  };
};
