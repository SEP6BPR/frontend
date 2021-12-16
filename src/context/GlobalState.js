import React, { createContext, useReducer, useEffect} from 'react';
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
};

    // create context
    export const GlobalContext = createContext(initialState);

    // provider components
    export const GlobalProvider = (props) => {
        const [state, dispatch] = useReducer(AppReducer, initialState);

        useEffect(() => {
            localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
            localStorage.setItem("watched", JSON.stringify(state.watched));
        }, [state]);

    // actions
    const addMovieToWatchlist = (movie) => {
        //console.log("guci");
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
    };

    // to remove movie from watch list
    const removeMovieFromWatchlist = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
    };

    // const addMovieToWatched = movie => {
    //     dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie});
    // };

    // move to watchlist from watched
    const moveToWatchlist = movie => {
        dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie});
    };

    // remove from wathed
    // const removeFromWatched = id => {
    //     dispatch({type: "REMOVE_FROM_WATCHED", payload:id});
    // };


    return (
        <GlobalContext.Provider 
            value={{ 
                watchlist: state.watchlist, 
                watched: state.watched, 
                addMovieToWatchlist, 
                removeMovieFromWatchlist,
                moveToWatchlist,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};