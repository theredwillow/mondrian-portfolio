import React, { Component } from 'react';

const lineWidth = 7;

class MondrianLine extends Component {

    constructor(props) {
        super(props);

        const lineStyle = {
            zIndex: 0,
            position: 'absolute',
            backgroundColor: 'black'
        };

        if ( this.props.line === "top" || this.props.line === "bottom" ) {
            this.direction = "horizontal";
            this.lineStyle = {
                ...lineStyle,
                top: this.props.locY,
                height: `${lineWidth}px`,
                width: '100%'
            };
        }
        else {
            this.direction = "vertical";
            this.lineStyle = {
                ...lineStyle,
                left: this.props.locX,
                width: `${lineWidth}px`,
                height: '100%'
            };
        }

    }

    render() {
        return (<div className={`${this.props.line} ${this.direction} line`} style={this.lineStyle}></div>);
    }

}

export default MondrianLine;