import React from 'react';
import PropTypes from 'prop-types';
import StoreProvider from './StoreProvider';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = (theme) => ({
  card: {
    minWidth: 275,
    margin: '10px 25px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

const displayDate = (date) =>{
  return new Date(date).toDateString();
}

export const Article = ({classes, article, store}) => {

  let author = store.lookupAuthor(article.authorId);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title}>{displayDate(article.date)}</Typography>
        <Typography variant="headline" component="h2">
          {article.title}
        </Typography>
        <a href={author.website}>
          <Typography className={classes.pos} component="span" >{author.firstName} {author.lastName}</Typography>
        </a>
          
        <Typography component="p">
          {article.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};


Article.propTypes = {
  classes: PropTypes.object.isRequired,
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }),
};



export default StoreProvider(withStyles(styles)(Article));
