import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./assets/search.svg";
import "./App.css";

const API_URL = "https://www.omdbapi.com?apikey=85ccab0a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
        
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};


export default App;







// import './App.css'
// import './assets/search.svg'
// import React, { useEffect } from "react";

// const API_URL = 'http://www.omdbapi.com?apikey=85ccab0a';

// const App = () => {

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();
    
//     console.log(data.Search); // The property should be "Search" with an uppercase "S"
//   }

//   useEffect(() => {
//     searchMovies('the call');
//   }, []);

//   return (
//     <h1>App</h1>
//   );
// }

// export default App;






// import React, { useEffect } from "react";

// const API_URL = 'http://www.omdbapi.com?apikey=85ccab0a';

// const App = () => {

//   const searchMovies = async (title) => {
//     const response = await fetch(`${API_URL}&s=${title}`);
//     const data = await response.json();
    
//     console.log(data.Search); // The property should be "Search" with an uppercase "S"
//   }

//   useEffect(() => {
//     searchMovies('the call');
//   }, []);

//   return (
//     <h1>App</h1>
//   );
// }

// export default App;
