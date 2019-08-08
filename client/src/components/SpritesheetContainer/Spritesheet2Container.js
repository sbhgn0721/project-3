import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import monkey2 from '../Sprites/Monkeys/monkey2.png'
import './SpritesheetContainer.css';

export default class Spritesheet2Container extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div className={this.props.myClass} >
                <p>{this.props.myClass}</p>
                <Spritesheet
                    className={`my-element__class--style`}
                    image={monkey2}
                    widthFrame={169}
                    heightFrame={237}
                    steps={6}
                    fps={12}
                    autoplay={true}
                    loop={true}
                    // //// for hover over functionality
                    onMouseEnter={spritesheet => {
                        spritesheet.play();
                    }}
                    onMouseLeave={spritesheet => {
                        spritesheet.pause();
                    }}
                    background={`https://raw.githubusercontent.com/danilosetra/react-responsive-spritesheet/master/assets/images/examples/sprite-image-background.png`}
                    backgroundSize={`cover`}
                    backgroundRepeat={`no-repeat`}
                    backgroundPosition={`center center`}
                />
            </div>
        );
    }
}