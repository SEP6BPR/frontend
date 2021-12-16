import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import axios from "axios";
import "./ListOfLists.css";

export const ListOfLists = () => {
	const { accounts } = useMsal();
	const username = accounts[0] && accounts[0].username;
	const [list, setList] = useState([]);
	let listNames = [];

	const fetchData = () => {
		axios
			.get(`https://not-pirate-bay.azurewebsites.net/user/${username}/lists`)
			.then((response) => {
				const res = response.data;
				console.log(res);
				setList(res);
			})
			.catch((error) => {
				console.log(error);
			});
		// creatListMenu()
	};
	const creatListMenu = () => {
		for (let i = 0; i < list.length; i++) {
			console.log(listNames[i]);
			listNames.push(<p>{listNames[i]}</p>);
			return listNames;
		}
	};
	// const ListItem = (props) => {
	// 	<div>
	// 		<p>List: {props.list_name}</p>
	// 		<p>ListID: {props.list_id}</p>
	// 	</div>;
	// };

	// function List(props) {
    //     render() {
    //         const data =[{"name":"test1"},{"name":"test2"}];
    //         const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
        
    //         return (
    //           <div>
    //           {listItems }
    //           </div>
    //         );
    //       }
	// }

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<span>
				<button onClick={fetchData}>update</button>
			</span>
			<select></select>
			<div>
				{
                    
                }
			</div>
		</div>
	);
};

export default ListOfLists;
