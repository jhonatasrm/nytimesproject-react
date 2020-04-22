import React from 'react';
import {
  Button, Box, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  buttonModal: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: -21,
    height: 28,
  },
  alignButtonsDialog: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 8,
  },
});

export default function ModalArticle(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.buttonModal}>
      <Button variant="contained" color="primary" onClick={handleClickOpen} disableElevation title="Read more">
        +
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <CardMedia
          src={props.image}
          title={props.caption}
        />
        <DialogContent>
          <Typography
            variant="body2"
            component="p"
            align="justify"
          >
            {props.description}
          </Typography>
        </DialogContent>
        <DialogActions className={classes.alignButtonsDialog}>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            <Button color="primary">
              Full Article
            </Button>
          </a>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
