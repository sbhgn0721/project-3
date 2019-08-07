import React, { Component } from "react";
import "./welcome.css";
import Tree from "../components/Tree/index";
//import RoleChoose from "../components/RoleChoose/RoleChoose"


class Welcome extends Component {
    render() {
        return (
            <div>
                <div>
                    <br></br><br></br><br></br>
                    <h5>No one loves doing chores, especially children. In the 21st century children are playing or glued to their smart phones.
                    <br></br><br></br><strong>Welcome to Monkey See, Monkey 2DO!</strong><br></br>Our website will make it easier and more
                            enjoyable for children when they can complete their chores without parental pressure. Once chores are finished, children
                    will be rewarded for their accomplishments.</h5>
                    
                    <a href="/parent/" className="btn btn-primary" id="parentPage-button">If you are a parent, click here!</a>
                    
                    
                    <a href="/child/" className="btn btn-success" id="childPage-button">If you are a child, click here!</a>
                    
                    


                </div>
                <Tree />
            </div>

        )

    }


}

export default Welcome;