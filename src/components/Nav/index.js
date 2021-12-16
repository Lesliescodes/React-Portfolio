import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <header>
                <h2>Leslie Allen </h2>
                <nav>
                    <ul>
                        <li>
                            <Link to='../About'>About</Link>
                        </li>
                        <li>
                            <Link to='../Project'>Projects</Link>
                        </li>
                        <li>
                            <Link to='../Contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='../Resume'>Resume</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </nav>
    )
}

export default Nav;