
import { Link } from 'react-router-dom'; //move around and create navlinks
import { PageLayout } from './PageLayout';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import "../App.css"; 

function ProfileContent() {
    const { instance, accounts } = useMsal();
    const username = accounts[0] && accounts[0].name;
    fetch(`https://not-pirate-bay.azurewebsites.net/user/movie_list/${username}`)
        .then((res) => res.json())
        .then(data => {
            if (!data.errors) { // checking for errors
                console.log("error");
            } else {
                console.log(data); // no results
            }
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
                            <Link to="/">Watch List</Link>
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
