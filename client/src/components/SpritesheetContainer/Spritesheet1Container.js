import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import monkey1 from '../Sprites/Monkeys/monkey1.png'
import './SpritesheetContainer.css';

export default class Spritesheet1Container extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div className="rrs-container">
                <Spritesheet
                    className={`my-element__class--style`}
                    image={monkey1}
                    widthFrame={169}
                    heightFrame={237}
                    steps={6}
                    fps={11}
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