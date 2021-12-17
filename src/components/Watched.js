import React, { useEffect, useState } from "react";
import "./TrendingMovies/MovieContent.css";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import MovieContent from "./TrendingMovies/MovieContent";
import { ResultCard } from "./ResultCard";
import axios from "axios";

export const Watched = () => {
	const [name, setName] = useState("");
	const [content] = useState([]);
	const { accounts } = useMsal();
	const username = accounts[0] && accounts[0].username;
	const isAuthenticated = useIsAuthenticated();
	const [results, setResults] = useState([]);
	// const [listID, setListID] = useState();

	const handleInput = (e) => {
		setName(e.target.value);
	};
	let listID = 0

	const movieIDs = async () => {
		console.log(username);
		await axios.get(`https://not-pirate-bay.azurewebsites.net/user/${username}/lists`).then((res) => {
			const lists = res.data.lists;
			console.log(lists);
			for (let index = 0; index < lists.length; index++) {
				if (lists[index].list_name === "Movies Watched") {
					console.log(lists[index].list_id)
					listID = lists[index].list_id;
				}
			}
		});

		await axios.get(`https://not-pirate-bay.azurewebsites.net/movie_list/${listID}`).then((res) => {
			console.log(res);
			if (!res.errors) {
				// checking for errors
				// console.log(data);
				setResults(res.data.movies);
			} else {
				setResults([]); // no results
			}
		});
	};

	// const movieData = async () => {
		
	// };

	useEffect(() => {
		movieIDs();
		// movieData();
	}, []);

	return (
		<div className="movie-page">
			<div className="container">
				<div className="header">
					{isAuthenticated ? (
						<>
							<div className="trending">
								{results &&
									results.map((c) => (
										<MovieContent
											key={c.id}
											id={c.id}
											poster={c.poster_path}
											title={c.title || c.name}
											date={c.first_air_date || c.release_date}
											media_type={c.media_type}
											vote_average={c.vote_average}
										/>
									))}
							</div>
						</>
					) : (
						<p>you must be logged in</p>
					)}
				</div>
			</div>
		</div>
	);
};
