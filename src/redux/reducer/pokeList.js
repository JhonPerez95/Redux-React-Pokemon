import { START_GET_POKEMONS } from '../actions/pokeList';
import { get } from 'lodash';

// State Default
const initialStore = {
  pokemons: [],
};

function reducer(state = initialStore, action) {
  switch (action.type) {
    case START_GET_POKEMONS:
      return {
        ...state,
        pokemons: get(action, 'results'),
      };

    // case FIND_POKEMONS_ERROR:
    //   return {
    //     ...state,
    //     pokemons: action.payload,
    //     message: 'Error al cargar los Pokemons',
    //   };

    default:
      return state;
  }
}

export default reducer;
