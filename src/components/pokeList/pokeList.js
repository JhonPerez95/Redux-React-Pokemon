import React from 'react';
import Container from './container';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../redux/actions/pokeList';
import { Button } from '@material-ui/core';

const PokeList = ({ doFindPokemon }) => {
  const pokemons = useSelector((store) => store.pokeList);
  const dispatch = useDispatch();

  // dispatch(doFindPokemon());
  console.log(pokemons);

  return (
    <>
      <Container />
      <Button onClick={() => dispatch(actions.doFindPokemon())}> Prueba</Button>
    </>
  );
};

export default PokeList;
