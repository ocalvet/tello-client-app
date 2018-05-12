import React, { Component } from 'react';
import './App.css';
import Controls from './controls/Controls';
import Playback from './playback/Playback';
import Player from './player/Player';
import { withStyles } from 'material-ui';

const styles = ({spacing}) => ({
  app: {
    padding: 10 * spacing.unit
  }
})

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        <div className={classes.left}>
          <Controls />
          <Playback />
        </div>
        <div className={classes.right}>
          <Player />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
