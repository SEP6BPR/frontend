import React, { useEffect, useState } from "react";
import "./TrendingMovies/MovieContent.css";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import MovieContent from "./TrendingMovies/MovieContent";
import ListOfLists from "./ListOfLists";
import { ResultCard } from "./ResultCard";
import axios from "axios";

export const Watchlist = () => {
	const [name, setName] = useState("");
	const [content] = useState([]);
	const { accounts } = useMsal();
	const username = accounts[0] && accounts[0].username;
	const isAuthenticated = useIsAuthenticated();
	const [results, setResults] = useState([]);

	const handleInput = (e) => {
		setName(e.target.value);
	};

	const movieIDs = async () => {
		axios.get(
			`https://not-pirate-bay.azurewebsites.net/user/${username}/movies`
		).then((res) => {
			const data = res.data;
			console.log(res)
			if (!data.errors) {
				// checking for errors
				// console.log(data);
				setResults(data.movies);
			} else {
				setResults([]); // no results
			}
		});
	}	

	useEffect(() => {
		movieIDs();
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
