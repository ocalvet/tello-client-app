import React, { Component } from 'react';
import './App.css';
import Controls from './controls/Controls';
import Playback from './playback/Playback';
import Player from './player/Player';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = ({ spacing }) => ({
  root: {
    flexGrow: 1,
  },
  app: {
    padding: 10 * spacing.unit,
    display: 'flex',
    flexDirection: 'row'
  },
  left: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  right: {
    display: 'flex',
    flex: 1
  }
})

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Tello Client Application
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.app}>
          <div className={classes.left}>
            <Controls />
            <Playback />
          </div>
          <div className={classes.right}>
            <Player />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
