import React, { Component } from "react";
import NavTabs from "../components/NavTabs/NavTabs";
import Role from "../components/Role/Role";

class Roles extends Component {
    render() {
        return (
            <div>
                <NavTabs />
                <Role />
            </div>
        )
    }


}

export default Roles