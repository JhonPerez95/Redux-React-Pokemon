import {
  START_GET_POKEMONS,
  SUCCESS_GET_POKEMONS,
  POKEMONS_ERROR,
} from '../actions/pokeList';

function reducer(state = { pokemons: [] }, action) {
  switch (action.type) {
    case START_GET_POKEMONS:
      return {
        ...state,
        // pokemons: action.payload,
      };
    case SUCCESS_GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case POKEMONS_ERROR:
      return {
        ...state,
        pokemons: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
