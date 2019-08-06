import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import monkey2 from '../Sprites/Monkeys/monkey2.png'
import './SpritesheetContainer.css';

export default class SpritesheetContainer extends Component {
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
                    image={monkey2}
                    widthFrame={167}
                    heightFrame={237}
                    steps={6}
                    fps={10}
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