import React from 'react';
import { Link } from 'react-router-dom'; //move around and create navlinks

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
                            <Link to="/add" className="btn">
                                Add favorite
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
