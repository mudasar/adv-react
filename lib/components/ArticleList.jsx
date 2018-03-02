import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Article from './Article.jsx';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});



export class ArticleList extends Component {
  static propTypes = {

  }

  render() {

    const { classes, articles, authors } = this.props;

    return (
      <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
        Article List
          Paper can be used to build surface or other elements for your application.
          {Object.values(articles).map(article => <Article key={article.id} article={article} author={authors[article.authorId]} />)}
        </Typography>
      </Paper>
        
      </div>
    )
  }
}

export default withStyles(styles)(ArticleList);
