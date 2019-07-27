import React, { Component } from "react";
import "./style.css";


class LogForm extends Component {
    state = {
        username: "",
        password: "",
        login: "",
        signup: ""

    };
    handleInputChange = event  => {
        const {name, value } =event.target;

        this.setState({
            [name]: value
         });
        };

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({ username: "", password: "", login: "", signup: "" });
    };

    render() {
        return (
            <form>
                <div id="USERNAME"> {this.state.username}</div>
                <div id="PASSWORD"> {this.state.password}</div>
                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={this.props.username}
                    OnChange={this.props.handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={this.props.password}
                    OnChange={this.handleInputChange}
                    
                />
                {/* <input
                    type="text"
                    placeholder="Log In"
                    name="login"
                    value={this.state.login}
                    OnChange={this.handleInputChange}
                /> */}
                {/* <input
                    type="text"
                    placeholder="Sign up"
                    name="signup"
                    value={this.state.signup}
                    OnChange={this.handleInputChange}
                /> */}
                <button onClick={this.handleFormSubmit}>Log In</button>
                {/* <button id="LOGIN">onClick={this.handleFormSubmit}>Log In</button> */}

                {/* <button id="SIGNUP">onClick={this.handleFormSubmit}>Sign Up</button> */}
                <button onClick={this.handleFormSubmit}>Sign Up</button>


            </form>
        );
}
}
export default LogForm;