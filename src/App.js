import React, { Component } from 'react';
import './App.css';
import Controls from './controls/Controls';
import Playback from './playback/Playback';

class App extends Component {
  render() {
    return (
      <div>
        <Controls />
        <Playback />
      </div>
    );
  }
}

export default App;
