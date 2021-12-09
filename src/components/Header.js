
import { Link } from 'react-router-dom'; 
import { PageLayout } from './PageLayout';
import "../App.css"; 

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
                            <Link to="/Lists">Lists</Link>
                        </li>
                        <li>
                            <div>
                                <PageLayout/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
