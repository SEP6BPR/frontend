
import { useMsal, AuthenticatedTemplate } from "@azure/msal-react";

export const Login = () => {
    function ProfileContent() {
        const { accounts } = useMsal();
        const name = accounts[0] && accounts[0].name;
        const username = accounts[0] && accounts[0].username;

        fetch(`https://not-pirate-bay.azurewebsites.net/user/register/${username}`,{method:"POST"});
        return (
            <h5 id="username"> {name}</h5>
        );
    };
    return (
        <div>
            <div></div>
            <AuthenticatedTemplate>
                <ul>
                    <li>
                        <p>Lists</p>
                    </li>
                    <li>
                        <ProfileContent />
                    </li>

                </ul>
            </AuthenticatedTemplate>
        </div>
    )
}

export default Login
