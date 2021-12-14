import React, { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { makeStyles } from "@material-ui/core";
import {
  IMAGE_500,
  IMAGE_300,
  UNAVAILABLELandscape,
  UNAVAILABLE,
} from "../../configs";
import axios from "axios";
import { video, useVideo } from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./mm.css";
import { useParams } from "react-router-dom";
import CarouselActors from "./CarouselActors";
import "./CarouselActors.css";
import { Chip } from "@material-ui/core";
import Rating from "./Rating";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { Comments } from "../Comment/SingleComment";

const useStyles = makeStyles((Theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    transparent: true,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdrop_path: true,
    scroll: true,
  },
  paper: {
    width: "70%",
    height: "80%",
    backgroundColor: "#e99696",
    border: "1px solid #e99696",
    borderRadius: 5,
    color: "white",
    boxShadow: 24,
    p: 4,
    padding: Theme.spacing(1, 1, 3),
  },
}));

export default function TransitionsModal({
  children,
  id,
  media_type,
  props,
  i,
  genres,
  crew,
  member,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const [movieInfo, setMovieInfo] = useState();
  const [cast, setCast] = useState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    //console.log(data);
    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  // movie credits
  const fetchCredits = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    );

    //const cast = await response.json();
    // setCast(response);

    const director = response.data.crew.find(
      (director) => director.job === "Director"
    );

    //console.log(director);

    setCast(director.name);
  };

  //   // searching the name of the director

  //   console.log(response.data.crew.director);

  //   const credits = response.data;
  //   return { director: director, credits: credits };

  // };

  // const directors = cast.filter((member) => member.job === 'Directing');

  // useEffect(() => {
  //   axios.get(
  //     `https://api.themoviedb.org/3/${selectedMovie}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`,
  //   ).then((response) => setMovieInfo(response.data));
  // }, [selectedMovie]);

  useEffect(() => {
    fetchData();
    fetchVideo();
    fetchCredits();
  }, []);

  const authenticated = useIsAuthenticated();
  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;

  return (
    <>
      <div
        className="media"
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
        color="inherit"
      >
        {children}
      </div>
      <Modal
        className={classes.modal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{ overflow: "scroll" }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div className="MovieModal">
                <img
                  className="MovieModal_portrait"
                  alt={content.name || content.title}
                  src={
                    content.poster_path
                      ? `${IMAGE_300}/${content.poster_path}`
                      : UNAVAILABLE
                  }
                  alt={content.name || content.title}
                  className="MovieModal_portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${IMAGE_500}/${content.backdrop_path}`
                      : UNAVAILABLELandscape
                  }
                  alt={content.name || content.title}
                  className="MovieModal_landscape"
                />

                <div className="MovieModal_about">
                  <span className="MovieModal_title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-"
                    ).substring(0, 4)}
                    )
                  </span>

                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <div>
                    <span>
                      {content.genres &&
                        content.genres.slice(0, 5).map((genre, i) => (
                          <Chip
                            color="secondary"
                            style={{ margin: 2 }}
                            label={genre.name}
                            key={i}
                            text="bold"
                            className="genres__item"
                          >
                            {genre.name}
                          </Chip>
                        ))}
                    </span>
                  </div>

                  <div className="MovieModal_movieInf">
                    <div>
                      <span>
                        Release Date: <i>{content?.release_date}</i>
                      </span>
                    </div>

                    <div>
                      <span>
                        IMDB Rating: <i>{content?.vote_average}</i>
                      </span>
                    </div>

                    <div>
                      <span>
                        Language: <i>{content?.original_language}</i>
                      </span>
                    </div>

                    <div>
                      <span>
                        Runtime: <i>{content?.runtime}</i>
                        {" minutes"}
                      </span>
                    </div>

                    <div>
                      <span>
                        Budget: <i>{content?.budget}</i>{" "}
                      </span>
                    </div>

                    <div>
                      <span>
                        Director: <i>{cast}</i>
                      </span>
                    </div>
                  </div>
                  <span className="MovieModal_description">
                    {content.overview}
                  </span>

                  <div className="carousel_actors">
                    <CarouselActors media_type={media_type} id={id} />
                  </div>

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch Trailer
                  </Button>

                  <div className="MovieModal_user_comments">
                    {/* <div className="MovieModal_review_title">
                      <h2>User reviews</h2>
                      <div className="all_user_comments">
                        <div className="single_user_comments">
                          <div className="username_with_stars">
                            <div className="username">
                              <h5>Smilte</h5>
                            </div>
                            <div className="stars"></div>
                          </div>

                          <div className="comment">
                            "hkzjshdkjshdk"
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="MovieModal_write_review_title">
                      <div>
                        <h4>Write a review</h4>
                        <Rating />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
