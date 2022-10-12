import React, { useState, useEffect } from 'react';

const Pokemon = ({ url }) => {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => setdata(info));
  }, [url]);

  return (
    <div>
      {!data ? (
        <div>Cargando...</div>
      ) : (
        <div>
          <p>{data.name}</p>
          <img src={data.sprites.front_default} />
        </div>
      )}
    </div>
  );
};

export default Pokemon;
