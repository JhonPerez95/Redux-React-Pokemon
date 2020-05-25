import axios from 'axios';

const findPokemons = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon`).then((res) => {
    return res.data;
  });
};

export { findPokemons };
