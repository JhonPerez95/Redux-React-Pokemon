import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import PokeCard from '../pokeCard/pokeCard';
import { doInfoPokemons } from '../../redux/actions/pokeInfo';

const PokeInfo = ({ match }) => {
  const info = useSelector((state) => state);
  const dispatch = useDispatch();
  const id = match.params.id;

  useEffect(() => {
    dispatch(doInfoPokemons(id));
  }, []);
  console.log(info);

  return (
    <>
      <p> aqui va info del pokemon</p>
      <p> id: {id}</p>
      {/* <PokeCard /> */}
    </>
  );
};

export default PokeInfo;
