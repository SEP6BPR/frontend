import { Link } from 'react-router-dom';
import "../App.css";
import { PageLayout } from './PageLayout';

export const Header = () => {
    return (< header >
        <
        div className="container" >
            <
        div className="inner-content" >
                <
        div className="brand" >
                    <
        Link to="./Add" > (NOT) PiratBay < /Link> < /
        div >

                        <
        ul className="nav-links" >
                            <
                                li >
                                <
                                    PageLayout />
                                <
        /li> < /
        ul > <
        /div> </div >
                            <
        /header>
                            )
}