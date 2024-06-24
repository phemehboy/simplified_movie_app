import React, { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";

//f635b467

const api_key = "http://www.omdbapi.com/?apikey=f635b467";

// const movie1 = {
//   Title: "Commando",
//   Year: "1985",
//   imdbID: "tt0088944",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BZWE0ZjFhYjItMzI5MC00MDllLWE4OGMtMzlhNGQzN2RjN2MwXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg",
// };

const App = () => {
  const [string, setString] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${api_key}&s=${title}`);

    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("commando");
  }, []);

  const handleClick = () => {
    searchMovies(string);
  };

  return (
    <div className="app">
      <h1>Movie Empire</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search Movies"
          value={string}
          onChange={(e) => setString(e.target.value)}
        />
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="seach icon"
          onClick={handleClick}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p>No movies to display</p>
        </div>
      )}
    </div>
  );
};

export default App;
