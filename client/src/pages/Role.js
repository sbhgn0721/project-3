import React, { Component } from "react";
import NavTabs from "../components/NavTabs/NavTabs";
import Role from "../components/Role/Role";

class RoleForm extends Component {
    componentDidMount = () => {
        const scope = this;
    }
    render() {
        return (
            <div>
                <NavTabs />
                <Role />
                
            </div>
        )
    }


}

export default RoleForm;