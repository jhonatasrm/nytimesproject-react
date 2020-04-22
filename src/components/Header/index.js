import React from '../../../node_modules/react';
import {
  Toolbar,
  AppBar,
  Typography,
} from '../../../node_modules/@material-ui/core';
import { makeStyles } from '../../../node_modules/@material-ui/styles';
import LinkWrapper from '../../store/link-wrapper';

const useStyles = makeStyles(() => ({
  linkHeader: {
    color: '#b3b3b3',
    textDecoration: 'none',
    marginLeft: '20px',
    '&:hover': {
      color: '#FFFFFF',
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar variant="dense">
        <LinkWrapper to="/" exact className={classes.linkHeader}>
          <Typography component="h2" color="inherit">
            Home
          </Typography>
        </LinkWrapper>
        <LinkWrapper to="/news" className={classes.linkHeader}>
          <Typography component="h2" color="inherit">
            Science & Technology
          </Typography>
        </LinkWrapper>
      </Toolbar>
    </AppBar>
  );
}
