import React from 'react';
import { withStyles } from 'material-ui';

const styles = ({ spacing }) => {
  return {
    canvas: {
      margin: spacing.unit
    }
  };
};

class Player extends React.Component {
  componentDidMount() {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 100, 100);
  }

  render() {
    return (
      <div>
        <h1>Player</h1>
        <canvas ref="canvas" width="500" height="500"></canvas>
      </div>
    );
  }
}

export default withStyles(styles)(Player);