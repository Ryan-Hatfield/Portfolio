import React from "react";
import "../assets/css/style.css";

function Footer() {
    return(
        <footer>
            <nav class="navbar sticky-bottom navbar-dark bg-dark">
            <ul class="navbar-nav list-inline">
                  <li class="nav-item" id="footer"> Find me on:</li>
                  <li><a href='https://www.linkedin.com/in/ryan-hatfield-b216b478/'>LinkedIn</a></li>
                  <li class="nav-item list-inline-item">
                      <a class="LI-simple-link" id="footerGit" href="https://github.com/Ryan-Hatfield">GitHub</a>
                  </li>
              </ul>
            </nav>
        </footer>
    )
}

export default Footer;