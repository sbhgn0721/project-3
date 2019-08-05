import React, { Component } from 'react';
import { render } from 'react-dom';
import Spritesheet from 'react-responsive-spritesheet';
import  monkey1  from '../Sprites/Monkeys/monkey1.png'
import './SpritesheetContainer.css';

class SpritesheetContainer extends Component {
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
                    widthFrame={150}
                    heightFrame={250}
                    steps={5}
                    fps={1}
                    // startAt={1}
                    // endAt={3}
                    autoplay={true}
                    loop={true}
                    background={`https://raw.githubusercontent.com/danilosetra/react-responsive-spritesheet/master/assets/images/examples/sprite-image-background.png`}
                    backgroundSize={`cover`}
                    backgroundRepeat={`no-repeat`}
                    backgroundPosition={`center center`}
                />
            </div>
        );
    }
}

export default SpritesheetContainer