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

import CodeIcon from "@material-ui/icons/Code";

import ProjectCard from "./ProjectCard.jsx";

const useStyles = makeStyles({
  cards: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.cards}>
      <ProjectCard  
        websiteLink = "https://github.com/Ziyangll" 
        GitHubLink = "https://github.com/Ziyangll" 
        imgPath = "/projects-images/blob.svg" 
        alt = "project 1" 
        title = "placeholder" 
        subtitle = "project 1"
      />
      <ProjectCard  
        websiteLink = "https://github.com/Ziyangll" 
        GitHubLink = "https://github.com/Ziyangll" 
        imgPath = "/projects-images/blob2.svg" 
        alt = "project 2" 
        title = "placeholder" 
        subtitle = "project 2"
      />
      <ProjectCard  
        websiteLink = "https://github.com/Ziyangll" 
        GitHubLink = "https://github.com/Ziyangll" 
        imgPath = "/projects-images/blob3.svg" 
        alt = "project 3" 
        title = "placeholder" 
        subtitle = "project 3"
      />
      <ProjectCard  
        websiteLink = "https://github.com/Ziyangll" 
        GitHubLink = "https://github.com/Ziyangll" 
        imgPath = "/projects-images/blob4.svg" 
        alt = "project 4" 
        title = "placeholder" 
        subtitle = "project 4"
      />
      <ProjectCard  
        websiteLink = "https://github.com/Ziyangll" 
        GitHubLink = "https://github.com/Ziyangll" 
        imgPath = "/projects-images/blob5.svg" 
        alt = "project 5" 
        title = "placeholder" 
        subtitle = "project 5"
      />
      <ProjectCard  
        websiteLink = "https://github.com/Ziyangll" 
        GitHubLink = "https://github.com/Ziyangll" 
        imgPath = "/projects-images/blob6.svg" 
        alt = "project 6" 
        title = "placeholder" 
        subtitle = "project 6"
      />
    </div>
  );
}
