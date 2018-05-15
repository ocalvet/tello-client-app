import React from 'react';
import { withStyles } from 'material-ui';
import Button from 'material-ui/Button';

const styles = ({ spacing }) => {
  return {
    canvas: {
      margin: spacing.unit
    }
  };
};

class Player extends React.Component {
  componentDidMount() {
    const { canvas } = this.refs;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'lightgray';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  render() {
    return (
      <div>
        <h1><span>Player</span><Button variant="raised" 
                color="primary"
                // onClick={() => {this.perform('land')}}
                >Land</Button></h1>
        <canvas ref="canvas" width="500" height="500"></canvas>
      </div>
    );
  }
}

export default withStyles(styles)(Player);