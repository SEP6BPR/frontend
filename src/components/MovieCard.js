import React from "react";
import { MovieControls } from "./MovieControls";
import "./TrendingMovies/MovieContent.css"

export const MovieCard = ({ movie, type, media_type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      {movie.poster_path ? (
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (
        <div className="filler-poster"></div>
      )}

      <MovieControls type={type} movie={movie} />

      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">
          {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
        </span>
      </span>
    </div>
  );
};

export default MovieCard;
