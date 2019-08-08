import React, { Component } from "react";
import NavTabs from "../components/NavTabs/NavTabs";
import ChoreListandRewardList from "../components/ChoreListandRewardList/ChoreListandRewardList";
// import palmtree from "./palmtree.png";
import Tree from "../components/Tree/index";


class Parent extends Component {
    render() {
        return (
            <div>
            <div>
                <NavTabs />
                <ChoreListandRewardList />
                <Tree/>
            </div>
            {/* <img id="tree"src={palmtree} alt="Tree" /> */}

            </div>
        )
    }


}

export default Parent