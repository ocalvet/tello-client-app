import React from 'react';
import { withStyles } from 'material-ui';
import Button from 'material-ui/Button';
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
      justifyContent: 'center'
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
          aria-label="add"
          className={classes.button}>
          <KeyboardArrowUp />
        </Button>
      </div>
      <div className={classes.centeredControls}>
        <Button variant="fab"
          color="primary"
          aria-label="add"
          className={classes.button}>
          <KeyboardArrowDown />
        </Button>
        <Button variant="fab"
          color="primary"
          aria-label="add"
          className={classes.button}>
          <KeyboardArrowLeft />
        </Button>
      </div>
      <div className={classes.centeredControls}>
        <Button variant="fab"
          color="primary"
          aria-label="add"
          className={classes.button}>
          <KeyboardArrowRight />
        </Button>
      </div>
    </div>
  )
}

export default withStyles(styles)(Playback);