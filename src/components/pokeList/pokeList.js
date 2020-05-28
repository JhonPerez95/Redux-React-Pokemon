import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

import { doFindPokemon } from '../../redux/actions/pokeList';
import Container from './container';
import PokeCard from '../pokeCard/pokeCard';

const PokeList = () => {
  const { pokemons } = useSelector((store) => store.pokeList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(doFindPokemon());
    }
  }, []);

  return (
    <>
      <Container />
      <Grid container justify="center">
        {pokemons.map((poke) => {
          let url =
            'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/';
          let id = poke.url.split('/')[poke.url.split('/').length - 2];
          return (
            <PokeCard
              name={poke.name}
              to="/poke-info/"
              image={`${url}${id}.png?raw=true`}
              key={id}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default PokeList;
