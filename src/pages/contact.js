import React from "react";
import "../assets/css/style.css";

function Contact() {
    return (
        <section class="container" id = "contactContainer">
            <section>
              <h2 id ="contactHeader">Contact Information</h2>
            </section>
            <section class="row">
              <section class="column" id ="contactLinks">
                <ul>
                  <li><strong>Email Address:</strong> <span id="contactLi">hatfield086@gmail.com</span></li>
              </ul>
              <h4 id="linksH4">Links:</h4>
                <ul>
                  <li><a href="https://www.linkedin.com/in/ryan-hatfield-b216b478/">Ryan Hatfields LinkedIn</a></li>
              </ul>
                <ul>
                  <li><a href="https://github.com/Ryan-Hatfield">Ryan Hatfields GitHub</a></li>
              </ul>
                <ul>
                  <li><a href="https://drive.google.com/file/d/1JuC802GltbASgHd-jiwR2DeDIKXccDQh/view?usp=sharing">Ryan Hatfields Resume</a></li>
              </ul>
              </section>
            </section>
          </section>
    )
}

export default Contact;