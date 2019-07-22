import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>

      <Route path = "/" exact component={MovieList} />
      <Route path = "/movies/id" component={Movie} />
      <SavedList list={savedList} />

    </div>
  );
};

export default App;
