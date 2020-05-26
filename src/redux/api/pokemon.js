const axios = require('axios');

export const findPokemons = (url) => axios.get(url);
