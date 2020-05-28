import axios from 'axios';

const findPokemons = () =>
  axios.get(`https://pokeapi.co/api/v2/pokemon`).then((res) => res.data);

const findPokeInfo = (id) => {
  return axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    .then((res) => {
      const array = res.data.flavor_text_entries;
      for (let i = 0; i < array.length; i++) {
        if (array[i].language.name === 'es') {
          return {
            name: res.data.name,
            description: array[i].flavor_text,
          };
        }
      }
    });
};

export { findPokemons, findPokeInfo };
