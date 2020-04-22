import React from 'react';
import {
  Typography, CardContent, Card, Box,
} from '@material-ui/core';
import Loading from '../../../components/Loading';

const CardHome = (props) => {
  const { isLoading, totalScience, totalTechnology } = props;

  return (
    <>
      <Card
        style={{
          margin: '0 auto',
          display: 'block',
          float: 'none',
          marginTop: '100px',
          paddingTop: '40px',
          maxWidth: '90%',
          boxShadow: '2px -1px 6px 1px #E5E5E5',
        }}
      >
        <CardContent>
          {isLoading ? (
            <Box
              style={{
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
              }}
            >
              <Loading type="bars" color="#3f51b5" />
            </Box>
          ) : (
            <Box style={{ textAlign: 'center' }}>
              <Typography gutterBottom variant="h5">
                Articles about Science found
              </Typography>
              <Typography gutterBottom variant="h2">
                {!totalScience ? 0 : totalScience}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                style={{ marginTop: '50px' }}
              >
                Articles about Technology found
              </Typography>
              <Typography gutterBottom variant="h2">
                {!totalTechnology ? 0 : totalTechnology}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </>
  );
};
export default CardHome;
