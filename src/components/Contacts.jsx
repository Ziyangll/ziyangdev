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
    minWidth: 300,
    maxWidth: 300,
    margin: "3rem",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Contacts() {
  const classes = useStyles();

  return (
    <div className={classes.cards}>
      <Card className={classes.root + " grow"}>
        <CardActionArea
          onClick={() => window.open("mailto:ziyangli103@gmail.com")}>
          <CardMedia
            component='img'
            alt='Email'
            height='140'
            image={"https://image.flaticon.com/icons/svg/561/561127.svg"}
            title='email'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Email
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root + " grow"}>
        <CardActionArea
          onClick={() => window.open("https://www.linkedin.com/in/ziyangg/")}>
          <CardMedia
            component='img'
            alt='LinkedIn'
            height='140'
            image={"https://image.flaticon.com/icons/svg/889/889122.svg"}
            title='linkedin'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              LinkIn
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root + " grow"}>
        <CardActionArea
          onClick={() => window.open("https://github.com/Ziyangll")}>
          <CardMedia
            component='img'
            alt='GitHub'
            height='140'
            image={"https://image.flaticon.com/icons/svg/2111/2111425.svg"}
            title='github'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Github
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root + " grow"}>
        <CardActionArea
          onClick={() => window.open("https://twitter.com/ziyangdev")}>
          <CardMedia
            component='img'
            alt='Twitter'
            height='140'
            image={"https://image.flaticon.com/icons/svg/733/733579.svg"}
            title='twitter'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Twitter
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.root + " grow"}>
        <CardActionArea
          onClick={() => window.open("https://ziyangll.github.io/blog/")}>
          <CardMedia
            component='img'
            alt='Blog'
            height='140'
            image={
              "https://avatars2.githubusercontent.com/u/60530557?s=460&u=c928b805605cb0711affaf0b7c8aa3d965646cf0&v=4"
            }
            title='Blog'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Blog
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
