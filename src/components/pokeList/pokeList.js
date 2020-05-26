import React, { useEffect, useState } from 'react';
import Container from './container';
import { useSelector, useDispatch } from 'react-redux';

import { doFindPokemon } from '../../redux/actions/pokeList';

const PokeList = ({}) => {
  const pokemons = useSelector((store) => store.pokeList.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  // dispatch(doFindPokemon());

  return (
    <>
      <Container />
      {/* {pokemons.map((pokemon) => (
        <p>{pokemon.name}</p>
      ))} */}
    </>
  );
};

export default PokeList;
