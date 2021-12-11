import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useState } from "react";
import "./TrendingMovies/Sc.css"
import axios from "axios";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import SingleContent from "./TrendingMovies/SingleContent";
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';

export const Watchlist = () => {

  const { watchlist } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [content, setContent] = useState([]);
  const { accounts } = useMsal();
  const username = accounts[0] && accounts[0].username;
  const isAuthenticated = useIsAuthenticated();
  const listsData = new DataManager(
    {
      adaptor: new ODataV4Adaptor,
      crossDomain: true,
      url: `https://not-pirate-bay.azurewebsites.net/user/${username}/lists`
    }
  );
  const iquery = new Query().from('list_ids').select(['id']);
  const field = {text:"list_ids"}
  const handleInput = (e) => {
    setName(e.target.value);
  }
  var dataSource = [];
  const fetchLists = async () => {
    const { data } = await axios.get(
      `https://not-pirate-bay.azurewebsites.net/user/${username}/lists`
    );
    dataSource.push(data.results)
  };
  const createNewList = (e) => {
    fetch(`https://not-pirate-bay.azurewebsites.net/user/${username}/creat_list/${name}`, { method: "POST" })
  }
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          {isAuthenticated ?
            <>
              <span>
                <button onClick={fetchLists}>update lists</button>
              </span>
              <span>
                <DropDownListComponent id="ListsMenu" dataSource={listsData} fields={field} placeholder="select a list" popupHeight="220px" />
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
              <dive>

              </dive>
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
