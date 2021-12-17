import { useEffect, useState } from "react";
import "./TrendingMovies/MovieContent.css";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import MovieContent from "./TrendingMovies/MovieContent";
import axios from "axios";

export const Watched = () => {
	const { accounts } = useMsal();
	const username = accounts[0] && accounts[0].username;
	const isAuthenticated = useIsAuthenticated();
	const [results, setResults] = useState([]);

	let listID = 0

	const movieIDs = async () => {
		console.log(username);
		await axios.get(`https://not-pirate-bay.azurewebsites.net/user/${username}/lists`).then((res) => {
			const lists = res.data.lists;
			for (let index = 0; index < lists.length; index++) {
				if (lists[index].list_name === "Movies Watched") {
					console.log(lists[index].list_id)
					listID = lists[index].list_id;
				}
			}
		});

		await axios.get(`https://not-pirate-bay.azurewebsites.net/movie_list/${listID}`).then((res) => {
			if (!res.errors) {
				setResults(res.data.movies);
			} else {
				setResults([]); // no results
			}
		});
	};

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
