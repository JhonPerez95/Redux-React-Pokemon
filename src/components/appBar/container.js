import React from 'react';
import { Link } from 'react-router-dom';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
const styles = {
  root: {
    flexGrow: 3,
  },
  grow: {
    flexGrow: 1,
  },
};

const Container = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/" className={classes.grow} color="inherit">
            <Typography variant="h6">Home</Typography>
          </Link>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link to="/pokelist">List Pokemon</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Container);
