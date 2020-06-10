import React from "react";
import "../styles/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "3rem",
    flex: 1,
    flexDirection: "row",
  },
  cards: {
    display: "flex",
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.cards}>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() =>
            window.location.replace("https://github.com/Ziyangll")
          }>
          <CardMedia
            component='img'
            alt='project 1'
            height='140'
            image={process.env.PUBLIC_URL + "/projects-images/blob.svg"}
            title='project 1'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              project 1
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              project 1
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() =>
            window.location.replace("https://github.com/Ziyangll")
          }>
          <CardMedia
            component='img'
            alt='project 2'
            height='140'
            image={process.env.PUBLIC_URL + "/projects-images/blob2.svg"}
            title='project 2'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              project 2
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              project 2
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() =>
            window.location.replace("https://github.com/Ziyangll")
          }>
          <CardMedia
            component='img'
            alt='project 3'
            height='140'
            image={process.env.PUBLIC_URL + "/projects-images/blob3.svg"}
            title='project 3'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              project 3
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              project 3
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() =>
            window.location.replace("https://github.com/Ziyangll")
          }>
          <CardMedia
            component='img'
            alt='project 4'
            height='140'
            image={process.env.PUBLIC_URL + "/projects-images/blob4.svg"}
            title='project 4'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              project 4
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              project 4
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
