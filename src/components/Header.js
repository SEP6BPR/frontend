import Login from './Login';
import { Link } from 'react-router-dom'; 
import "../App.css"; 
import { PageLayout } from './PageLayout';

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="./Add">(NOT) PiratBay</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="./Watched">Watch List</Link>
                        </li>

                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>
                        
                        <li>
                            <Login/>
                        </li>
                        <li>
                            <PageLayout/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
