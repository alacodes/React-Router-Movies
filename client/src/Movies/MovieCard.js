import React from 'react';

const MovieCard = props => {

  const { title, director, metascore, stars } = props;

  return (
    <div className = "movie-card">
      <h2>{title}</h2>
      <div className = "movie-director">
        Director: <strong>{director}</strong>
      </div>
      <div className = "meta-score">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} classname = "movie-star">
          {star}
        </div>
      ))}
    </div>
  )
};

export default MovieCard;
