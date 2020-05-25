import { FIND_POKEMONS, FIND_POKEMONS_ERROR } from '../actions/pokeList';

// State Default
const initialStore = {};

function reducer(state = initialStore, action) {
  switch (action.type) {
    case FIND_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case FIND_POKEMONS_ERROR:
      return {
        ...state,
        pokemons: action.payload,
        message: 'Error al cargar los Pokemons',
      };

    default:
      return state;
  }
}

export default reducer;
