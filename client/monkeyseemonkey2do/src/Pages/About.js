
import React, { Component } from "react";
// import "./About.css";
import NavBar from "../Components/NavBar"


class About extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="aboutContainer" >
                    <div className="mainNames">
                        {/* <img src="../images/ff_logo.png" className="ffLogo" /> */}
                        <div id="ourNames">
                            <a href="https://github.com/GregoryLanter" className="developers" title="Gregory Lanter" target="_blank">Greg L.</a>
                            <a href="https://github.com/sbhgn0721" className="developers" title="Hongliao Xiong" target="_blank">Hongliao X.</a>
                            <a href="https://github.com/sitruks" className="developers" title="Kurtis Santillanes" target="_blank">Kurtis S.</a>
                            <a href="https://github.com/getatmeyer" className="developers" title="Nathan Meyer" target="_blank">Nathan M.</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;