// 6
// import { useState } from 'react';
// import moviesData from '../movies-data.json';
// import MovieCard from './MovieCard';

// function MovieList() {
//   const [movies, setMovies] = useState(moviesData);
 

//   const deleteMovie = (movieId) => {
//     const filteredMovies = movies.filter((movie) => {
//       return movie._id !== movieId;
//     });

//     setMovies(filteredMovies);
//   };

//   return (
//     <div>
//       <h2>Movie List</h2>
//       {movies.map((movie) => {
//         return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie}/>
//       })}
//     </div>
//   )
// }


// 5
import { useState } from 'react';

// Array of movies
import moviesData from '../movies-data.json';
import MovieCard from './MovieCard';

function MovieList() {
  // Declare a state variable "movies"
  // and set the array from movies-data.json as the initial state
  const [movies, setMovies] = useState(moviesData);
  console.log(moviesData)

  const deleteMovie = (movieId) => {
    console.log("MovieID:", movieId)
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies); // updating the status with the filtered new array (omit the deleted one)
  };

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => {
        console.log("Movie:", movie);
        return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie} />
      })} 
       </div>
      )
    
}

export default MovieList;
