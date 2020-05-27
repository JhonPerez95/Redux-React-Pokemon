import React, { useEffect } from 'react';
import Container from './container';
import { useSelector, useDispatch } from 'react-redux';

import { doFindPokemon } from '../../redux/actions/pokeList';

const PokeList = () => {
  const { pokemons } = useSelector((store) => store.pokeList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(doFindPokemon());
    }
  }, []);

  console.log(pokemons);
  return (
    <>
      <Container />
    </>
  );
};

export default PokeList;
