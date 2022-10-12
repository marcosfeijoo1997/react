import React, { useState, useEffect } from 'react';
import Pokemon from './Productos/pokemon';

const Pokedex = () => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [page, setPage] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((list) => setPage(list));
  }, [url]);

  const paginationButtonClickHandler = (newUrl) => {
    setUrl(newUrl);
  };

  return (
    <div>
      {!page ? (
        <div>Cargando...</div>
      ) : (
        <div>
          {page.results.map((pokemon) => (
            <Pokemon url={pokemon.url} key={pokemon.name} />
          ))}

          {page.previous ? (
            <button onClick={() => paginationButtonClickHandler(page.previous)}>
              Prev
            </button>
          ) : (
            ''
          )}
          {page.next ? (
            <button onClick={() => paginationButtonClickHandler(page.next)}>
              Next
            </button>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
