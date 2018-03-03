import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article.jsx';



export class ArticleList extends Component {
  static propTypes = {

  }

  render() {

    const {  articles } = this.props;

    return (
      <div>
        {Object.values(articles).map( (article) => <Article key={article.id} article={article} />)}
      </div>
    )
  }
}

export default ArticleList;
