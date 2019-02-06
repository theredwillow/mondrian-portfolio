import React, { Component } from 'react';
import './App.css';

import MondrianBox from './MondrianBox/MondrianBox';

class App extends Component {
  render() {

    const titleStyle = {
      color: 'white',
      fontSize: '26px',
      fontWeight: 'bold'
    };

    return (
      <div className="App">
        <MondrianBox color="red" location={[100,70]} size={[200,50]}>
          <span style={titleStyle}>Piet Mondrian</span>
        </MondrianBox>
        <MondrianBox color="yellow" location={[250,175]} size={[350,275]}>
          He was one of the first known abstract expressionists. He used straight lines, right angles, primary colors, white, black, and gray to express his spirituality.
        </MondrianBox>
        <MondrianBox color="blue" location={[100,500]} size={[25,25]} />
      </div>
    );
  }
}

export default App;
