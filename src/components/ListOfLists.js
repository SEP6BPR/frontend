import React from "react";
import { useMsal } from "@azure/msal-react";
import axios from "axios";

export const ListOfLists = () => {
    var data = [];
    const { accounts } = useMsal();
    const username = accounts[0] && accounts[0].username
    const fetchData = ({data})=>{
        axios.get(`https://not-pirate-bay.azurewebsites.net/user/${username}/lists`)
        .then(response => {
            data.push(response)
          })
          .catch(error => {
            console.log(error);
          });
    }
    
    return (
        <div className="drop-down">
            <span>
                <button onClick={fetchData}>update lists</button>
            </span>
            <select>{
                data.map((obj) => {
                    return <option value={obj.list_ids}>{obj.list_name}</option>
                })
            }</select>
        </div>
    )
}
export default ListOfLists;