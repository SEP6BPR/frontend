import axios from "axios";
import React, { useEffect, useState } from "react";
import { ResultCard } from "./ResultCard";
import MovieContent from "./TrendingMovies/MovieContent";
import "./TrendingMovies/Trending.css";
import { PagePagination } from "./TrendingMovies/PagePagination";
import { Top10Movies } from "./Top10Movies";

export const Add = () => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const [content, setContent] = useState([]);
	//const [recomended, setRecomended] = useState([]);
	const [page, setPage] = useState(1);

	const onChange = (e) => {
		e.preventDefault();

		setQuery(e.target.value);

		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
		)
			.then((res) => res.json())
			.then((data) => {
				if (!data.errors) {
					// checking for errors
					console.log(data);
					setResults(data.results);
				} else {
					setResults([]); // no results
				}
			});
	};

	// trending movies on the main page
	const fetchTrendingMovies = async () => {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
		);
		// console.log(data);

		// for (let index = 0; index < data.results.length; index++) {
		//   let external_id = await axios.get(`https://api.themoviedb.org/3/movie/${data.results[index].id}/external_ids?api_key=${process.env.REACT_APP_TMDB_KEY}`)
		//   //console.log(external_id.data.imdb_id)
		//   external_id.data.imdb_id = external_id.data.imdb_id.slice(2, external_id.data.imdb_id.length).replace(/^0+/, '')

		//   // data.results[index].id = external_id['imdb_id']
		//   console.log(external_id.data.imdb_id)
		// }
		console.log(data.results);
		setContent(data.results);
	};

	// Recomended movies
	// const fetchRecomendedMovies = async () => {
	// 	const { data } = await axios.get(
	// 		`https://api.themoviedb.org/3/recomended/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`
	// 	);
	// 	// console.log(data);

	// 	setRecomended(data.results);
	// };

	useEffect(() => {
		fetchTrendingMovies();
		//fetchRecomendedMovies();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	return (
		<div className="add-page">
			<div className="container">
				<div className="add-content">
					<div className="input-wrapper">
						<input
							type="text"
							placeholder="Search for a movie"
							value={query}
							onChange={onChange}
						/>
					</div>

					{results.length > 0 && (
						<ul className="results">
							{results.map((movie) => (
								<li key={movie.id}>
									<ResultCard movie={movie} />
								</li>
							))}
						</ul>
					)}
				</div>
			</div>

			<h2>Top 10 popular Movies according to our users</h2>
			<div className="trending">
				  <Top10Movies></Top10Movies>
			</div>

			<h2>Trending Movies</h2>
			<div className="trending">
				{content &&
					content.map((c) => (
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
			<PagePagination setPage={setPage} />
		</div>
	);
};
