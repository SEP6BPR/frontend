import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import axios from "axios";
import "./ListOfLists.css";

function MovieLists() {
	const { accounts } = useMsal();
	const username = accounts[0] && accounts[0].username;
	const [name, setName] = useState("");
	const [movieLists, setMovieLists] = useState([]);

	const fetchData = () => {
		axios.get(`https://not-pirate-bay.azurewebsites.net/user/${username}/lists`)
			.then((response) => {
				console.log(response.data);
				setMovieLists(response.data.list_ids);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	
	const handleInput = (e) => {
		setName(e.target.value);
	  }

	const createNewList = (e) => {
		fetch(`https://not-pirate-bay.azurewebsites.net/user/${username}/create_list/?list_name=${name}`, { method: "POST" })
	  }

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<span>
				<button onClick={fetchData}>update</button>
			</span>
			<span>
                <input type="text"
                  placeholder="new list"
                  onChange={handleInput}
                >
                </input>
                <button className="count-pill" onClick={createNewList}>
                  Create new list
                </button>
              </span>
			<h1>Movie Lists</h1>
			<ul>
				{movieLists.map((list) => (
					<li key={list.list_id}>{list.list_name}</li>
				))}
			</ul>
		</>
	);
}

export default MovieLists;
