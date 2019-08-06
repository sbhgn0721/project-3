import React from "react";
import "./style.css"
import palmtree from "./palmtree.png";

function Tree(props) {
// return <img src="palmtree.png" alt="Tree" />
return (
<div>
    <img id="tree"src={palmtree} alt="Tree" />
</div>
)
}

export default Tree;