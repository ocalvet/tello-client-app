import React from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = ({ spacing }) => {
  return {
    button: {
      margin: spacing.unit
    },
    centeredControls: {
      display: 'flex',
      justifyContent: 'center',
      width: '50%'
    },
    leftCenter: {
      marginRight: 25
    },
    rightCenter: {
      marginLeft: 25
    }
  };
};

class Playback extends React.Component {
  async perform(action) {
    try {
      const response = await fetch(`http://localhost:9081/tello/${action}`);
      const json = await response.json();
      console.log('JSON', json);
    } catch (e) {
      console.log(`error performing ${action}`, e);
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1>Playback</h1>
        <div className={classes.centeredControls}>
          <Button variant="fab"
            color="primary"
            aria-label="up"
            className={classes.button}
            onClick={() => {this.perform('forward')}}>
            <KeyboardArrowUp />
          </Button>
        </div>
        <div className={classes.centeredControls}>
          <Button variant="fab"
            color="primary"
            aria-label="left"
            className={`${classes.button} ${classes.leftCenter}`}
            onClick={() => {this.perform('left')}}>
            <KeyboardArrowLeft />
          </Button>
          <Button variant="fab"
            color="primary"
            aria-label="right"
            className={`${classes.button} ${classes.rightCenter}`}
            onClick={() => {this.perform('right')}}>
            <KeyboardArrowRight />
          </Button>
        </div>
        <div className={classes.centeredControls}>
          <Button variant="fab"
            color="primary"
            aria-label="down"
            className={classes.button}
            onClick={() => {this.perform('backward')}}>
            <KeyboardArrowDown />
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Playback);