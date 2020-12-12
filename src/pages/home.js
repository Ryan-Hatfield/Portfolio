import React from "react";
import "../assets/css/style.css";
import bio from "../assets/images/bio.jpg";

function Home() {
    return (  
        <div class="container">
            <h3 id="aboutH3"> About Me </h3>
            <div class="row">
                <div class="col-md-2"><img class="img img-thumbnail" src= {bio} alt="My Wife and I"></img></div>
                <div class="col-md-6">
                    <p> My name is Ryan Hatfield. My wife Emilyn and I have been married for 11 years. We have two children, one boy and one girl. My son is the oldest, 10, and his name is Porter. 
                        My daughter is 8 and her name is Adilyn. We love to travel the world and experience new cultures and adventures. I love anything outdoors, but mainly camping, hunting, fishing and hiking. 
                        I was born and raised in Garland, Texas. I lived there until 2009 when joined the U.S. Navy. 
                    </p>
                    <p> My job in the Navy was an Avionics Electronic Technician. I served five years in the Navy. in 2014 I moved back to Texas and got a job in the Oil and Gas Industry around the
                        San Antonio Area. In 2016 I got a new job with another Oil company, still live in the San Antonio area, but travel frequently to North Dakota.
                    </p>
                    <p>Currently I am enrolled in a coding bootcamp course at The University of Texas at San Antonio. This course is teaching me to become a Full Stack Web Developer.
                        I feel this skill will be very useful in the future and I am excited for the challenges that await.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;