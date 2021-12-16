const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_TMDB_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const IMAGE_300 = 'http://image.tmdb.org/t/p/w300';
const IMAGE_500 = 'http://image.tmdb.org/t/p/w500';
const UNAVAILABLE = 'https://movienewz.com/img/films/poster-holder.jpg';
const UNAVAILABLELandscape = 'https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg';

// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

// for actors
const NO_PICTURE = "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";

export {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    IMAGE_300,
    IMAGE_500,
    UNAVAILABLE,
    UNAVAILABLELandscape,
    NO_PICTURE,
  };