import React, { useState, Fragment, useEffect } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import "./Rating.css";

const labels = {
	0.5: "Useless",
	1: "Useless+",
	1.5: "Poor",
	2: "Poor+",
	2.5: "Ok",
	3: "Ok+",
	3.5: "Good",
	4: "Good+",
	4.5: "Excellent",
	5: "Excellent+"
};

export default function HoverRating(props) {
	let tmdbID = props.id
	const authenticated = useIsAuthenticated();
	const { accounts } = useMsal();
	const name = accounts[0] && accounts[0].name;

	const email = accounts[0] && accounts[0].username;
	const [value, setValue] = React.useState(2);
	const [hover, setHover] = React.useState(-1);

	const [userId, setUserId] = useState(0);
	const [reviews] = useState();
	const [comment, setComment] = useState("");
	const [APIid, setApiId] = useState();

	let fetching = async () => {
		// console.log(tmdbID)
		console.log(email)
		let external_id = await axios.get(
			`https://api.themoviedb.org/3/movie/${tmdbID}/external_ids?api_key=${process.env.REACT_APP_TMDB_KEY}`
		);
		// console.log(external_id.data.imdb_id)
		let APIid = parseInt(external_id.data.imdb_id
			.slice(2, external_id.data.imdb_id.length)
			.replace(/^0+/, ""));
		setApiId(APIid);
		console.log(APIid)
		
		const response  = await axios.get(
			`https://not-pirate-bay.azurewebsites.net/user/${email}/id`
		);
		console.log(response.data.user_id)
		setUserId(response.data.user_id);
	};

	

	const handleCommentInput = (e) => {
		// console.log(e.target.value)
		setComment(e.target.value);
	};

	const postReviews = async (e) => {
		const reviewBody = {
			review_text: comment,
			user_id: userId,
			user_name: name,
			score: value,
			movie_id: APIid,
		};

		console.log(reviewBody)
		// fetch(`https://not-pirate-bay.azurewebsites.net/review/`, {
		// 	method: "POST",
		// 	body: reviewBody
		// });

		axios.post('https://not-pirate-bay.azurewebsites.net/review/', reviewBody)
	};
	// https://not-pirate-bay.azurewebsites.net/docs#/default/add_review_review__post
	// https://not-pirate-bay.azurewebsites.net/movie/${id}/reviews
	// https://not-pirate-bay.azurewebsites.net/review/

	useEffect(() => {
		fetching();
	},[]);

	return (
		<>
			<div className="MovieModal_review_title">
				<h2>User reviews</h2>
				<div className="all_user_comments">
					<div className="single_user_comments">
						<div className="username_with_stars">
							<div className="username">
								<h5>{}</h5>
							</div>
							<div className="stars"></div>
						</div>
						<h1>LATEST REVIEW:</h1>
						<div className="comment">{reviews}</div>
					</div>
				</div>
			</div>
			{authenticated ? (
				<>
					<div style={styles.container}>
						<div>
							<p className="user_name">{name}</p>
							<Box
								sx={{
									width: 200,
									display: "flex",
									alignItems: "center"
								}}
							>
								<Rating
									name="hover-feedback"
									value={value}
									precision={0.5}
									onChange={(event, newValue) => {
										setValue(newValue);
									}}
									onChangeActive={(event, newHover) => {
										setHover(newHover);
									}}
									emptyIcon={
										<StarIcon style={{ opacity: 1 }} fontSize="inherit" />
									}
								/>
								{value !== null && (
									<Box sx={{ ml: 2 }}>
										{labels[hover !== -1 ? hover : value]}
									</Box>
								)}
							</Box>
						</div>

						<div>
							<textarea
								type="text"
								maxLength={140}
								placeholder="Write your feedback..."
								style={styles.textarea}
								color="black"
								onChange={handleCommentInput}
							></textarea>
							<button
								className="submit_button"
								style={styles.button}
								onClick={postReviews}
							>
								Submit
							</button>
						</div>
					</div>
				</>
			) : (
				<p>Login to write a review</p>
			)}
		</>
	);
}

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		padding: 10,
		background: "pink",
		borderRadius: 5,
		width: 330
	},
	stars: {
		display: "flex",
		flexDirection: "row"
	},
	textarea: {
		border: "1px solid #a9a9a9",
		borderRadius: 5,
		padding: 10,
		margin: "20px 0",
		minHeight: 100,
		width: 300
	}
	// button: {
	//   display: "flex",
	//   textalign: "center",
	//   border: "1px solid #a9a9a9",
	//   borderRadius: 5,
	//   width: 150,
	//   padding: 5,
	//   margin: 2,
	//   color: "primary",
	// },
};
