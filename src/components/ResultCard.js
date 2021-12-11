/*import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Movie from "./Movie";
import Popup from "./Popup";
*/
// result card from search
/*export const ResultCard = ({ movie, media_type }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  // adding popup for movie
  // const openPopup = id => {
  //     axios(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}` + "&i=" + id).then(({ data }) => {
  //         let movie = data;

  //         setState()
  //     })
  // }

  //const MovieInfo = ({ image, movieId, clickable})

  return (
    <div className="result-card">
      <div className="media">
        {movie.poster_path ? (
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}

        <b className="title">{movie.title}</b>

        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </span>
        </span>
      </div>

      <div className="info">
        <div className="header"></div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
*/