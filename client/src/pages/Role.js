import React, { Component } from "react";
import NavTabs from "../components/NavTabs/NavTabs";
import RoleChoose from "../components/RoleChoose/RoleChoose";


class RoleForm extends Component {
    render() {
        return (
            <div>
                <NavTabs />
                <RoleChoose />
                
            </div>
        )
    }


}

export default RoleForm;