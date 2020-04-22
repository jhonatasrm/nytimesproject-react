import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent, Typography, Box, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModalArticle from "../ModalArticle";

const useStyles = makeStyles({
  cardArticle: {
    margin: 16,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    boxShadow: "2px -1px 4px 1px #E5E5E5",
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textSecondary: {
    marginBottom: 8,
    fontSize: 14,
  },
  category: {
    backgroundColor: "#3f51b5",
    color: "#fff",
    textAlign: "center",
    borderRadius: 10,
    padding: 10,
    width: 100,
  },
  categoryAlign: {
    display: "flex",
    justifyContent: "start",
  },
  imageSize: {
    height: 0,
    paddingTop: "56.25%",
  },
});

const CardArticle = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardArticle}>
      <Box>
        <Box>
          <Typography
            className={classes.category}
            variant="caption"
            title="Category"
          >
            {props.category}
          </Typography>
          <ModalArticle
            title={props.title}
            description={props.description}
            image={props.image}
            url={props.url}
          />
        </Box>
        <CardContent key={props.key}>
          <Box className={classes.categoryAlign} />
          <CardMedia
            className={classes.imageSize}
            image={props.image}
            title={props.caption}
          />
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
            align="justify"
          >
            {props.title}
          </Typography>
          <Typography className={classes.textSecondary} color="textSecondary">
            {!props.author ? "By Anonymous" : props.author}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardArticle;
