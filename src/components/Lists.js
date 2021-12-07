import { useMsal } from "@azure/msal-react";
import '../App.css';

export const Lists = () => {
        function ListsContent() {
            const { accounts } = useMsal();
            const name = accounts[0] && accounts[0].name;
            const username = accounts[0] && accounts[0].username;
            fetch(`https://not-pirate-bay.azurewebsites.net/user/register/${username}`, { method: "POST" })
            return ( <
                th id = "list" > Lists < /th>);
            }

            return ( <
                ListsContent / >
            )
        }
        export default Lists