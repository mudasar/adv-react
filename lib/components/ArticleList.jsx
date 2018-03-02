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

    const { classes, articles, articleActions } = this.props;

    return (
      <div>
          {Object.values(articles).map( (article) => <Article key={article.id} article={article} actions={articleActions} />)}
      </div>
    )
  }
}

export default withStyles(styles)(ArticleList);
