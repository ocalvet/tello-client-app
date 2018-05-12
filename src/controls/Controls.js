import React from 'react';

class Controls extends React.Component {
  async perform(action) {
    try {
      const response = await fetch(`http://localhost:9081/tello/${action}`);
      const json = await response.json();
      console.log('JSON', json);
    } catch(e) {
      console.log(`error performing ${action}`, e);
    }
  }
  render () {
    return (
      <div>
        <h1>Controls</h1>
        <button onClick={() => {this.perform('takeoff')}}>Take Off</button>
        <button onClick={() => {this.perform('land')}}>Land</button>
        <button onClick={() => {this.perform('forward')}}>Forward</button>
        <button onClick={() => {this.perform('back')}}>Back</button>
      </div>
    );
  }
}

export default Controls;
