import React, { Component } from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import monkey2 from '../Sprites/Monkeys/monkey2.png'
import './SpritesheetContainer.css';

class SpritesheetContainer extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    myFunctionPlay() {
        this.spritesheetInstance.play();
    }

    myFunctionPause() {
        this.spritesheetInstance.pause();
    }
    // useful for debugging
    // myFunctionGetFrame() {
    //     alert(this.spritesheetInstance.getInfo('frame'));
    // }

    myFunctionToggleDirection() {
        if (this.spritesheetInstance.getInfo('direction') === 'forward') {
            this.spritesheetInstance.setDirection('rewind');
        } else if (this.spritesheetInstance.getInfo('direction') === 'rewind') {
            this.spritesheetInstance.setDirection('forward');
        }
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
                    // startAt={0}
                    // endAt={2}
                    autoplay={true}
                    loop={true}
                    // //// for hover over functionality
                    onMouseEnter={spritesheet => {
                        spritesheet.play();
                    }}
                    onMouseLeave={spritesheet => {
                        spritesheet.pause();
                    }}
                    // //// for onClick functions
                    // getInstance={spritesheet => {
                    //     this.spritesheetInstance = spritesheet;
                    // }}
                    // background={`https://raw.githubusercontent.com/danilosetra/react-responsive-spritesheet/master/assets/images/examples/sprite-image-background.png`}
                    // backgroundSize={`cover`}
                    // backgroundRepeat={`no-repeat`}
                    // backgroundPosition={`center center`}
                />
                <div>
                    <button onClick={this.myFunctionPlay.bind(this)}>play</button>
                    <button onClick={this.myFunctionPause.bind(this)}>pause</button>
                    {/* useful for debugging */}
                    {/* <button onClick={this.myFunctionGetFrame.bind(this)}>alert current frame</button> */}
                    <button onClick={this.myFunctionToggleDirection.bind(this)}>toggle direction</button>
                </div>
            </div>
        );
    }
}

export default SpritesheetContainer