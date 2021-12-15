import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import axios from "axios";
import { ButtonGroup } from "@material-ui/core";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Button } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { DropdownButton } from "react-bootstrap";
import "./ListOfList.css";
import Select from "react-select";

export const ListOfLists = () => {
  var data = [];
  var lists = [];
  const { accounts } = useMsal();
  const username = accounts[0] && accounts[0].username;
  const [list, setList] = useState(data);
  //   let listArr = list.split(',');

  const fetchData = () => {
    axios
      .get(`https://not-pirate-bay.azurewebsites.net/user/${username}/lists`)
      .then((response) => {
        setList(response.data.list);
        
        console.log(list);
        // console.log(list.list_name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 

  // const demo = {
  //   [
  //     {
  //       "id": 1,
  //       "name": "demo",
  //     },
  //     {
  //       "id": 2,
  //       "name": "poop",
  //     },
  //   ]
  // }

  // useEffect(() => {
  //   fetchData();
  // });

  return (
    // <div>
    //   <span>
    //     <button onClick={fetchData}>update</button>
    //   </span>

    //   <select>
    //     {list.list_name && list.map((list_ids, obj) => (
    //         <option key={obj} label={list_ids.name} >
    //           {list.list_name}
    //         </option>
    //       ))}
    //   </select>
    // </div>

    <div>
      {/* <Select onClick={fetchData} className="select_hover"
      onChange={fetchData}>
        <option disabled selected>
          Select your list
        </option> */}
      {/* <button onClick={fetchData}>click</button>
      <div>
        
        list:
        {list for.map(lists => { return(
            <div key={lists} value={list.data}>
              {lists.name}
            </div>
          )})}
      </div> */}
      {/* <div>
        {data &&
          data.map((lists) => {
            return <p>{list}</p>;
          })}
          </div> */}
      {/* </Select> */}
    </div>

    // <div className="drop-down">
    //   <span>
    //     <button onClick={fetchData}>update lists</button>
    //   </span>
    //   <select>
    //     {data.map((obj) => {
    //       return <option value={obj.list_ids}>{obj.list_name}</option>;
    //     })}
    //   </select>
    // </div>

    //     <Dropdown> {list &&}
    //   <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={fetchData}>
    //     Dropdown Button
    //   </Dropdown.Toggle>

    //   <Dropdown.Menu> { list.list_name && (
    //       <Dropdown.Item value={data.list_ids}>{list.list_name}</Dropdown.Item>
    //   )}
    //     {/* <Dropdown.Item href="#/action-1">{data.list_name}</Dropdown.Item> */}

    //   </Dropdown.Menu>

    // </Dropdown>

    // { list && (
    // <DropdownButton id="dropdown-basic-button" title="Dropdown button">
    //   <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    //   <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //   <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    // </DropdownButton>
    // )}
  );
};
export default ListOfLists;
