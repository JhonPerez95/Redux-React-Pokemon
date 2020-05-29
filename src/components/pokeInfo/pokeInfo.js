import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

import PokeCard from '../pokeCard/pokeCard';
import { doInfoPokemons } from '../../redux/actions/pokeInfo';

const PokeInfo = ({ match }) => {
  const { name, description } = useSelector(
    (state) => state.pokeInfo.infoPokemon
  );
  const dispatch = useDispatch();
  const id = match.params.id;

  let url =
    'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/';

  useEffect(() => {
    dispatch(doInfoPokemons(id));
  }, []);

  return (
    <>
      <Grid container justify="center">
        <PokeCard
          image={`${url}${id}.png?raw=true`}
          name={name}
          description={description}
        />
      </Grid>
    </>
  );
};

export default PokeInfo;
