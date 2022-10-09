import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    const res = await fetch("https://swapi.dev/api/films");
    const newMovies = await res.json();
    const transformedMovies = newMovies.results.map(m => {
       return {
           id: m.episode_id,
           title: m.title,
           openingText: m.opening_crawl,
           releaseDate: m.release_date
       }
    });
    setMovies(transformedMovies);
    setIsLoading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
          {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
          {isLoading && <p>Loading...</p>}
          {!isLoading && movies.length === 0 && <p>Found no movies</p>}
        
      </section>
    </React.Fragment>
  );
}

export default App;
