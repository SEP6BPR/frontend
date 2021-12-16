import axios from "axios";
import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IMAGE_300, NO_PICTURE } from "../../configs";
import "./CarouselActors.css";

const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src="path-to-img" onDragStart={handleDragStart} />,
//   <img src="path-to-img" onDragStart={handleDragStart} />,
//   <img src="path-to-img" onDragStart={handleDragStart} />,
// ];

const Gallery = ({ media_type, id }) => {
  const [credits, setCredits] = useState([]);

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
  });

  const items = credits?.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${IMAGE_300}/${c.profile_path}` : NO_PICTURE}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem_img"
      />
      <b className="carouselItem_txt">{c?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  return (
    <AliceCarousel
      responsive={responsive}
      mouseTracking
      items={items}
      infinite
      disableDotsControls
      disableButtonsControls
    />
  );
};

export default Gallery;
