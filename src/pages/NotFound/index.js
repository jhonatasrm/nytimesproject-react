import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header';

const useStyles = makeStyles(() => ({
  pageNotFoundMargin: {
    marginTop: '200px',
    margin: '0 auto',
    textAlign: 'center',
  },
}));

export default function NotFound() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Typography gutterBottom variant="h6" className={classes.pageNotFoundMargin}>
        Page not found!
      </Typography>
    </>
  );
}
