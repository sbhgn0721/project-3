import React, { Component } from 'react';
import { render } from 'react-dom';
import Spritesheet from 'react-responsive-spritesheet';
import './Spritesheet.css';

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
                    image={`https://raw.githubusercontent.com/danilosetra/react-responsive-spritesheet/master/assets/images/examples/sprite-image-horizontal.png`}
                    widthFrame={420}
                    heightFrame={500}
                    steps={14}
                    fps={10}
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