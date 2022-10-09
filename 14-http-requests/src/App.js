import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from "./components/AddMovie";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
            setIsLoading(true);
            setError(null);
            try {
                //const res = await fetch("https://swapi.dev/api/films");
                const res = await fetch(
                        "https://fb-test-96860-default-rtdb.europe-west1.firebasedatabase.app/movies.json");
                if (!res.ok) {
                    throw new Error("Something went wrong")
                }
                const loadedMovies = [];
                const data = await res.json();
                for (const key in data) {
                    loadedMovies.push({
                        id: key,
                        title: data[key].title,
                        openingText: data[key].openingText,
                        releaseDate: data[key].releaseDate,
                    })
                }
                // const transformedMovies = newMovies.results.map(m => {
                //     return {
                //         id: m.episode_id,
                //         title: m.title,
                //         openingText: m.opening_crawl,
                //         releaseDate: m.release_date
                //     }
                // });
                setMovies(loadedMovies);

            } catch (e) {
                setError(e.message);
            }
            setIsLoading(false);
        }, []);
        
    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler])
    
    const addMovieHandler =async (movie) => {
      console.log(movie);  
      const res = await fetch("https://fb-test-96860-default-rtdb.europe-west1.firebasedatabase.app/movies.json", {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
              "Content-Type" : "application/json"
          }
      });
      const data = await res.json();
      console.log(data);
    };

    let content = <p>Found no movies</p>
    if (movies.length > 0) {
        content = <MoviesList movies={movies}/>;
    }
    if (error) {
        content = <p>{error}</p>
    }
    if (isLoading) {
        content = <p>Loading...</p>
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler}></AddMovie>
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
                {/*{!isLoading && movies.length>0 && <MoviesList movies={movies} />}*/}
                {/*{isLoading && <p>Loading...</p>}*/}
                {/*{!isLoading && movies.length === 0 && !error && <p>Found no movies</p>}*/}
                {/*{!isLoading && error && <p>{error}</p> }*/}
            </section>
        </React.Fragment>
    );
}

export default App;
