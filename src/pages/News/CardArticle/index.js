import React from 'react';
import Card from '@material-ui/core/Card';
import {
  CardContent, Typography, Box, CardMedia,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ModalArticle from '../ModalArticle';

const useStyles = makeStyles({
  cardArticle: {
    margin: 16,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    boxShadow: '2px -1px 4px 1px #E5E5E5',
    alignItems: 'flex-end',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTextSecondary: {
    marginBottom: 8,
    fontSize: 14,
  },
  cardCategory: {
    backgroundColor: '#3f51b5',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 10,
    padding: 10,
    width: 100,
  },
  cardCategoryAlign: {
    display: 'flex',
    justifyContent: 'start',
  },
  cardImageSize: {
    height: 0,
    paddingTop: '56.25%',
  },
});

export default function CardArticle(props) {
  const classes = useStyles();

  return (
    <Card className={classes.cardArticle}>
      <Box>
        <Box>
          <Typography
            className={classes.cardCategory}
            variant="caption"
            title="Category"
          >
            {props.category}
          </Typography>
          <ModalArticle
            title={props.title}
            description={props.description}
            author={props.author}
            url={props.url}
          />
        </Box>
        <CardContent key={props.key}>
          <Box className={classes.cardCategoryAlign} />
          <CardMedia
            className={classes.cardImageSize}
            image={props.image}
            title={props.caption}
          />
          <Typography
            className={classes.cardTitle}
            color="textPrimary"
            gutterBottom
            align="justify"
          >
            {props.title}
          </Typography>
          <Typography className={classes.cardTextSecondary} color="textSecondary">
            {!props.author ? 'By Anonymous' : props.author}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
