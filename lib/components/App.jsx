import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList.jsx';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

//import axios from 'axios';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export class App extends Component {
  static propTypes = {

  }
  static childContextTypes = {
    store: PropTypes.object,
  }

  getChildContext(){
    return {store: this.props.store};
  }

  state = this.props.store.getState();

  render() {
    const { classes } = this.props;
    return (
     <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <ArticleList store={this.props.store} articles={this.state.articles} />
    </div>
    )
  }
}

export default withStyles(styles)(App);
