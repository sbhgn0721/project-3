import React, { Component } from "react";
import NavTabs from "../components/NavTabs/NavTabs";
import ChoreListandRewardList from "../components/ChoreListandRewardList/ChoreListandRewardList";

class Parent extends Component {
    render() {
        return (
            <div>
                <NavTabs />
                <ChoreListandRewardList />
            </div>
        )
    }


}

export default Parent