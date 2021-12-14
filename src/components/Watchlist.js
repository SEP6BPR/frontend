import React from "react";
import { useState } from "react";
import "./TrendingMovies/Sc.css"
import axios from "axios";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import SingleContent from "./TrendingMovies/SingleContent";
import ListOfLists from "./ListOfLists";


export const Watchlist = () => {

  const [name, setName] = useState("");
  const [content] = useState([]);
  const { accounts } = useMsal();
  const username = accounts[0] && accounts[0].username;
  const isAuthenticated = useIsAuthenticated();

  const handleInput = (e) => {
    setName(e.target.value);
  }
  var dataSource = [];
  const fetchLists = async () => {
    const { data } = await axios.get(
      `https://not-pirate-bay.azurewebsites.net/user/${username}/lists`
    );
    dataSource = data.list_ids;
    console.log(dataSource);
  };

  const createNewList = (e) => {
    fetch(`https://not-pirate-bay.azurewebsites.net/user/${username}/create_list/?list_name=${name}`, { method: "POST" })
  }
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          {isAuthenticated ?
            <>
              
              <span>
                <ListOfLists/>
              </span>
              <span>
                <input type="text"
                  placeholder="new list"
                  onChange={handleInput}
                >
                </input>
              </span>
              <span>
                <button className="count-pill" onClick={createNewList}>
                  add new play list
                </button>
              </span>
              <div>

              </div>
            </>
            :
            <p>you must be loged in</p>
          }
        </div>
        <div className="trending">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
              />
            ))}
        </div>
      </div>
    </div >
  );
};
