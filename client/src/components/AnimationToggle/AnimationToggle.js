import React, { Component } from 'react'

export default class AnimationToggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.state = { showAnimation: "none" };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
            showAnimation:"block"
        }));
    }

    render() {
        return (
            <button className="btn btn-warning" id="reward1-toggle-button" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Hide reward' : 'Get reward!'}
            </button>
        );
    }
}
