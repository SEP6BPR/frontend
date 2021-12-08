
import { Link } from 'react-router-dom'; //move around and create navlinks
import { PageLayout } from './PageLayout';
import "../App.css";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <Link to="/Add" onClick={() => window.scroll(0, 0)}>(NOT) PirateBay</Link>
                    <table>
                        <th><PageLayout /></th>
                    </table>
                </div>
            </div>
        </header>
    )
}
