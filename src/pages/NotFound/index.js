import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header';

const useStyles = makeStyles(() => ({
  notFoundPadding: {
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
      <Typography gutterBottom variant="h6" className={classes.notFoundPadding}>
        Página não encontrada!
      </Typography>
    </>
  );
}
