import React from 'react';
import {
  Typography,
  CardContent,
  Card,
  Box,
  makeStyles,
} from '@material-ui/core';
import Loading from '../../../components/Loading';

const useStyles = makeStyles({
  cardHome: {
    margin: '0 auto',
    display: 'block',
    float: 'none',
    marginTop: '100px',
    paddingTop: '40px',
    maxWidth: '90%',
    boxShadow: '2px -1px 6px 1px #E5E5E5',
  },
  cardBox: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
  },
  cardDistanceBetweenInfo: {
    marginTop: '50px',
  },
});

export default function CardHome(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.cardHome}>
        <CardContent>
          {props.isLoadingScience && props.isLoadingTechnology ? (
            <Box className={classes.cardBox}>
              <Loading type="bars" color="#3f51b5" />
            </Box>
          ) : (
            <>
              <Box style={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5">
                  Articles about Science found
                </Typography>
                <Typography gutterBottom variant="h2">
                  {!props.totalScience ? 0 : props.totalScience}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.cardDistanceBetweenInfo}
                >
                  Articles about Technology found
                </Typography>
                <Typography gutterBottom variant="h2">
                  {!props.totalTechnology ? 0 : props.totalTechnology}
                </Typography>
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
}
