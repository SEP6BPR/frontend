import React from "react";
import { IMAGE_300, UNAVAILABLE } from "../../configs";
import "./MovieContent.css";
import { Badge } from "@material-ui/core";
import MovieModal from "../MovieModal/MovieModal";

export const MovieContent = ({
  props,
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  language,
  genres,
  director,
}) => {
  // const { Title, Year, imdbID, Type, Poster} = props.movie;
  return (
    <MovieModal media_type={media_type} id={id} >
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }} >
      </Badge>
      <img
        className="poster"
        src={poster ? `${IMAGE_300}/${poster}` : UNAVAILABLE}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </MovieModal>
  );
};

export default MovieContent;
