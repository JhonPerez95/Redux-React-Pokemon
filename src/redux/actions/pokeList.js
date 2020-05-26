export const START_GET_POKEMONS = 'START_GET_POKEMONS';
export const SUCCESS_GET_POKEMONS = 'SSUCCESS_GET_POKEMONS';
export const POKEMONS_ERROR = 'FIND_POKEMONS_ERROR';

export const doFindPokemon = (payload) => ({
  type: START_GET_POKEMONS,
  payload,
});
