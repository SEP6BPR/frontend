
import { Link } from 'react-router-dom'; //move around and create navlinks
import { PageLayout } from './PageLayout';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import "../App.css"; 

function ProfileContent() {
    const {accounts } = useMsal();
    const username = accounts[0] && accounts[0].name;
    const name = accounts[0] && accounts[0].username;
    fetch(`http://not-pirate-bay.azurewebsites.net/user/movie_list/${name}`)
    
        .then((res) => res.json())
        .then(data => {
            console.log(data);
        });

    return (

        <h5 id="username"> {username}</h5>

    );
};

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/Add">(NOT) PiratBay</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="./Watched">Watch List</Link>
                        </li>

                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>
                        <span id="userDispaly">
                            <AuthenticatedTemplate>
                                <ProfileContent/>
                            </AuthenticatedTemplate>
                            <UnauthenticatedTemplate>
                            </UnauthenticatedTemplate>
                        </span>
                        <li>
                            <div>
                                <span><PageLayout>
                                </PageLayout></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
