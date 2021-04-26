import React from 'react';

import MovieCard from './MovieCard';

const MoviesList = ({moviesList, searchTitle, ratingSearch }) => {
  return (
    <div
      className="movies-list"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {moviesList
        .filter((el) =>
          
            el.title.toLowerCase().includes(searchTitle.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
    </div>
  );
};

export default MoviesList;