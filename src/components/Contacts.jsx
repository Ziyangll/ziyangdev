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
    minWidth: 260,
    maxWidth: 260,
    margin: "3rem",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
  },
});

export default function Contacts() {
  const classes = useStyles();

  return (
    <div className={classes.cards}>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() => window.location.replace("mailto:zl@auburn.edu")}>
          <CardMedia
            component='img'
            alt='project 1'
            height='140'
            image={"https://image.flaticon.com/icons/svg/941/941565.svg"}
            title='project 1'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Email
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() =>
            window.location.replace("https://www.linkedin.com/in/ziyangg/")
          }>
          <CardMedia
            component='img'
            alt='project 2'
            height='140'
            image={"https://image.flaticon.com/icons/svg/124/124011.svg"}
            title='project 2'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              LinkIn
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
            image={
              "https://github.githubassets.com/images/modules/open_graph/github-mark.png"
            }
            title='project 3'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Github
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() =>
            window.location.replace("https://twitter.com/ziyangdev")
          }>
          <CardMedia
            component='img'
            alt='project 4'
            height='140'
            image={"https://image.flaticon.com/icons/svg/733/733579.svg"}
            title='project 4'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Twitter
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
