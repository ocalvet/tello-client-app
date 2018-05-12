import React from 'react';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

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
    const { classes } = this.props;
    return (
      <div>
        <h1>Controls</h1>
        <Button variant="raised" color="primary" onClick={() => {this.perform('takeoff')}}>Take Off</Button>
        <Button variant="raised" color="primary" onClick={() => {this.perform('land')}}>Land</Button>
        <Button variant="raised" color="primary" onClick={() => {this.perform('forward')}}>Forward</Button>
        <Button variant="raised" color="primary" onClick={() => {this.perform('back')}}>Back</Button>
        <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Controls);
