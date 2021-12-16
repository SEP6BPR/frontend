import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import axios from "axios";
import "./ListOfLists.css";

export const ListOfLists = () => {

    const { accounts } = useMsal();
    const username = accounts[0] && accounts[0].username;
    const [list, setList] = useState([]);
    let listNames = [];
    //   let listArr = list.split(',');

    const fetchData = () => {
        axios
            .get(`https://not-pirate-bay.azurewebsites.net/user/${username}/lists`)
            .then((response) => {
                const res = response.data.list_ids
                 setList(res);                
                
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(creatListMenu())
    };
    const creatListMenu = () => {
        for (let i = 0; i < list.length; i++) {
            listNames.push(list[i].list_name);
            return <option key={list[i].list_id}>{listNames[i]}</option>    
        }
        
    }
        useEffect(() => {
            fetchData();
        });

        return (
            <div>
                <span>
                    <button onClick={fetchData}>update</button>
                </span>
        <select>
           {creatListMenu}
        </select>
            </div>
        );
    };

export default ListOfLists;