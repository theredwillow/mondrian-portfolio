import React, { Component } from 'react';
import MondrianLine from './MondrianLine';

class MondrianBox extends Component {

    constructor(props) {
        super(props);
        [this.locX, this.locY] = this.props.location;  
        [this.width, this.height] = this.props.size;

        this.state = {};
    }

    componentDidMount() {
        let boxStatus = this.refs.box.getBoundingClientRect();
        this.setState({
            mondrianLines:
            (<>
                <MondrianLine line="left" locX={boxStatus.left} />
                <MondrianLine line="top" locY={boxStatus.top} />
                <MondrianLine line="bottom" locY={boxStatus.top + boxStatus.height} />
                <MondrianLine line="right" locX={boxStatus.left + boxStatus.width} />
            </>)
        });
    }

    render() {

        const boxStyle = {
            left: this.locX,
            top: this.locY,
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
                <div className="box" ref="box" style={boxStyle}>{this.props.children}</div>
                {this.state.mondrianLines}
            </React.Fragment>
        );

    }
  }
  
  export default MondrianBox;