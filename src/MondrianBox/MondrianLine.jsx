import React, { Component } from 'react';

const lineWidth = 7;

class MondrianLine extends Component {

    constructor(props) {
        super(props);

        const lineStyle = {
            zIndex: 0,
            backgroundColor: 'black'
        };

        if ( this.props.line === "top" || this.props.line === "bottom" ) {
            this.direction = "horizontal";
            this.lineStyle = {
                ...lineStyle,
                position: 'absolute',
                top: this.props.locY,
                height: `${lineWidth}px`,
                width: '100%'
            };
            if ( this.props.line === "top" ) {
                this.lineStyle.top -= lineWidth;
            }
        }
        else {
            this.direction = "vertical";
            this.lineStyle = {
                ...lineStyle,
                position: 'fixed',
                left: this.props.locX,
                width: `${lineWidth}px`,
                height: '100%'
            };
            if ( this.props.line === "left" ) {
                this.lineStyle.left -= lineWidth;
            }
        }

    }

    render() {
        return (<div className={`${this.props.line} ${this.direction} line`} style={this.lineStyle}></div>);
    }

}

export default MondrianLine;