import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/style.css";

function Navigation() {
    return(
        <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1">Ryan Hatfield</span>
            <section class="navbar" id="navbarNav">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <NavLink class="nav-link active" to="/">Home/About</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link active" to="/contact">Contact</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink class="nav-link active" to="/portfolio">Portfolio</NavLink>
                    </li>
                </ul>
            </section>
        </nav>
    )
}

export default Navigation ;