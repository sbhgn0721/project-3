import React, { Component } from 'react'

export default class AnimationToggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let newToggle = true;
        if (this.state.isToggleOn) newToggle = false;
        this.setState({isToggleOn: newToggle})

        this.props.toggleRewardLevelButton(this.props.level);
    }
    

    render() {
        return (
            <button className="btn btn-warning" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Hide reward' : 'Get reward!'}
            </button>
        );
    }
    
}
