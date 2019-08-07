import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars';

class CustomScrollbars extends Component {
    handleClick() {
        this.refs.scrollbars.scrollToTop()
        }
        render() {
        return (
            <div>
            <Scrollbars
            renderScrollbarHoriziontal={props => <div {...props}
            className="scrollbar-vertical"/> }

            renderScrollbarVertical={({style, props}) => {
                return <div style={{style, padding: 20}} {...props}/>;
            }}>
                {this.props.children}
            </Scrollbars>
            </div>
        );
    }
}