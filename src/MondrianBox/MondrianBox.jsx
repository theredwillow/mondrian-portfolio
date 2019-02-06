import React, { Component } from 'react';

const lineWidth = 7;

const lineStyle = {
    zIndex: 0,
    position: 'absolute',
    backgroundColor: 'black'
};

const HorizontalLine = ({locY}) => {
    const hlStyle = {
        ...lineStyle,
        top: locY,
        height: `${lineWidth}px`,
        width: '100%'
    };
    return (<div className="horizontal line" style={hlStyle}></div>);
};

const VerticalLine = ({locX}) => {
    const vlStyle = {
        ...lineStyle,
        left: locX,
        width: `${lineWidth}px`,
        height: '100%'
    };
    return (<div className="vertical line" style={vlStyle}></div>);
};

class MondrianBox extends Component {

    constructor(props) {
        super(props);
        [this.locX, this.locY] = this.props.location;  
        [this.width, this.height] = this.props.size;
    }

    render() {

        const boxStyle = {
            left: `${this.locX + lineWidth}px`,
            top: `${this.locY + lineWidth}px`,
            position: 'absolute',
            width: this.width,
            height: this.height,
            zIndex: 5,
            backgroundColor: this.props.color,
            padding: '10px',
            boxSizing: 'border-box'
        };

        return (
            <React.Fragment>
                <VerticalLine locX={this.locX} />
                <HorizontalLine locY={this.locY} />
                <div className="box" style={boxStyle}>{this.props.children}</div>
                <HorizontalLine locY={this.locY + this.height + lineWidth} />
                <VerticalLine locX={this.locX + this.width + lineWidth} />
            </React.Fragment>
        );

    }
  }
  
  export default MondrianBox;