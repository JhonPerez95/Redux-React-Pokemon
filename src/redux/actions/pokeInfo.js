export const START_INFO_POKEMON = 'START_INFO_POKEMON';
export const SUCCESS_INFO_POKEMON = 'SUCCESS_INFO_POKEMON ';
export const ERROR_INFO_POKEMON = 'ERROR_INFO_POKEMON';

export const doInfoPokemons = (payload) => {
  return {
    type: START_INFO_POKEMON,
    payload,
  };
};

export const doSuccesInfo = (payload) => {
  return {
    type: SUCCESS_INFO_POKEMON,
    payload,
  };
};

export const doErrorInfo = () => {
  return {
    type: ERROR_INFO_POKEMON,
    payload,
  };
};
