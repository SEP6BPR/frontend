import { AirlineSeatReclineExtraTwoTone } from "@material-ui/icons";
import React from "react";
import { IMAGE_300, UNAVAILABLE } from "../../configs";
import "./Sc.css";

export const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div className="media">
      
        <img
          className="poster"
          src={poster ? `${IMAGE_300}/${poster}` : UNAVAILABLE}
          alt={title}
        />
        <b className="title">{title}</b>
        <span className="subTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{date.substring(0, 4)}</span>
        </span>
      
    </div>
  );
};

export default SingleContent;
