import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import monkey3 from '../Sprites/Monkeys/monkey3.png'
import './SpritesheetContainer.css';

export default class Spritesheet3Container extends Component {
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
                    image={monkey3}
                    widthFrame={169}
                    heightFrame={237}
                    steps={6}
                    fps={13}
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