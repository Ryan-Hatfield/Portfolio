import React from "react";
import "../assets/css/style.css";
import clock from "../assets/images/5oclockDrink.png";
import employee from "../assets/images/5oclockDrink.png";
import weather from "../assets/images/5oclockDrink.png";
import note from "../assets/images/5oclockDrink.png";
import read from "../assets/images/5oclockDrink.png";
import schedule from "../assets/images/5oclockDrink.png";

function Portfolio() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card-dark bg-dark h-100">
                    <h4>5 O'Clock Somewhere</h4>
                        <div class="card-body">
                            <a href="https://stephenfink.github.io/5-O-clock-somewhere/" class="card-link">5 O'Clock Somewhere</a>
                            <a href="https://github.com/Ryan-Hatfield/5-O-clock-somewhere.git" class="card-link">GitHub Repository</a>
                          </div>
                        <img src={clock} class="card-img-top" alt="Drink Search Page"></img>
                    </div>
                </div>
                
                <div class="col-sm">
                    <div class="card-dark bg-dark">
                        <h4>Work Day Scheduler</h4>
                        <div class="card-body">
                            <a href="https://ryan-hatfield.github.io/homework-5/" class="card-link">Work Day Scheduler</a>
                            <a href="https://github.com/Ryan-Hatfield/homework-5.git" class="card-link">GitHub Repository</a>
                        </div>
                        <img src={schedule}  class="card-img-top"alt="Work Day Scheduler"></img>
                    </div>
                </div>

                <div class="col-sm">
                    <div class="card-dark bg-dark">
                        <h4>Weather Dashboard</h4>
                        <div class="card-body">
                            <a href="https://ryan-hatfield.github.io/homework-6/" class="card-link">Weather Dashboard</a>
                            <a href="https://github.com/Ryan-Hatfield/homework-6.git" class="card-link">GitHub Repository</a>
                            </div>
                        <img src={weather} class="card-img-top" alt="Weather Dashboard"></img>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <div class="card-dark bg-dark">
                        <h4>Note Taker</h4>
                        <div class="card-body">
                            <a href=" https://guarded-chamber-61170.herokuapp.com/" class="card-link">Note Taker</a>
                            <a href="https://github.com/Ryan-Hatfield/Note-Taker.git" class="card-link">GitHub Repository</a>
                          </div>
                        <img src={note} class="card-img-top" alt="Note Take"></img>
                    </div>
              </div>

                <div class="col-sm">
                    <div class="card-dark bg-dark h-100">
                        <h4>Employee Managment System</h4>
                        <div class="card-body">
                            <a href="https://drive.google.com/file/d/13gw5ieQcHz3aafLQGp-iZpZ7f7iQDguG/view?usp=sharing" class="card-link">Employee Management System</a>
                            <a href="https://github.com/Ryan-Hatfield/Employee-Management-System.git" class="card-link">GitHub Repository</a>
                        </div>
                        <img src={employee}  class="card-img-top"alt="Employee Management System"></img>
                    </div>
                </div>

                <div class="col-sm">
                    <div class="card-dark bg-dark">
                        <h4>Good README Generator</h4>
                        <div class="card-body">
                            <a href="https://drive.google.com/file/d/1Fkk6HlYJQySMXBKZH8slvWQRGrRTB_QB/view?usp=sharing" class="card-link">Good README Generator</a>
                            <a href="https://github.com/Ryan-Hatfield/Good-README-Generator.git" class="card-link">GitHub Repository</a>
                        </div>
                        <img src={read} class="card-img-top" alt="Good README Generator"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;