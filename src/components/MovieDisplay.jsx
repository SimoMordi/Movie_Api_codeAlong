

const MovieDisplay = ({movie}) => {
        const loaded = () => {
            const loading = () => {
                return <h1>No Movie to Display</h1>;
              };
            
              //Ternary operator will determine which functions JSX we will return
              return movie ? loaded() : loading();
            };
        

  return (
    <div>
      <h1>{movie.Title}</h1>
      <h2>{movie.Genre}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Year}</h2>
    </div>
  )
}

export default MovieDisplay
