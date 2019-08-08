import React from "react";
import { Link, withRouter } from 'react-router-dom';
import "./Role.css";
import palmtree from "./palmtree.png";



const Role =() => (
    <div>
        <div>
            <a href="/parent/" className="btn btn-secondary" id="parentPage-button"><p1><strong>Parent Page</strong></p1></a>
            <a href="/child/" className="btn btn-secondary" id="childPage-button"><p1><strong>Child Page</strong></p1></a>

        </div>
        <img id="tree"src={palmtree} alt="Tree" />

        </div>
        
       
    )


export default Role