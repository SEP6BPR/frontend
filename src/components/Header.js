
import { Link } from 'react-router-dom'; //move around and create navlinks
import { PageLayout } from './PageLayout';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

function ProfileContent() {
    const { instance, accounts } = useMsal();
    const username = accounts[0] && accounts[0].username;
    fetch(`https://not-pirate-bay.azurewebsites.net/user/movie_list/${username}`)
        .then((res) => res.json())
        .then(data => {
            if(!data.errors) { // checking for errors
               console.log("error");
            } else {
                console.log(data); // no results
            }
        });

    return (

        <h5 className="card-title">Welcome {username}</h5>

    );
};

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">(NOT) PiratBay</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/">Watch List</Link>
                        </li>

                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>

                        <li>
                            <div>
                                <span><PageLayout>

                                </PageLayout></span>
                                <span id="userDispaly"><AuthenticatedTemplate>
                                    <ProfileContent />
                                </AuthenticatedTemplate>
                                <UnauthenticatedTemplate>
                                </UnauthenticatedTemplate></span>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
