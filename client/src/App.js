import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    if(!savedList.map(movie => movie.id).includes(movie.id))
    {
      setSavedList( [...savedList, movie] );
    }
    else console.log("That movie has been saved already")
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = "/" component={MovieList} />
      <Route 
        path = "/movies/:id" 
        render = {(props) => <Movie {...props} addToSavedList={addToSavedList}/>} 
      />
    </div>
  );
};

export default App;
