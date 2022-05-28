import React from 'react';
import {Link} from "react-router-dom";
import "./Header.scss"

const Header = (props) => {
    return (
        <div className="Header">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><img src="./image/menu-rounded.png"/></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/help">HELP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
         </div>
    );
};

export default Header;
