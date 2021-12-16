import { Link } from 'react-router-dom'; //move around and create navlinks
import { PageLayout } from './PageLayout';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import "../App.css"; 

function ProfileContent() {
    const { accounts } = useMsal();
    const username = accounts[0] && accounts[0].name;

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
                        <Link to="/Add" onClick={() => window.scroll(0, 0)}>(NOT) PirateBay</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/">Watch Lists</Link>
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
