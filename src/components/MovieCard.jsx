import React from 'react'

function MovieCard(props) {
    //const {movie} = props; // first deconstructurizing 
    // otherwise, props.movie.title
  const { movie, clickToDelete } = props;
  console.log("MOVIECARD PROPS", props)

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
        Delete 
      </button>
    </div>
  )
}

export default MovieCard;