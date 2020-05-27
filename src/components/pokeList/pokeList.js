import React, { useEffect } from 'react';
import Container from './container';
import { useSelector, useDispatch } from 'react-redux';

import { doFindPokemon } from '../../redux/actions/pokeList';

const PokeList = () => {
  const { pokemons } = useSelector((store) => store.pokeList);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(doFindPokemon());
  // });

  console.log(pokemons);
  return (
    <>
      <Container />
      <button
        onClick={() => {
          dispatch(doFindPokemon());
        }}
      >
        pokemons
      </button>
    </>
  );
};

export default PokeList;
