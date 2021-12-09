import { useIsAuthenticated } from "@azure/msal-react";
//import React, { useContext } from "react";
//import { GlobalContext } from "../context/GlobalState";
//import { MovieCard } from "./MovieCard";
import "./TrendingMovies/Sc.css";
//import { useState } from "react";
//import SingleContent from "./TrendingMovies/SingleContent";

export const Lists = () => {


  return (
    <div>
      <div className="movie-page">
        <div className="container">
          <div className="header">

          {useIsAuthenticated ?
            <div className="media">
              <butto>
                new list
              </butto>
            </div>

            :
            <h2 className="no-movies">you have to be signed in</h2>
          }
          </div>
        </div>
      </div>
    </div>
  );
};