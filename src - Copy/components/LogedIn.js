
import { useMsal } from "@azure/msal-react";
import '../App.css';

export const LogedIn = () => {
    function ProfileContent() {
        const { accounts } = useMsal();
        const name = accounts[0] && accounts[0].name;
        const username = accounts[0] && accounts[0].username;

        fetch(`https://not-pirate-bay.azurewebsites.net/user/register/${username}`, { method: "POST"})
        .then(res => { 
            if (res.ok)
              return console.log(res)
            else
              return Promise.reject(res.statusText) 
          });
          
        
        return (
           <p id="username">{name}</p>
        );
    };
    return (
    <ProfileContent />
    )
}

export default LogedIn
