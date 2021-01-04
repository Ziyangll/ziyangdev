import React from "react";
import "../styles/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    margin: "3rem",
  },
});

export default function ProjectCard({
  websiteLink,
  GitHubLink,
  imgPath,
  title,
  subtitle,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root + " grow"}>
      <CardActionArea onClick={() => window.open(websiteLink)}>
        <CardMedia
          component='img'
          alt={title}
          height='140'
          image={process.env.PUBLIC_URL + imgPath}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton
          aria-label='GitHub'
          style={{ marginLeft: "auto" }}
          onClick={() => window.open(GitHubLink)}>
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
