import React, { Component } from 'react';
import './App.css';

class App extends Component {
  async perform(action) {
    try {
      const response = await fetch(`http://localhost:9081/tello/${action}`);
      const json = await response.json();
      console.log('JSON', json);
    } catch(e) {
      console.log(`error performing ${action}`, e);
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => {this.perform('takeoff')}}>Take Off</button>
        <button onClick={() => {this.perform('land')}}>Land</button>
        <button onClick={() => {this.perform('forward')}}>Forward</button>
        <button onClick={() => {this.perform('back')}}>Back</button>
      </div>
    );
  }
}

export default App;
