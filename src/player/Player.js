import React from 'react';
import { withStyles } from 'material-ui';
import Button from 'material-ui/Button';

const styles = ({ spacing }) => {
  return {
    canvas: {
      margin: spacing.unit
    },
    title: {
      marginRight: 15
    }
  };
};

class Player extends React.Component {
  state = {
    feedOn: false
  }
  componentDidMount() {
    const { canvas } = this.refs;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'lightgray';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  toggleFeed() {
    const feeding = this.state.feedOn;
    this.setState({...this.state, feedOn: !feeding});
  }

  render() {
    const {classes} = this.props;
    return (
      <div>
        <h1><span className={classes.title}>Video</span><Button variant="raised" 
                color="primary"
                onClick={() => {this.toggleFeed()}}
                >{this.state.feedOn ? 'Off' : 'On'}</Button></h1>
        <canvas ref="canvas" width="500" height="500"></canvas>
      </div>
    );
  }
}

export default withStyles(styles)(Player);