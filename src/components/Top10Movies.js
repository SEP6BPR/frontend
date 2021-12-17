import { useEffect, useState } from "react";
import "./TrendingMovies/MovieContent.css";
import MovieContent from "./TrendingMovies/MovieContent";
import axios from "axios";

export const Top10Movies = () => {
	const [results, setResults] = useState([]);

	const movieIDs = async () => {
		await axios.get(`http://localhost:7071/movies/top10`).then((res) => {
			console.log(res.data);
			if (!res.errors) {
				
				setResults(res.data);
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
				</div>
			</div>
		</div>
	);
};
