import {
  START_INFO_POKEMON,
  SUCCESS_INFO_POKEMON,
  ERROR_INFO_POKEMON,
} from '../actions/pokeInfo';

function pokeInfo(state = { infoPokemon: [] }, action) {
  switch (action.type) {
    case START_INFO_POKEMON:
      return {
        ...state,
      };
    case SUCCESS_INFO_POKEMON:
      return {
        ...state,
        infoPokemon: action.payload,
      };
    case ERROR_INFO_POKEMON:
      return {
        ...state,
        infoPokemon: action.payload,
      };
    default:
      return state;
  }
}

export default pokeInfo;
