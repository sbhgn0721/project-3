import React, { Component } from "react";
import NavTabs from "../components/NavTabs/NavTabs";
import RoleChoose from "../components/RoleChoose/RoleChoose";

class Role extends Component {
    render() {
        return (
            <div>
                <NavTabs />
                <RoleChoose />
            </div>
        )
    }


}

export default Role