import React, { Component } from 'react';
import MondrianLine from './MondrianLine';

const lineWidth = 7;
class MondrianBox extends Component {

    constructor(props) {
        super(props);
        [this.locX, this.locY] = this.props.location;  
        [this.width, this.height] = this.props.size;

        this.leftLine = React.createRef();
        this.topLine = React.createRef();
        this.box = React.createRef();
        this.bottomLine = React.createRef();
        this.rightLine = React.createRef();
    }

    componentDidMount() {
        if (this.box.current !== null) {
            this.mondrianLines = (<>
                <MondrianLine ref={this.leftLine} line="left" locX={this.locX} />
                <MondrianLine ref={this.topLine} line="top" locY={this.locY} />
                <MondrianLine ref={this.bottomLine} line="bottom" locY={this.locY + this.box.current.naturalHeight + lineWidth} />
                <MondrianLine ref={this.rightLine} line="right" locX={this.locX + this.width + lineWidth} />
            </>);
        }
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
                <div className="box" ref={this.box} style={boxStyle}>{this.props.children}</div>
                {this.mondrianLines}
            </React.Fragment>
        );

    }
  }
  
  export default MondrianBox;