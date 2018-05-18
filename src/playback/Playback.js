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
  };
};

const Playback = ({ classes }) => {
  return (
    <div>
      <h1>Playback</h1>
      <div className={classes.centeredControls}>
        <Button variant="fab"
          color="primary"
          aria-label="up"
          className={classes.button}>
          <KeyboardArrowUp />
        </Button>
      </div>
      <div className={classes.centeredControls}>
        <Button variant="fab"
          color="primary"
          aria-label="left"
          className={classes.button}>
          <KeyboardArrowLeft />
        </Button>
        <Button variant="fab"
          color="primary"
          aria-label="right"
          className={classes.button}>
          <KeyboardArrowRight />
        </Button>
      </div>
      <div className={classes.centeredControls}>
        <Button variant="fab"
          color="primary"
          aria-label="down"
          className={classes.button}>
          <KeyboardArrowDown />
        </Button>
      </div>
    </div>
  )
}

export default withStyles(styles)(Playback);