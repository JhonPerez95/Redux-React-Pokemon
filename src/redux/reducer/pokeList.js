import {
  START_GET_POKEMONS,
  SUCCESS_GET_POKEMONS,
  ERROR_GET_POKEMONS,
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

    case ERROR_GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
