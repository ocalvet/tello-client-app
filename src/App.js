import React, { Component } from 'react';
import './App.css';

class App extends Component {
  async takeOff() {
    try {
      const response = await fetch("http://localhost:9081/tello/takeoff");
      const json = await response.json();
      console.log('JSON', json);
    } catch(e) {
      console.log('E', e);
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => {this.takeOff()}}>Take Off</button>
      </div>
    );
  }
}

export default App;
