import React, { useState, useEffect } from 'react';

const Pokemon = ({ url }) => {
  const [pokeinfo, setPokeinfo] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => setPokeinfo(info));
  }, [url]);

  return (
    <div>
      {!pokeinfo ? (
        <div>Cargando...</div>
      ) : (
        <div>
          <p>{pokeinfo.name}</p>
          <img src={pokeinfo.sprites.front_default} />
        </div>
      )}
    </div>
  );
};

export default Pokemon;
